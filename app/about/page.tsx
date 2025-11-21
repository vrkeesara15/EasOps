import type { Metadata } from 'next';

const values = [
  {
    title: 'Reliability is a product',
    detail: 'We treat reliability as a feature—designed, measured, and shipped iteratively with your teams.'
  },
  {
    title: 'Automation first',
    detail: 'If it repeats, it automates. We codify operational knowledge into trusted runbooks and pipelines.'
  },
  {
    title: 'Co-create with customers',
    detail: 'Pods embed with your teams to co-design platforms that match your culture and constraints.'
  }
];

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about EAS OPS AI Solutions—our mission, values, and the experts behind our AI-driven operations.',
  openGraph: {
    title: 'About | EAS OPS AI Solutions',
    description: 'Meet the reliability and platform experts accelerating resilient delivery.',
    url: 'https://www.easops.ai/about'
  }
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="container-section space-y-3">
        <p className="text-sm uppercase tracking-wide text-white/60">About</p>
        <h1 className="text-4xl font-semibold">We are builders of resilient, intelligent platforms</h1>
        <p className="text-white/80 max-w-3xl">
          EAS OPS AI Solutions is a collective of SREs, platform engineers, and data scientists who have scaled systems for hyper-growth companies. We combine AI-native tooling with proven operational practices to help you ship fast and sleep better.
        </p>
      </section>
      <section className="container-section grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6 space-y-3">
          <h3 className="text-xl font-semibold">Our mission</h3>
          <p className="text-white/80">
            Make reliable software delivery effortless by embedding AI into every stage of operations—from detection to remediation to learning.
          </p>
        </div>
        <div className="glass-card p-6 space-y-3">
          <h3 className="text-xl font-semibold">How we work</h3>
          <p className="text-white/80">
            Cross-functional pods ship with you, bringing platform accelerators, automation, and playbooks tailored to your environment.
          </p>
        </div>
      </section>
      <section className="container-section grid md:grid-cols-3 gap-6">
        {values.map((value) => (
          <div key={value.title} className="glass-card p-6 space-y-2">
            <h3 className="text-lg font-semibold">{value.title}</h3>
            <p className="text-white/75">{value.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
