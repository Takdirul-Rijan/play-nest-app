import React, { useState } from "react";
import Swal from "sweetalert2";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all required fields!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We will get back to you soon.",
      confirmButtonColor: "#ec4899",
    });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-11/12 mx-auto py-16 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">Contact Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Have questions, feedback, or need help? We're here to support you!
          Reach out to PlayNest anytime — we'd love to hear from you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 text-center hover:shadow-lg transition">
          <Mail size={40} className="text-pink-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Email Us</h4>
          <p className="text-gray-600 mt-2">support@playnest.com</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 text-center hover:shadow-lg transition">
          <Phone size={40} className="text-pink-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
          <p className="text-gray-600 mt-2">+880 1234 567891 </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 text-center hover:shadow-lg transition">
          <MapPin size={40} className="text-pink-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Visit Us</h4>
          <p className="text-gray-600 mt-2">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-pink-100">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Send Us a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-700 font-medium">Your Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email Address *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Message *</label>
            <textarea
              rows="4"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
