import {useState} from 'react';
import {CAMPUS_FACILITIES, CAMPUS_LOGISTICS} from '../data/collegeData';
import {ResilientImage} from './ResilientImage';

export function CampusFacilities() {
  const [selectedId, setSelectedId] = useState(CAMPUS_FACILITIES[0].id);

  const activeFacility =
    CAMPUS_FACILITIES.find((f) => f.id === selectedId) ?? CAMPUS_FACILITIES[0];

  return (
    <section id="campus" className="py-16 lg:py-20 bg-white border-b border-[#DCE2EC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#DCE2EC]">
          <div>
            <p className="text-xs font-medium text-[#64748B] mb-2">
              04. Infrastructure &amp; Student Life · Swachh Rank #1 Campus
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F172A] text-balance">
              Libraries, Laboratories &amp; Campus Grounds
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
            Designed for quiet scholarly study and collaborative engineering, our
            Kuniyamuthur precinct integrates automated archives, research labs, and
            residential student facilities.
          </p>
        </div>

        {/* Interactive Facility Switcher */}
        <div
          role="tablist"
          aria-label="Campus facilities"
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {CAMPUS_FACILITIES.map((facility) => {
            const isSelected = facility.id === activeFacility.id;
            return (
              <button
                key={facility.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setSelectedId(facility.id)}
                className={`text-left p-5 rounded-lg border transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                  isSelected
                    ? 'bg-[#F3F5F8] border-[#1E3A8A]'
                    : 'bg-white border-[#DCE2EC] hover:border-[#94A3B8]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[#64748B] tabular-nums">
                    {facility.indexLabel}
                  </span>
                  {isSelected && (
                    <span className="text-xs font-semibold text-[#1E3A8A]">
                      Viewing
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-serif text-xl font-semibold text-[#0F172A]">
                  {facility.title}
                </h3>
                <p className="mt-1 text-xs text-[#475569]">{facility.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Spotlight */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[280px] sm:min-h-[380px] overflow-hidden rounded-lg border border-[#DCE2EC] bg-[#F3F5F8]">
              <ResilientImage
                src={activeFacility.imageUrl}
                alt={activeFacility.imageAlt}
                className="w-full h-full object-cover"
                fallbackTitle={activeFacility.title}
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-[#64748B]">
              {activeFacility.caption}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-[#F8FAFC] border border-[#DCE2EC] rounded-lg">
            <div>
              <p className="font-mono text-xs text-[#64748B] tabular-nums">
                Facility {activeFacility.indexLabel} · {activeFacility.location}
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#0F172A]">
                {activeFacility.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
                {activeFacility.description}
              </p>

              <dl className="mt-6 py-4 border-y border-[#DCE2EC] grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-xs font-medium text-[#64748B]">Access Hours</dt>
                  <dd className="font-mono text-xs text-[#0F172A] tabular-nums text-right">
                    {activeFacility.hours}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-xs font-medium text-[#64748B]">Scale &amp; Capacity</dt>
                  <dd className="font-mono text-xs text-[#0F172A] tabular-nums text-right">
                    {activeFacility.capacity}
                  </dd>
                </div>
              </dl>

              <ul className="mt-5 space-y-2.5 text-sm text-[#475569]">
                {activeFacility.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="text-[#1E3A8A] font-medium">
                      —
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Transport, Hostels & Student Life Support Strip */}
        <div className="mt-10 pt-8 border-t border-[#DCE2EC] grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAMPUS_LOGISTICS.map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-semibold text-[#0F172A]">{item.title}</h3>
              <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
