import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { m, useScroll, useTransform } from 'framer-motion';
import { SectionReveal } from '@/shared/ui/SectionReveal';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { services } from '@/data/services';

export function PortfolioHorizontalSection() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // 🎯 Cinematic transforms
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={targetRef}
      className={`relative bg-background ${
        isDesktop ? 'h-[320vh]' : 'py-20'
      }`}
    >
      <div
        className={`${
          isDesktop
            ? 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden'
            : 'px-6'
        }`}
      >
        {/* HEADER */}
        <m.div style={{ opacity }} className="mb-12 max-w-[1400px] mx-auto w-full">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-yellow" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-neon-yellow">
                    Showcase
                  </span>
                </div>

                <h2 className="text-5xl md:text-8xl font-light text-white tracking-tight leading-[0.9] uppercase">
                  Selected <br />
                  <span className="italic text-white/40">
                    Masterpieces.
                  </span>
                </h2>
              </div>

              {isDesktop && (
                <div className="hidden lg:block">
                  <div className="flex flex-col items-end gap-2 pr-10 border-r border-white/10">
                    <span className="text-[8px] text-white/30 tracking-[0.5em] uppercase">
                      Scroll
                    </span>
                    <span className="text-[10px] text-neon-yellow uppercase">
                      Horizontal
                    </span>
                  </div>
                </div>
              )}
            </div>
          </SectionReveal>
        </m.div>

        {/* 🎬 HORIZONTAL TRACK */}
        {isDesktop ? (
          <m.div
            style={{
              x,
              scale,
              willChange: "transform",
            }}
            className="flex gap-10 px-6 lg:px-[10vw] motion-smooth"
          >
            {services.slice(0, 5).map((service, i) => (
              <FeaturedProjectCard
                key={service.id}
                service={service}
                index={i}
              />
            ))}

            {/* CTA */}
            <div className="flex-shrink-0 w-[80vw] md:w-[400px] flex items-center justify-center">
              <Link
                to="/portfolio"
                onMouseEnter={() => import('@/features/portfolio')}
                className="group flex flex-col items-center gap-6"
              >
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-yellow group-hover:bg-neon-yellow/5 transition-all duration-500">
                  <span className="text-3xl text-white group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>

                <div className="text-center">
                  <div className="text-[10px] tracking-[0.5em] uppercase text-white/30">
                    Portfolio
                  </div>
                  <div className="text-xl text-white uppercase tracking-widest group-hover:text-neon-yellow transition-colors">
                    View All Works
                  </div>
                </div>
              </Link>
            </div>
          </m.div>
        ) : (
          /* 📱 MOBILE FALLBACK */
          <div className="flex flex-col gap-12">
            {services.slice(0, 4).map((service, i) => (
              <FeaturedProjectCard
                key={service.id}
                service={service}
                index={i}
              />
            ))}

            <div className="py-12 flex justify-center">
              <Link
                to="/portfolio"
                className="group flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full border border-neon-yellow/30 flex items-center justify-center">
                  →
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-neon-yellow">
                  View All Projects
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* 🔥 PROGRESS BAR */}
        {isDesktop && (
          <div className="absolute bottom-12 left-[10vw] right-[10vw] h-px bg-white/10 hidden md:block">
            <m.div
              className="h-full bg-neon-yellow"
              style={{
                scaleX: scrollYProgress,
                transformOrigin: "left",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}