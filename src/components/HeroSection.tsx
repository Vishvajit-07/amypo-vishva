import {ArrowRight} from 'lucide-react';
import {INSTITUTIONAL_METRICS} from '../data/collegeData';
import {ResilientImage} from './ResilientImage';

interface HeroSectionProps {
  onExploreClick: () => void;
  onAdmissionsClick: () => void;
}

export function HeroSection({
  onExploreClick,
  onAdmissionsClick,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="bg-oxford-hero text-[#F8FAFC] border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-16">
        {/* Asymmetric Hero Split with balanced full-height photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium tracking-wider text-[#94A3B8] mb-4">
                Kuniyamuthur, Coimbatore · Autonomous Institution · Established 1997
              </p>

              <h1
                className="font-serif font-semibold text-white tracking-tight leading-[1.08] text-balance max-w-2xl"
                style={{fontSize: 'clamp(2.25rem, 4vw, 3.75rem)'}}
              >
                Sri Krishna College of Arts and Science
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-[65ch]">
                Affiliated with Bharathiar University and accredited with NAAC ‘A’ Grade,
                our Kuniyamuthur campus unites rigorous scholarship in computing,
                commerce, management, and life sciences with verified industry readiness.
              </p>

              {/* Concise Institutional Highlights Strip */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs">
                <div>
                  <p className="font-semibold text-white">UGC Autonomous</p>
                  <p className="text-[#94A3B8] mt-0.5">Outcome-based CBCS syllabi</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Swachh Rank #1</p>
                  <p className="text-[#94A3B8] mt-0.5">Green residential campus</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-semibold text-white">14 Academic Schools</p>
                  <p className="text-[#94A3B8] mt-0.5">UG, PG &amp; Doctoral research</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#0B1528] bg-white hover:bg-[#E2E8F0] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1528]"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onAdmissionsClick}
                className="inline-flex items-center text-sm font-medium text-[#E2E8F0] hover:text-white underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                Admissions 2026–27
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] overflow-hidden rounded-lg border border-white/15 bg-[#111E38]">
              <ResilientImage
                src="/src/assets/images/skcas_campus_hero_1794810243502.jpg"
                alt="Main academic quadrangle and sandstone buildings of Sri Krishna College of Arts and Science in Coimbatore"
                className="w-full h-full lg:h-full object-cover"
                fallbackTitle="Main Academic Quadrangle"
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-[#94A3B8]">
              Fig. 1 — Main Academic Quadrangle and Central Clock Tower, Sugunapuram Campus.
            </p>
          </div>
        </div>

        {/* Full-Width 4-Column Institutional Proof Strip */}
        <div
          id="about"
          className="mt-12 bg-[#111E38]/90 border border-white/10 rounded-lg p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {INSTITUTIONAL_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="font-mono text-2xl sm:text-3xl font-medium text-white tabular-nums tracking-tight">
                {metric.value}
              </span>
              <span className="mt-1.5 text-sm font-semibold text-[#F8FAFC]">
                {metric.label}
              </span>
              <span className="mt-0.5 text-xs text-[#94A3B8]">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
