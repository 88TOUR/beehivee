import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-20">
      <Container>
        <h2 className="text-xl font-semibold">{site.contact.title}</h2>
        <p className="mt-4 max-w-2xl text-black/70">{site.contact.note}</p>

        <div className="mt-6">
          <a
            className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:opacity-90"
            href={`mailto:${site.contact.email}`}
          >
            {site.contact.email}
          </a>
        </div>
      </Container>
    </section>
  );
}