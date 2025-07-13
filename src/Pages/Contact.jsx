/*
   Copyright (C), 2023-2024, Atindra Raut
   Author: Sara Echeverria
   FileName: Contact.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import SectionTitle from "../Components/SectionTitle";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_9mgd5kx", "template_lj3hfcc", e.target, "sBQvhMfFnp63GRtvB")
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          setIsLoading(false);
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.error(error);
          setIsLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="w-full overflow-hidden-web flex flex-col items-center">
      <div className="w-full flex flex-col xl:w-[70%] pb-16">
        <div className="w-full">
          <SectionTitle title="GET IN TOUCH" subtitle="Let's work together" />
        </div>
        
        {/* Modern Contact Layout */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Info */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex flex-col gap-8"
            >
              {/* Contact Header */}
              <div className="bg-gradient-to-br from-primary-900/40 to-primary-800/40 backdrop-blur-sm border border-primary-400/30 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
                <p className="text-grayscale-100 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, collaborating on exciting projects, 
                  or just having a chat about technology and development.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <m.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-grayscale-900/70 to-grayscale-800/70 backdrop-blur-sm border border-grayscale-700/50 rounded-2xl p-6 hover:border-primary-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600/30 to-primary-500/30 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-grayscale-100">atindraraut@example.com</p>
                    </div>
                  </div>
                </m.div>

                <m.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-grayscale-900/70 to-grayscale-800/70 backdrop-blur-sm border border-grayscale-700/50 rounded-2xl p-6 hover:border-primary-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Location</h4>
                      <p className="text-grayscale-100">Available for Remote Work</p>
                    </div>
                  </div>
                </m.div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-grayscale-900/70 to-grayscale-800/70 backdrop-blur-sm border border-grayscale-700/50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-6">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/atindraraut" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-gray-600/30 to-gray-500/30 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-gray-300 text-xl hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/atindraraut" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-xl hover:text-blue-300 transition-colors" />
                  </a>
                  <a 
                    href="https://twitter.com/atindraraut" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-sky-600/30 to-sky-500/30 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="text-sky-400 text-xl hover:text-sky-300 transition-colors" />
                  </a>
                </div>
              </div>
            </m.div>
          </LazyMotion>

          {/* Right Column - Contact Form */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              className="bg-gradient-to-br from-grayscale-900/70 to-grayscale-800/70 backdrop-blur-sm border border-grayscale-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              <form
                id="contact_form"
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-grayscale-100 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="from_name"
                      required
                      className="w-full px-4 py-3 bg-grayscale-800/50 border border-grayscale-600/50 rounded-xl text-grayscale-100 placeholder-grayscale-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-grayscale-100 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="from_last"
                      required
                      className="w-full px-4 py-3 bg-grayscale-800/50 border border-grayscale-600/50 rounded-xl text-grayscale-100 placeholder-grayscale-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-grayscale-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 bg-grayscale-800/50 border border-grayscale-600/50 rounded-xl text-grayscale-100 placeholder-grayscale-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-grayscale-100 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-grayscale-800/50 border border-grayscale-600/50 rounded-xl text-grayscale-100 placeholder-grayscale-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <m.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                    isSent 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isLoading ? 'Sending...' : isSent ? 'Message Sent!' : 'Send Message'}
                </m.button>
              </form>
            </m.div>
          </LazyMotion>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-grayscale-950 py-8">
        <div className="w-full xl:w-[70%] mx-auto flex justify-center">
          <span className="text-grayscale-100">
            Made with ❤️ by <em className="text-primary-400">Atindra Raut</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
