'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="container-section grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm"
        >
          AI Operations Reimagined
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-semibold leading-tight"
        >
          Empowering reliability teams with intelligent automation.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-white/80"
        >
          EAS OPS AI Solutions blends AI, SRE practices, and platform engineering to deliver resilient, self-healing systems that keep teams moving fast.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/contact"
            className="px-5 py-3 rounded-xl bg-accent text-primary font-semibold shadow-xl shadow-accent/30"
          >
            Book a demo
          </Link>
          <Link
            href="/services"
            className="px-5 py-3 rounded-xl border border-white/10 hover:border-accent/40 transition"
          >
            Explore services
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 text-sm text-white/70"
        >
          <div>
            <p className="text-2xl font-semibold text-white">99.99%</p>
            <p>Uptime targets</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">10x</p>
            <p>Incident insight speed</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">24/7</p>
            <p>AI-assisted response</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6 md:p-8"
      >
        <div className="grid gap-4 text-sm text-white/80">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div>
              <p className="text-xs uppercase text-white/50">Real-time Health</p>
              <p className="text-lg font-semibold">Multi-cloud observability</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300">Healthy</span>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase text-white/50">Automation timeline</p>
            {[
              'Predictive scaling triggered',
              'Anomaly detected in latency',
              'Self-heal runbook executed',
              'Post-incident summary generated'
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <p className="text-white/80">{item}</p>
                <span className="ml-auto text-xs text-white/50">{15 - index}m ago</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
