"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollLock } from "@/context/ScrollLockContext";

const ContactForm = () => {
  const { setIsLocked } = useScrollLock();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    industry: "",
    email: "",
    phone: "",
    interestedProduct: "All Products",
    marketingOptOut: false,
  });

  const GOOGLE_APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbznoZfoing_RNQoEe2wOGFlHj3jwA4G23Bec4D6z5zcy8G1sP9gLNfL-3wNPpFrKLzmKw/exec";

  useEffect(() => {
    if (hasAnimated) {
      setIsLocked(false);
    }
  }, [hasAnimated, setIsLocked]);

  const onAnimationComplete = () => {
    setHasAnimated(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("Sending form data:", formData);

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response received:", response);

      setFormData({
        firstName: "",
        lastName: "",
        businessName: "",
        industry: "",
        email: "",
        phone: "",
        interestedProduct: "All Products",
        marketingOptOut: false,
      });

      setSubmitStatus("success");

      // Reset form status after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <section className="pt-2 md:pt-3">
      <div className="relative flex items-center justify-center py-12">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/contact-fom/bg-contact–form.png")',
          }}
        />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              className="mb-12 lg:mb-0 lg:w-1/2 text-center lg:text-left"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="mb-4 text-5xl font-bold text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Get Early Access
                <motion.span
                  className="block text-yellow-400"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  to Polarizeed
                </motion.span>
                <motion.span
                  className="block text-yellow-400"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  Delta 8 Products
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                By submitting this form, you&apos;ll be the first to know about
                our launch and exclusive offers.
              </motion.p>
            </motion.div>

            <motion.div
              className="w-full max-w-md mx-auto lg:w-5/12"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onAnimationComplete={onAnimationComplete}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="rounded-lg bg-gray-900/80 p-8 backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {/* 1. First Name */}
                <motion.div
                  className="mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </motion.div>

                {/* 2. Last Name */}
                <motion.div
                  className="mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </motion.div>

                {/* 3. Email */}
                <motion.div
                  className="mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </motion.div>

                {/* 4. Phone */}
                <motion.div
                  className="mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </motion.div>

                {/* 5. Business Name */}
                <motion.div
                  className="mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
                >
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name (optional)"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </motion.div>

                {/* 6. Industry */}
                <motion.div
                  className="mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  <input
                    type="text"
                    name="industry"
                    placeholder="Industry (optional)"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </motion.div>

                {/* 7. Dropdown */}
                <motion.div
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
                >
                  <select
                    name="interestedProduct"
                    value={formData.interestedProduct}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="All Products">All Products</option>
                    <option value="Delta 8 Products">Delta 8 Products</option>
                    <option value="Nano Strips Products">
                      Nano Strips Products
                    </option>
                    <option value="Delta 8 Products">
                      Polarization as a Product
                    </option>
                    <option value="Other Products">Other Products</option>
                  </select>
                </motion.div>

                <motion.div
                  className="mb-6 flex items-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                  <input
                    type="checkbox"
                    name="marketingOptOut"
                    id="marketingOptOut"
                    checked={formData.marketingOptOut}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 bg-gray-800 text-purple-600 focus:ring-2 focus:ring-purple-500"
                  />
                  <label
                    htmlFor="marketingOptOut"
                    className="ml-2 text-sm text-gray-300"
                  >
                    Opt out of marketing communications
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className={`w-full rounded-md ${
                    isSubmitting
                      ? "bg-purple-400"
                      : submitStatus === "success"
                      ? "bg-green-600"
                      : submitStatus === "error"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-purple-600 hover:bg-purple-700"
                  } py-4 text-lg font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500`}
                >
                  {isSubmitting
                    ? "SUBMITTING..."
                    : submitStatus === "success"
                    ? "THANK YOU FOR SIGNING UP! ✓"
                    : submitStatus === "error"
                    ? "ERROR - PLEASE TRY AGAIN"
                    : "SIGN UP FOR EARLY ACCESS"}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
