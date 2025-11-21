import type { Metadata } from 'next';

const posts = [
  {
    title: 'Designing SLOs that matter',
    date: 'May 2024',
    summary: 'A pragmatic approach to defining, measuring, and evolving SLOs that guide engineering priorities.',
    tag: 'SRE'
  },
  {
    title: 'AI copilots for incident response',
    date: 'April 2024',
    summary: 'How LLMs and automation can safely accelerate triage and reduce cognitive load during incidents.',
    tag: 'AI Ops'
  },
  {
    title: 'Platform engineering as a product',
    date: 'March 2024',
    summary: 'Treating your platform like a product drives adoption, reduces toil, and improves reliability.',
    tag: 'Platform'
  }
];

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights from the EAS OPS AI Solutions team on AI Ops, SRE, and platform engineering.'
};

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <section className="container-section space-y-3">
        <p className="text-sm uppercase tracking-wide text-white/60">Blog</p>
        <h1 className="text-4xl font-semibold">Ideas, playbooks, and lessons learned</h1>
        <p className="text-white/80 max-w-3xl">
          Practical perspectives from the field—covering AI automation, platform engineering, and the culture that underpins reliable delivery.
        </p>
      </section>
      <section className="container-section grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="glass-card p-6 space-y-2">
            <span className="text-xs uppercase tracking-wide text-accent">{post.tag}</span>
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-sm text-white/60">{post.date}</p>
            <p className="text-white/75">{post.summary}</p>
            <button className="text-accent font-semibold">Read more →</button>
          </article>
        ))}
      </section>
    </div>
  );
}
