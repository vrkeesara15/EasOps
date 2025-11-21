import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact EAS OPS AI Solutions to plan your AI operations, observability, and platform engineering initiatives.'
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="container-section space-y-3">
        <p className="text-sm uppercase tracking-wide text-white/60">Contact</p>
        <h1 className="text-4xl font-semibold">Speak with our team</h1>
        <p className="text-white/80 max-w-3xl">
          Tell us about your reliability and platform goals. We&apos;ll respond within one business day with recommended next steps and a tailored workshop agenda.
        </p>
      </section>
      <div className="container-section grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <div className="glass-card p-6 space-y-3">
          <h3 className="text-lg font-semibold">Prefer async?</h3>
          <p className="text-white/75">
            Reach us at hello@easops.ai. We love sharing reference architectures, sample runbooks, and success stories from teams like yours.
          </p>
          <div className="space-y-2 text-white/70 text-sm">
            <p>Global, remote-first</p>
            <p>Available for on-site workshops</p>
            <p>Enterprise procurement ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}
