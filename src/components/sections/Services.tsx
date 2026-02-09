import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function Services() {
  return (
    <section id="services" className="border-t border-white/10 py-20">
      <Container>
        <h2 className="text-xl font-semibold">{site.services.title}</h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {site.services.items.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-base font-medium">{s.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 text-black/40">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}