import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Home',
  description: 'AI-driven reliability engineering and platform operations for cloud-native teams.'
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <section className="container-section grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-white/60">Why EAS OPS</p>
          <h2 className="text-3xl font-semibold">Reliability, delivered with AI precision</h2>
          <p className="text-white/80">
            From discovery to production hardening, we combine product thinking with deep SRE craft to build platforms that scale. Our AI copilots guide incident response, optimize capacity, and keep your services reliable.
          </p>
          <ul className="space-y-2 text-white/75">
            <li>• AI insights layered onto your existing observability stack.</li>
            <li>• Platform blueprints designed for compliance and speed.</li>
            <li>• Pods of experts embedded with your teams to accelerate delivery.</li>
          </ul>
        </div>
        <div className="glass-card p-6 md:p-8 space-y-4">
          <h3 className="text-xl font-semibold">Engagement model</h3>
          <div className="space-y-3 text-white/80">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span>Discovery & Roadmap</span>
              <span className="text-sm text-white/60">2-3 weeks</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span>Pilot & Runbooks</span>
              <span className="text-sm text-white/60">6-8 weeks</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Scale & Operate</span>
              <span className="text-sm text-white/60">Ongoing partnership</span>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
