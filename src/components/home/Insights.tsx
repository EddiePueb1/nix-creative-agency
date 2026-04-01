'use client';

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// RESEND SETUP — see src/app/api/subscribe/route.ts for full instructions
//
// Short version:
// 1. Create a free account at resend.com
// 2. Create an API key and an Audience called "Insights List"
// 3. Add to your .env.local:
//      RESEND_API_KEY=re_xxxxxxxxxxxx
//      RESEND_AUDIENCE_ID=your_audience_id
//      EMAIL_FROM=hello@nixcreative.net
// ─────────────────────────────────────────────────────────────────

const TOPICS = [
  "SEO tips for local businesses",
  "Social media that actually converts",
  "AI tools for small business owners",
  "Website design & conversion",
];

export default function Insights() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left — messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Insights
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Marketing knowledge,
              <br />
              <span className="text-[#88c222]">without the noise.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We're building out our insights library — practical marketing
              content written specifically for service business owners.
              No fluff, no recycled takes. Be the first to get it.
            </p>

            {/* Topic previews */}
            <div className="flex flex-col gap-3">
              {TOPICS.map((topic, i) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b4ff39] shrink-0" />
                  <span className="text-sm">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — email capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-[#111111] rounded-[2rem] p-8 md:p-10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-14 h-14 rounded-full bg-[#b4ff39] flex items-center justify-center mb-6">
                    <Sparkles size={24} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    You're on the list.
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Check your inbox — we sent you a welcome email.
                    We'll be in touch as soon as we publish.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-[#b4ff39]/10 border border-[#b4ff39]/20 rounded-full px-4 py-1.5 mb-6">
                      <Sparkles size={12} className="text-[#b4ff39]" />
                      <span className="text-[#b4ff39] text-xs font-semibold tracking-wider uppercase">
                        Coming soon
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                      Get early access to our insights.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Join the list and be the first to receive marketing
                      tips, case studies, and growth strategies built for
                      service businesses like yours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="insights-email" className="block text-sm font-medium text-gray-400 mb-2 ml-1">
                        Your email address
                      </label>
                      <input
                        id="insights-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@yourbusiness.com"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#b4ff39] focus:border-transparent transition-all hover:border-white/20"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 bg-[#b4ff39] text-black font-semibold rounded-2xl px-6 py-3.5 hover:bg-[#a3eb32] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        "Subscribing..."
                      ) : (
                        <>
                          Notify me when we publish
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="text-red-400 text-sm text-center">
                        {errorMsg || "Something went wrong."}{" "}
                        <a href="mailto:hello@nixcreative.net" className="underline">
                          Email us directly.
                        </a>
                      </p>
                    )}

                    <p className="text-xs text-gray-600 text-center leading-relaxed">
                      No spam. Unsubscribe anytime. We respect your inbox.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
