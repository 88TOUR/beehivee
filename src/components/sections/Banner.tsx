'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import { banners } from '@/content/site';

const AUTO_DELAY = 5000;

export default function Banner() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pausedRef = useRef(false);

  const total = banners.length;

  useEffect(() => {
    if (total === 0) return;

    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((prev) => (prev + 1) % total);
      }
    }, AUTO_DELAY);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [total]);

  useEffect(() => {
    if (total === 0) return;
    if (index > total - 1) setIndex(0);
  }, [total, index]);

  if (total === 0) return null;

  return (
    <section className="pt-6">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl border border-black/10"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {/* track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
              width: `${total * 100}%`,
            }}
          >
            {banners.map((b) => {
              const titleLines = Array.isArray(b.titleLines) ? b.titleLines : [];
              const subtitle = b.subtitle ?? '';
              const cta = b.cta;

              return (
                <div
                  key={b.id}
                  className="relative h-[360px] w-full flex-none md:h-[420px]"
                >
                  {/* ✅ 이미지 선명도 우선: blur 계열 없음 */}
                  <img
                    src={b.image}
                    alt={subtitle}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />

                  {/* ✅ overlay는 blur 없이 그라데이션만 */}
                  <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-black/35 to-transparent" />

                  {/* content */}
                  <div className="absolute inset-0 z-[2] flex items-center">
                    <div className="px-6 md:px-12 max-w-3xl">
                      {subtitle ? (
                        <p className="mb-2 text-sm text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                          {subtitle}
                        </p>
                      ) : null}

                      {titleLines.map((line, idx) => (
                        <h2
                          key={idx}
                          className="text-3xl font-bold text-white md:text-5xl drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)]"
                        >
                          {line}
                        </h2>
                      ))}

                      {cta ? (
                        <a
                          href={cta.href}
                          className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
                        >
                          {cta.label}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* dots */}
          <div className="absolute bottom-4 left-1/2 z-[3] flex -translate-x-1/2 gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={[
                  'h-2 w-2 rounded-full transition',
                  i === index ? 'bg-white' : 'bg-white/40',
                ].join(' ')}
                aria-label={`Go to banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}