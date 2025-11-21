import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy and data practices for EAS OPS AI Solutions.'
};

export default function PrivacyPage() {
  return (
    <section className="container-section space-y-4">
      <h1 className="text-4xl font-semibold">Privacy</h1>
      <p className="text-white/80">
        We respect your data. Any information shared through our forms is used solely to respond to your inquiry and craft a tailored engagement. We do not sell or share information with third parties.
      </p>
      <p className="text-white/80">
        For security reviews or additional questions, contact us at security@easops.ai.
      </p>
    </section>
  );
}
