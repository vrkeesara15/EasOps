'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 md:p-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-wide text-white/60">Contact</p>
          <h2 className="text-2xl font-semibold">Let&apos;s build reliable systems together</h2>
        </div>
        {submitted && (
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-200 text-sm">
            Message ready to send — we&apos;ll get back within 1 business day.
          </span>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="space-y-2 text-sm text-white/80">
          Name
          <input
            required
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-primary/50 px-4 py-3 focus:border-accent/60 outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-white/80">
          Work Email
          <input
            required
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/10 bg-primary/50 px-4 py-3 focus:border-accent/60 outline-none"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-white/80">
        What are you interested in?
        <select className="w-full rounded-xl border border-white/10 bg-primary/50 px-4 py-3 focus:border-accent/60 outline-none">
          <option>AI Ops Automation</option>
          <option>Observability & SRE</option>
          <option>Platform Engineering</option>
          <option>Migrations & Modernization</option>
          <option>Advisory & Training</option>
        </select>
      </label>
      <label className="space-y-2 text-sm text-white/80">
        Project details
        <textarea
          required
          rows={4}
          placeholder="Tell us about your goals, challenges, and timelines."
          className="w-full rounded-xl border border-white/10 bg-primary/50 px-4 py-3 focus:border-accent/60 outline-none"
        />
      </label>
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="w-full md:w-auto px-5 py-3 rounded-xl bg-accent text-primary font-semibold shadow-lg shadow-accent/20"
      >
        Send message
      </motion.button>
    </motion.form>
  );
}
