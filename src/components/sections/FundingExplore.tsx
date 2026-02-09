'use client';

import { useMemo, useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import { exploreFunding as funding } from '@/content/site';

function formatKRW(n: number) {
  return n.toLocaleString('ko-KR') + '원';
}

export default function FundingExplore() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // 로컬 좋아요 토글(나중에 서버 연동 가능)
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  type FundingItem = (typeof funding)[keyof typeof funding][number];

  // `funding`은 카테고리(예: 클래스/프로덕트)별 배열을 가진 객체라서, 화면에서는 하나의 리스트로 펼쳐서 사용
  const items: FundingItem[] = useMemo(() => {
    const groups: readonly (readonly FundingItem[])[] = Object.values(funding);
    return groups.flat();
  }, []);

  const toggleLike = (id: string) => {
    setLikedMap((m) => ({ ...m, [id]: !m[id] }));
  };

  const scrollOne = (dir: 'prev' | 'next') => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>('[data-card="1"]');
    const w = first?.offsetWidth ?? 320;
    const gap = 16;
    el.scrollBy({ left: (w + gap) * (dir === 'next' ? 1 : -1), behavior: 'smooth' });
  };

  return (
    <section id="works" className="py-10">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">펀딩 둘러보기</h2>
            <p className="mt-2 text-sm text-black/60">진행 중인 프로젝트를 한 번에 모아봤어요.</p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollOne('prev')}
              className="h-10 w-10 rounded-full border border-black/10 bg-white hover:bg-black/[0.03]"
              aria-label="prev"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollOne('next')}
              className="h-10 w-10 rounded-full border border-black/10 bg-white hover:bg-black/[0.03]"
              aria-label="next"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {items.map((it, idx) => {
              const liked = likedMap[it.id] ?? false;
              return (
                <article
                  key={it.id}
                  data-card={idx === 0 ? '1' : undefined}
                  className="w-[280px] flex-none sm:w-[320px] snap-start"
                >
                    {/* image */}
                    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white">
                        <a href={it.href}>
                        <img
                            src={it.image}
                            alt={it.title}
                            className="h-[200px] w-full object-cover sm:h-[220px]"
                        />
                        </a>

                        <button
                        type="button"
                        onClick={() => toggleLike(it.id)}
                        className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-black/45 text-white backdrop-blur hover:bg-black/55"
                        >
                        {liked ? '♥' : '♡'}
                        </button>
                    </div>

                    {/* title */}
                    <a href={it.href} className="mt-4 block">
                        <h3 className="text-lg font-semibold leading-snug">{it.title}</h3>
                    </a>

                    {/* meta */}
                    <div className="mt-4 flex items-end justify-between gap-3">
                        <div className="flex items-baseline gap-3">
                        <div className="text-2xl font-semibold text-emerald-500">
                            {it.percent}%
                        </div>
                        <div className="text-lg font-semibold">
                            {formatKRW(it.amount)}
                        </div>
                        </div>
                        <div className="rounded-md bg-black/5 px-3 py-2 text-sm text-black/60">
                        {it.daysLeft}일 남음
                        </div>
                    </div>
                    </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}