'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Ops Automation',
    description: 'Closed-loop remediation, predictive scaling, and runbook automation tailored to your stack.',
    icon: '🤖'
  },
  {
    title: 'Observability & SRE',
    description: 'Full-fidelity telemetry pipelines, SLO engineering, and incident command enablement.',
    icon: '📊'
  },
  {
    title: 'Platform Engineering',
    description: 'Golden paths, internal developer portals, and secure supply chains for cloud-native delivery.',
    icon: '🛠️'
  },
  {
    title: 'Migrations & Modernization',
    description: 'Blueprints and delivery pods to transition legacy workloads into resilient cloud platforms.',
    icon: '☁️'
  }
];

export default function ServicesGrid() {
  return (
    <section className="container-section space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-white/60">Solutions</p>
          <h2 className="text-3xl font-semibold">Expert services that accelerate reliable delivery</h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card p-6 md:p-7 flex gap-4"
          >
            <div className="h-12 w-12 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center text-2xl">
              {service.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-white/75">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
