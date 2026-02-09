import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center gap-4">
          <a href="#" className="flex items-baseline gap-2 font-semibold">
            <span className="text-lg">{site.name}</span>
            <span className="text-sm text-black/50">{site.type}</span>
          </a>

          <nav className="ml-6 hidden items-center gap-5 text-sm text-black/70 md:flex">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {/* Search */}
            <div className="hidden items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 md:flex">
              <span className="text-black/40">⌘</span>
              <input
                className="w-56 bg-transparent text-sm outline-none placeholder:text-black/40"
                placeholder="검색 (예: 협업, 브랜딩, 커뮤니티)"
              />
            </div>

            <a
              href="#contact"
              className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              문의하기
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}