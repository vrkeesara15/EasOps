import type { Metadata } from 'next';

const roles = [
  {
    title: 'Senior Site Reliability Engineer',
    type: 'Remote - Americas',
    summary: 'Lead incident response, define SLOs, and design automation for mission-critical systems.'
  },
  {
    title: 'Platform Engineer (Kubernetes)',
    type: 'Remote - EMEA',
    summary: 'Build secure golden paths, GitOps workflows, and developer platform features with product mindset.'
  },
  {
    title: 'AI Ops Product Manager',
    type: 'Remote - Global',
    summary: 'Shape our AI automation experiences, working closely with customers and engineering pods.'
  }
];

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join EAS OPS AI Solutions to build AI-powered reliability and platform experiences for modern teams.'
};

export default function CareersPage() {
  return (
    <div className="space-y-10">
      <section className="container-section space-y-3">
        <p className="text-sm uppercase tracking-wide text-white/60">Careers</p>
        <h1 className="text-4xl font-semibold">Build the future of AI-driven operations</h1>
        <p className="text-white/80 max-w-3xl">
          We&apos;re assembling a diverse team of engineers, designers, and operators who are obsessed with reliability. If you thrive in shipping resilient systems and collaborating closely with customers, we&apos;d love to meet you.
        </p>
      </section>
      <section className="container-section grid gap-6 md:grid-cols-3">
        {roles.map((role) => (
          <div key={role.title} className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold">{role.title}</h3>
            <p className="text-sm text-white/60">{role.type}</p>
            <p className="text-white/80">{role.summary}</p>
            <button className="w-full px-4 py-3 rounded-xl bg-accent text-primary font-semibold shadow-lg shadow-accent/20">
              Apply now
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
