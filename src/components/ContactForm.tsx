"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedProduct: "All Products",
  });

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
          <div className="mb-12 lg:mb-0 lg:w-1/2 text-center lg:text-left">
            <h2 className="mb-4 text-5xl font-bold text-white">
              Get Early Access
              <span className="block text-yellow-400">to Polarizeed</span>
              <span className="block text-yellow-400">Delta 8 Strips</span>
            </h2>
            <p className="text-lg text-gray-300">
              By submitting this form, you&apos;ll be the first to know about
              our launch and exclusive offers.
            </p>
          </div>

          <div className="w-full max-w-md mx-auto lg:w-5/12">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg bg-gray-900/80 p-8 backdrop-blur-sm"
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-6">
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
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-purple-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                SIGN UP FOR EARLY ACCESS
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
