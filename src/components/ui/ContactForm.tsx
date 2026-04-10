"use client";

import { useState } from "react";
import { Button } from "./Button";
import { motion } from "motion/react";

export interface ContactFormProps {
  title?: string;
  subtext?: string;
  className?: string;
}

const SERVICES = [
  "Website Design",
  "SEO",
  "AI Automations",
  "Social Media",
  "Branding",
  "Analytics"
];

export function ContactForm({
  title = "Let's work together",
  subtext = "Give us a call, send us an email, or submit the form below and tell us how we can be of service.",
  className = ""
}: ContactFormProps) {
  const [showOtherBusiness, setShowOtherBusiness] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Append the public access key to the frontend request
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
      formData.append("access_key", accessKey);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();

        // Track successful form submission in Google Analytics
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "generate_lead", {
            event_category: "Contact Form",
            event_label: "Form Submitted",
          });
        }

        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Submission failed. Web3Forms message:", data.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch Exception:", error);
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-[#111111] text-white shadow-sm rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/10 ${className}`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">{subtext}</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Personal & Business Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 ml-1">Full Name <span className="text-red-400">*</span></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 ml-1">Business Name <span className="text-red-400">*</span></label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="Acme Corp"
                required
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 ml-1">Email Address <span className="text-red-400">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="jane@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 ml-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Business Type & Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 relative">
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 ml-1">What best describes your business? <span className="text-red-400">*</span></label>
              <select
                id="businessType"
                name="businessType"
                onChange={(e) => setShowOtherBusiness(e.target.value === "Other")}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20 appearance-none"
                required
                defaultValue=""
              >
                <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select an option...</option>
                <option value="Contractor" className="bg-[#1a1a1a] text-white">Contractor</option>
                <option value="Home Improvement Service" className="bg-[#1a1a1a] text-white">Home Improvement Service</option>
                <option value="Local Shop" className="bg-[#1a1a1a] text-white">Local Shop</option>
                <option value="Service Area Business" className="bg-[#1a1a1a] text-white">Service Area Business</option>
                <option value="Other" className="bg-[#1a1a1a] text-white">Other - Please specify</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 pt-7">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="businessWebsite" className="block text-sm font-medium text-gray-300 ml-1">Business Website</label>
              <input
                type="url"
                id="businessWebsite"
                name="businessWebsite"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="https://example.com"
              />
            </div>
            {showOtherBusiness && (
              <div className="space-y-2 md:col-span-2 animate-in fade-in slide-in-from-top-2">
                <label htmlFor="otherBusiness" className="block text-sm font-medium text-gray-300 ml-1">Please specify your business type <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="otherBusiness"
                  name="otherBusiness"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                  placeholder="Tell us about your business..."
                  required={showOtherBusiness}
                />
              </div>
            )}
          </div>

          {/* Years & Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 relative">
              <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-300 ml-1">Years in Business <span className="text-red-400">*</span></label>
              <select
                id="yearsInBusiness"
                name="yearsInBusiness"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20 appearance-none"
                required
                defaultValue=""
              >
                <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select an option...</option>
                <option value="Less than a year" className="bg-[#1a1a1a] text-white">Less than a year</option>
                <option value="1-3 years" className="bg-[#1a1a1a] text-white">1-3 years</option>
                <option value="3-5 years" className="bg-[#1a1a1a] text-white">3-5 years</option>
                <option value="5+ years" className="bg-[#1a1a1a] text-white">5+ years</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 pt-7">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <div className="space-y-2 relative">
              <label htmlFor="monthlyBudget" className="block text-sm font-medium text-gray-300 ml-1">Monthly Marketing Budget</label>
              <select
                id="monthlyBudget"
                name="monthlyBudget"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20 appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select an option...</option>
                <option value="Under $500" className="bg-[#1a1a1a] text-white">Under $500</option>
                <option value="$500 - $1,000" className="bg-[#1a1a1a] text-white">$500 - $1,000</option>
                <option value="$1,000 - $1,500" className="bg-[#1a1a1a] text-white">$1,000 - $1,500</option>
                <option value="$1,500 - $2,000" className="bg-[#1a1a1a] text-white">$1,500 - $2,000</option>
                <option value="$2,000+" className="bg-[#1a1a1a] text-white">$2,000+</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 pt-7">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Interested Services */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300 ml-1">Which services are you interested in?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICES.map((service) => (
                <label key={service} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    className="w-5 h-5 rounded border-white/20 bg-black/20 text-[#88c222] focus:ring-[#88c222] focus:ring-offset-0 focus:ring-2 focus:ring-offset-transparent accent-[#88c222] transition-all cursor-pointer"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Start Timeline & How Did You Hear */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 relative">
              <label htmlFor="startTimeline" className="block text-sm font-medium text-gray-300 ml-1">When are you looking to start? <span className="text-red-400">*</span></label>
              <select
                id="startTimeline"
                name="startTimeline"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20 appearance-none"
                required
                defaultValue=""
              >
                <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select an option...</option>
                <option value="Immediately" className="bg-[#1a1a1a] text-white">Immediately</option>
                <option value="In the next month" className="bg-[#1a1a1a] text-white">In the next month</option>
                <option value="In the next 3 months" className="bg-[#1a1a1a] text-white">In the next 3 months</option>
                <option value="In the next 6 months" className="bg-[#1a1a1a] text-white">In the next 6 months</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 pt-7">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-300 ml-1">How did you hear about us?</label>
              <input
                type="text"
                id="howDidYouHear"
                name="howDidYouHear"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="Google, Referral, Social Media..."
                maxLength={200}
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 ml-1">How can we be of service? <span className="text-red-400">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all resize-none hover:border-white/20"
              placeholder="Tell us about your project, goals, or specific needs..."
              maxLength={1500}
              required
            ></textarea>
          </div>

          {/* Submit and Disclosure */}
          <div className="pt-4 flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full sm:w-auto text-base py-3.5 px-10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === "submitting" || status === "success"}
              >
                {status === "submitting" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Error! Try Again" : "Submit Inquiry"}
              </Button>
              <a 
                href="mailto:support@nixcreative.net" 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Or email us at support@nixcreative.net
              </a>
            </div>
            {status === "success" && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#88c222] font-medium"
              >
                Thank you! Your message has been sent successfully. We will be in touch shortly.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 font-medium"
              >
                Oops! Something went wrong. Please try emailing us directly instead.
              </motion.p>
            )}
            <p className="text-xs text-gray-400 text-center md:text-left leading-relaxed max-w-2xl">
              *If you provide your phone number or your email address, you're agreeing to receive an informational or follow-up text from Nix Creative. Message frequency might vary. Message and data rates may apply. Reply STOP to opt out.
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
