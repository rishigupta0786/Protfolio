import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <motion.div variants={textVariant()} className="mb-6">
        <h2
          className="text-6xl font-extrabold text-center bg-gradient-to-r 
                       from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent"
        >
          Contact
        </h2>
        <p className="text-gray-300 text-center text-sm mt-2">
          I’d love to hear from you! Fill out the form below 🚀
        </p>
      </motion.div>

      {/* Stylish Glassmorphism Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-md p-8 rounded-2xl
                   bg-white/10 backdrop-blur-md border border-white/20 
                   shadow-2xl transition-all duration-300"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 
                     text-white placeholder-gray-400 
                     focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 
                     text-white placeholder-gray-400 
                     focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 rounded-lg bg-white/10 border border-white/20 
                     text-white placeholder-gray-400 
                     focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-pink-500 
                     hover:opacity-90 text-white font-bold 
                     py-3 px-6 rounded-lg shadow-lg 
                     transition-all duration-200"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

// ✅ Wrapped with SectionWrapper like Tech.jsx
export default SectionWrapper(Contact, "contact");
