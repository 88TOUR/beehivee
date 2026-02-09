'use client';

import { useMemo, useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import { explore, exploreFunding } from '@/content/site';

type Tab = (typeof explore.tabs)[number];

// 타입 안전하게
type ClassItem = (typeof exploreFunding)['클래스'][number];
type ProductItem = (typeof exploreFunding)['프로덕트'][number];
type FundingItem = ClassItem | ProductItem;

function formatKRW(n: number) {
  return n.toLocaleString('ko-KR') + '원';
}

export default function Explore() {
  const [activeTab, setActiveTab] = useState<Tab>('전체');
  const scrollerRef = useRef<HTMLDivElement>(null);

  const items = useMemo<FundingItem[]>(() => {
    const classItems = Array.isArray(exploreFunding.클래스) ? [...exploreFunding.클래스] : [];
    const productItems = Array.isArray(exploreFunding.프로덕트) ? [...exploreFunding.프로덕트] : [];

    if (activeTab === '전체') return [...classItems, ...productItems];
    if (activeTab === '클래스') return classItems;
    return productItems;
  }, [activeTab]);

  return (
    <section id="works" className="py-10">
      <Container>
        <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs text-black/60">
                <span>GACHI 탐색</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                같이 만드는 가치, 펀딩으로 확인하세요
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-black/60">
                전체, 클래스, 프로덕트 탭에서 GACHI의 프로젝트를 탐색할 수 있어요.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                펀딩 문의
              </a>
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-black/10" />

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {explore.tabs.map((t) => {
              const active = t === activeTab;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setActiveTab(t);
                    requestAnimationFrame(() => {
                      scrollerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                    });
                  }}
                  className={[
                    'rounded-full border px-4 py-2 text-sm transition',
                    active
                      ? 'border-black bg-black text-white'
                      : 'border-black/10 bg-white text-black/70 hover:bg-black/[0.03]',
                  ].join(' ')}
                >
                  {t}
                </button>
              );
            })}
          </div>

          {/* Slider */}
          <div className="mt-6">
            <div
              ref={scrollerRef}
              className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {items.map((it, idx) => (
                <article
                  key={it.id}
                  data-card={idx === 0 ? '1' : undefined}
                  className="w-[280px] flex-none snap-start sm:w-[320px]"
                >
                  <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:shadow-md">
                    <a href={it.href ?? '#'} className="block">
                      <img
                        src={it.image}
                        alt={it.title}
                        className="h-[200px] w-full object-cover sm:h-[220px]"
                      />
                    </a>

                    {/* type 뱃지: 데이터에 type이 있으면 표시, 없으면 activeTab 기반 */}
                    {'type' in (it as any) ? (
                      <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-black backdrop-blur">
                        {(it as any).type}
                      </div>
                    ) : activeTab !== '전체' ? (
                      <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-black backdrop-blur">
                        {activeTab}
                      </div>
                    ) : null}

                    <button
                      type="button"
                      className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-black/45 text-white backdrop-blur hover:bg-black/55"
                      aria-label="like"
                    >
                      ♡
                    </button>
                  </div>

                  <a href={it.href ?? '#'} className="mt-4 block">
                    <h3 className="text-lg font-semibold leading-snug">{it.title}</h3>
                  </a>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <div className="text-2xl font-semibold text-emerald-600">
                        {it.percent}%
                      </div>
                      <div className="text-lg font-semibold">{formatKRW(it.amount)}</div>
                    </div>
                    <div className="rounded-md bg-black/5 px-3 py-2 text-sm text-black/60">
                      {it.daysLeft}일 남음
                    </div>
                  </div>
                </article>
              ))}

              {items.length === 0 ? (
                <div className="text-sm text-black/60">표시할 항목이 없어요.</div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}