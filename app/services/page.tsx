import type { Metadata } from 'next';
import ServicesGrid from '@/components/ServicesGrid';

const capabilities = [
  {
    title: 'AI Ops Fabric',
    detail: 'Telemetry ingestion, anomaly detection, and LLM copilots integrated into your existing tools.'
  },
  {
    title: 'Platform Enablement',
    detail: 'Golden Kubernetes clusters, secure supply chains, and IDPs that developers love.'
  },
  {
    title: 'SRE as a Service',
    detail: 'SLO design, incident command, chaos practice, and production readiness to harden every launch.'
  },
  {
    title: 'Cloud Migration Pods',
    detail: 'Blueprints, automated landing zones, and playbooks for low-risk modernization.'
  }
];

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI Ops automation, observability, and platform engineering services tailored for high-performing teams.'
};

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <section className="container-section space-y-3">
        <p className="text-sm uppercase tracking-wide text-white/60">What we do</p>
        <h1 className="text-4xl font-semibold">Services built for reliability-first teams</h1>
        <p className="text-white/80 max-w-3xl">
          We deliver platform engineering squads, AI Ops products, and SRE expertise to accelerate delivery while keeping risk low. Whether you need to modernize legacy systems or scale a new platform, we bring blueprints and hands-on builders.
        </p>
      </section>
      <ServicesGrid />
      <section className="container-section grid md:grid-cols-2 gap-6">
        {capabilities.map((capability) => (
          <div key={capability.title} className="glass-card p-6 space-y-2">
            <h3 className="text-xl font-semibold">{capability.title}</h3>
            <p className="text-white/75">{capability.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
