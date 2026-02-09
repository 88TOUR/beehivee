import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function History() {
  return (
    <section id="history" className="border-t border-white/10 py-20">
      <Container>
        <h2 className="text-xl font-semibold">{site.history.title}</h2>

        <div className="mt-10 space-y-6">
          {site.history.items.map((h) => (
            <div key={h.year} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="text-sm text-black/60">{h.year}</div>
                <div className="text-base font-medium">{h.title}</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {h.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 text-black/40">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {h.quote ? (
                <div className="mt-5 border-t border-white/10 pt-4 text-sm text-black/60">
                  {h.quote}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}