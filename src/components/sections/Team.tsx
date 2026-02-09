import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function Team() {
  return (
    <section id="team" className="border-t border-white/10 py-20">
      <Container>
        <h2 className="text-xl font-semibold">{site.team.title}</h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-medium">조직도</div>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              {site.team.org.map((m) => (
                <li key={m.role} className="flex items-center justify-between gap-4">
                  <span className="text-black/60">{m.role}</span>
                  <span className="font-medium text-black">{m.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-medium">{site.greeting.title}</div>
            <div className="mt-4 space-y-3 text-sm text-black/70">
              {site.greeting.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}