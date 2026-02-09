import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function Values() {
  return (
    <section id="values" className="border-t border-black/10 bg-black/[0.02] py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-xl font-semibold">{site.values.title}</h2>
          <p className="text-sm text-black/60">G A C H I</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.values.items.map((v) => (
            <div key={v.key} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-xs text-black/60">{v.key}</div>
              <div className="mt-2 text-base font-medium">{v.title}</div>
              <p className="mt-3 text-sm text-black/70">{v.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-black/60">{site.values.footnote}</p>
      </Container>
    </section>
  );
}