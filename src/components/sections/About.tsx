import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-20">
      <Container>
        <h2 className="text-xl font-semibold">{site.about.title}</h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-black/70">
            {site.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-black/60">Key message</div>
            <div className="mt-3 text-lg font-medium leading-relaxed">
              “각자의 빛이 모여, 하나의 가치가 되다”
            </div>
            <div className="mt-6 text-sm text-black/70">
              <span className="text-black/60">Keyword:</span> 원석 · 세공 · 협업 · 문화 · 성장
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}