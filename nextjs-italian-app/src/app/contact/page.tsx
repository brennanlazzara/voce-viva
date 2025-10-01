"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-r from-emerald-100 via-white to-blue-100 dark:from-emerald-900/20 dark:via-gray-800 dark:to-blue-900/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-emerald-200 dark:border-emerald-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Send us a Message
            </h2>

            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-md">
                <p className="text-green-800 dark:text-green-300">
                  Message sent successfully! We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-md">
                <p className="text-red-800 dark:text-red-300">
                  Failed to send message. Please try again.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Tell us about your experience learning Italian verbs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-100 via-white to-blue-100 dark:from-emerald-900/20 dark:via-gray-800 dark:to-blue-900/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-emerald-200 dark:border-emerald-700">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Get in Touch
              </h2>

              <>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                  🐙 Social
                </h3>
                <a
                  href="https://www.linkedin.com/in/brennanlazzara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Linkedin
                </a>
              </>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                    🐱 GitHub
                  </h3>
                  <a
                    href="https://github.com/brennanlazzara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    @brennanlazzara
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                    🕒 Response Time
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-400 dark:border-green-600 p-4 shadow-md">
              <h3 className="font-semibold text-green-800 dark:text-green-300">
                💡 Feature Requests
              </h3>
              <p className="text-green-700 dark:text-green-300 mt-1">
                Have ideas for new features? We'd love to hear them!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
