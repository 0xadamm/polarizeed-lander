"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollLock } from "@/context/ScrollLockContext";

const ContactForm = () => {
  const { setIsLocked } = useScrollLock();
  const [hasAnimated, setHasAnimated] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedProduct: "All Products",
  });

  useEffect(() => {
    if (hasAnimated) {
      setIsLocked(false);
    }
  }, [hasAnimated, setIsLocked]);

  const onAnimationComplete = () => {
    setHasAnimated(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will implement backend integration later
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="flex items-center justify-center relative min-h-screen bg-navy-900 py-16">
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
                Delta 8 Strips
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

              <motion.div
                className="mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
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

              <motion.div
                className="mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
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

              <motion.div
                className="mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              >
                <select
                  name="interestedProduct"
                  value={formData.interestedProduct}
                  onChange={handleChange}
                  className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="All Products">All Products</option>
                  <option value="Delta 8 Strips">Delta 8 Strips</option>
                  <option value="Other Products">Other Products</option>
                </select>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full rounded-md bg-purple-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SIGN UP FOR EARLY ACCESS
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
