"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import mail from "./mailer";
import { message as antdMessage } from "antd";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailerResponse, setMailerResponse] = useState("");

  // Reset form fields
  const empty = () => setFormData({ name: "", email: "", message: "" });

  useEffect(() => {
    if (mailerResponse) {
      const timer = setTimeout(() => {
        setMailerResponse(""); // Reset response after 3 seconds
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [mailerResponse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name === "" || email === "" || message === "") {
      setMailerResponse("empty");
      antdMessage.error("Please fill all the fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res: any = await mail({ name, email, message });
      if (res.status === 200) {
        setMailerResponse("success");
        antdMessage.success("Message sent successfully!");
        empty(); // Clear form only after successful submission
      } else {
        setMailerResponse("error");
        antdMessage.error("Failed to send the message. Try again later.");
      }
    } catch (err) {
      setMailerResponse("error");
      antdMessage.error("An unexpected error occurred.");
      console.error("EmailJS Error: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />

      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#FF6B00] mb-8 mx-auto"></div>
          <p className="text-gray-400">
            Have questions about AskLMS? We're here to help you transform your
            coaching institute.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="bg-black/50 border-orange-500/20 focus:border-orange-500/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="bg-black/50 border-orange-500/20 focus:border-orange-500/40"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
                className="bg-black/50 border-orange-500/20 focus:border-orange-500/40 min-h-[120px]"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
