import Container from '@/components/ui/Container';

const works = [
  { title: 'Project One', desc: 'Short one-liner about this work.' },
  { title: 'Project Two', desc: 'Short one-liner about this work.' },
  { title: 'Project Three', desc: 'Short one-liner about this work.' },
];

export default function Works() {
  return (
    <section id="works" className="border-t border-white/10 py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-xl font-semibold">Works</h2>
          <p className="text-sm text-black/60">Selected projects</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="text-base font-medium">{w.title}</div>
              <div className="mt-2 text-sm text-black/70">{w.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}