import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-primary/80 py-10">
      <div className="container-section grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/40 flex items-center justify-center font-bold text-accent">
              EO
            </span>
            <span>EAS OPS AI Solutions</span>
          </div>
          <p className="text-sm text-white/70 max-w-sm">
            Delivering resilient, intelligent operations through AI automation, observability, and cloud-native excellence.
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-wide text-white/60">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-wide text-white/60">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>hello@easops.ai</li>
            <li>+1 (555) 123-4567</li>
            <li>Remote-first, Global</li>
          </ul>
        </div>
      </div>
      <div className="container-section pt-6 mt-6 border-t border-white/5 text-sm text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p>© {year} EAS OPS AI Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white/90">Privacy</Link>
          <Link href="/contact" className="hover:text-white/90">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
