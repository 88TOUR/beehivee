import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function Hero() {
  return (
    <section className="pt-24">
      <Container>
        <div className="py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-black/70">
            <span>💎</span>
            <span>{site.hero.badge}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            {site.hero.headline}
          </h1>

          <p className="mt-5 max-w-2xl text-black/70">{site.hero.subheadline}</p>
          <p className="mt-6 max-w-3xl text-black/60">{site.oneLiner}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.hero.ctaPrimary.href}
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:opacity-90"
            >
              {site.hero.ctaPrimary.label}
            </a>
            <a
              href={site.hero.ctaSecondary.href}
              className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-black hover:bg-white/5"
            >
              {site.hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}