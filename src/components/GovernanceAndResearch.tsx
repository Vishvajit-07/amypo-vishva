import {useState} from 'react';
import {
  ACADEMIC_NOTICES,
  RESEARCH_CENTRES,
  SCHOLARSHIP_TIERS,
} from '../data/collegeData';

type GovernanceTab = 'research' | 'scholarships' | 'notices';

export function GovernanceAndResearch() {
  const [activeTab, setActiveTab] = useState<GovernanceTab>('research');

  return (
    <section id="research" className="py-16 lg:py-20 bg-white border-b border-[#DCE2EC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#DCE2EC]">
          <div>
            <p className="text-xs font-medium text-[#64748B] mb-2">
              02. Institutional Depth · Research, Financial Aid &amp; Bulletins
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F172A] text-balance">
              Centres of Excellence &amp; Student Support
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
            Beyond classroom instruction, Sri Krishna College sustains industry-backed
            research laboratories, merit-based tuition waivers, and active campus
            academic circulars.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div
          role="tablist"
          aria-label="Institutional details"
          className="mt-8 inline-flex flex-wrap items-center gap-1 p-1 bg-[#F3F5F8] rounded-lg border border-[#DCE2EC]"
        >
          <button
            role="tab"
            type="button"
            aria-selected={activeTab === 'research'}
            onClick={() => setActiveTab('research')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
              activeTab === 'research'
                ? 'bg-[#0B1528] text-white'
                : 'text-[#475569] hover:text-[#0F172A]'
            }`}
          >
            Centres of Excellence
          </button>
          <button
            role="tab"
            type="button"
            aria-selected={activeTab === 'scholarships'}
            onClick={() => setActiveTab('scholarships')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
              activeTab === 'scholarships'
                ? 'bg-[#0B1528] text-white'
                : 'text-[#475569] hover:text-[#0F172A]'
            }`}
          >
            Scholarships &amp; Aid
          </button>
          <button
            role="tab"
            type="button"
            aria-selected={activeTab === 'notices'}
            onClick={() => setActiveTab('notices')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
              activeTab === 'notices'
                ? 'bg-[#0B1528] text-white'
                : 'text-[#475569] hover:text-[#0F172A]'
            }`}
          >
            Academic Notices &amp; Events
          </button>
        </div>

        {/* Tab 1: Centres of Excellence */}
        {activeTab === 'research' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESEARCH_CENTRES.map((centre) => (
              <article
                key={centre.code}
                className="p-6 bg-[#F8FAFC] border border-[#DCE2EC] rounded-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#64748B] font-mono tabular-nums">
                    <span>{centre.code}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-sans text-[#1E3A8A] font-medium">
                      {centre.partner}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-serif text-2xl font-semibold text-[#0F172A]">
                    {centre.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                    {centre.focus}
                  </p>
                </div>

                <dl className="mt-5 pt-4 border-t border-[#DCE2EC] space-y-2 text-xs">
                  <div>
                    <dt className="font-semibold text-[#0F172A]">Instrumentation</dt>
                    <dd className="text-[#475569] mt-0.5">{centre.infrastructure}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#0F172A]">Verified Output</dt>
                    <dd className="text-[#1E3A8A] font-medium mt-0.5">{centre.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}

        {/* Tab 2: Scholarships & Financial Aid */}
        {activeTab === 'scholarships' && (
          <div className="mt-8 bg-white border border-[#DCE2EC] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#DCE2EC]">
                    <th className="py-3.5 px-5 text-xs font-semibold text-[#475569]">
                      Scholarship Scheme
                    </th>
                    <th className="py-3.5 px-5 text-xs font-semibold text-[#475569]">
                      Qualifying Criteria
                    </th>
                    <th className="py-3.5 px-5 text-xs font-semibold text-[#475569]">
                      Tuition &amp; Aid Benefit
                    </th>
                    <th className="py-3.5 px-5 text-xs font-semibold text-[#475569] text-right">
                      Allocation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCE2EC] text-sm">
                  {SCHOLARSHIP_TIERS.map((tier) => (
                    <tr key={tier.name} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-4 px-5 font-semibold text-[#0F172A]">
                        {tier.name}
                      </td>
                      <td className="py-4 px-5 text-[#475569]">{tier.eligibility}</td>
                      <td className="py-4 px-5 font-medium text-[#1E3A8A]">
                        {tier.benefit}
                      </td>
                      <td className="py-4 px-5 text-right font-mono text-xs text-[#64748B] tabular-nums">
                        {tier.quota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Academic Notices & Events */}
        {activeTab === 'notices' && (
          <div className="mt-8 bg-white border border-[#DCE2EC] rounded-lg divide-y divide-[#DCE2EC]">
            {ACADEMIC_NOTICES.map((notice) => (
              <div
                key={notice.title}
                className="p-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
              >
                <div className="md:w-44 shrink-0">
                  <p className="font-mono text-xs font-medium text-[#1E3A8A] tabular-nums">
                    {notice.date}
                  </p>
                  <p className="text-xs text-[#64748B] mt-0.5">{notice.category}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-[#0F172A]">
                    {notice.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">
                    {notice.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
