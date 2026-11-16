import {
  ALUMNI_OUTCOMES,
  PLACEMENT_SECTORS,
  RECRUITER_PARTNERS,
  YEARLY_PLACEMENTS,
} from '../data/collegeData';

export function PlacementsSection() {
  return (
    <section
      id="placements"
      className="py-16 lg:py-20 bg-oxford-band text-[#F8FAFC] border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <p className="text-xs font-medium text-[#94A3B8] mb-2">
              03. Career Outcomes · Training &amp; Placement Cell
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white text-balance">
              Placements &amp; Corporate Partnerships
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-xl leading-relaxed">
            In the 2025–26 placement cycle, 1,321 verified offers were extended across
            184 recruiting organizations, achieving a 96.2% placement rate with a
            highest package of 14.5 LPA.
          </p>
        </div>

        {/* 3-Year Placement Progression Strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {YEARLY_PLACEMENTS.map((yr) => (
            <div
              key={yr.year}
              className="p-5 bg-[#111E38]/90 border border-white/10 rounded-lg"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-[#94A3B8] tabular-nums">
                  Cohort {yr.year}
                </span>
                <span className="font-mono text-xl font-semibold text-white tabular-nums">
                  {yr.placementRate}
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#60A5FA] rounded-full"
                  style={{width: `${yr.rateNumeric}%`}}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#CBD5E1] font-mono tabular-nums">
                <span>{yr.offers} Offers</span>
                <span>Highest: {yr.highestCtc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Evidence & Sector Breakdown */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 7 Cols: Sector Placement Table */}
          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold text-white mb-4">
              2025–26 Offer Distribution by Industry Sector
            </h3>

            <div className="overflow-x-auto bg-[#111E38]/90 border border-white/10 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="py-3 px-4 text-xs font-semibold text-[#CBD5E1]">
                      Industry Sector
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold text-[#CBD5E1] text-right">
                      Offers
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold text-[#CBD5E1] text-right">
                      Share
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold text-[#CBD5E1] text-right">
                      Median CTC
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-sm">
                  {PLACEMENT_SECTORS.map((row) => (
                    <tr key={row.sector} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-white">{row.sector}</div>
                        <div className="text-xs text-[#94A3B8] mt-0.5">
                          {row.topRecruiters}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums text-white">
                        {row.offersCount}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums text-[#CBD5E1]">
                        {row.sharePercent}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums font-medium text-[#93C5FD]">
                        {row.medianPackage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Clean Typographic Recruiter Roster */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-medium text-[#94A3B8] mb-3">
                Principal Campus Recruiters (2025–26 Cohort)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5 text-sm font-medium text-[#E2E8F0]">
                {RECRUITER_PARTNERS.map((partner) => (
                  <div key={partner} className="truncate">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Attributable Alumni Outcomes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-white">
              Graduate Outcomes &amp; Voices
            </h3>

            {ALUMNI_OUTCOMES.map((item) => (
              <blockquote
                key={item.id}
                className="p-6 bg-[#111E38]/90 border border-white/10 rounded-lg"
              >
                <p className="font-serif italic text-lg text-[#F8FAFC] leading-relaxed">
                  “{item.statement}”
                </p>
                <footer className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-[#CBD5E1] mt-0.5">
                    {item.role} · {item.organization}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    {item.degree} · {item.cohort}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
