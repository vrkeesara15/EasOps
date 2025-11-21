'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya Desai',
    title: 'VP of Engineering, CloudNova',
    quote:
      'EAS OPS delivered an observability platform that cut our mean time to detect by 70%. Their AI-assisted runbooks are now a core part of our incident response.',
    avatar: '/images/avatar1.svg'
  },
  {
    name: 'Michael Turner',
    title: 'Head of SRE, FinEdge',
    quote:
      'Their platform engineering team created golden paths that onboard new services in minutes. Developer satisfaction is way up and reliability improved in parallel.',
    avatar: '/images/avatar2.svg'
  },
  {
    name: 'Laura Kim',
    title: 'CTO, DataMesh Labs',
    quote:
      'From migration planning to AI Ops automation, the team shipped reliable change fast. We trust them as partners, not vendors.',
    avatar: '/images/avatar3.svg'
  }
];

export default function Testimonials() {
  return (
    <section className="container-section space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-white/60">Testimonials</p>
          <h2 className="text-3xl font-semibold">Teams that rely on EAS OPS</h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center overflow-hidden">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 object-cover" />
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-white/80">“{testimonial.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
