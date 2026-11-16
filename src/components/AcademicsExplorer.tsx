import {useEffect, useMemo, useState} from 'react';
import {ArrowUpRight, BookOpen, Search, X} from 'lucide-react';
import {
  AcademicStream,
  findHodForDepartment,
  PROGRAMMES,
  Programme,
  ProgrammeLevel,
} from '../data/collegeData';
import {ResilientImage} from './ResilientImage';

interface AcademicsExplorerProps {
  onApplyForProgramme: (programmeTitle: string) => void;
}

const LEVELS: Array<'All' | ProgrammeLevel> = [
  'All',
  'Undergraduate',
  'Postgraduate',
  'Research',
];

const STREAMS: Array<'All Streams' | AcademicStream> = [
  'All Streams',
  'Computer Science & AI',
  'Commerce & Finance',
  'Management',
  'Sciences & Humanities',
];

export function AcademicsExplorer({onApplyForProgramme}: AcademicsExplorerProps) {
  const [selectedLevel, setSelectedLevel] = useState<'All' | ProgrammeLevel>('All');
  const [selectedStream, setSelectedStream] = useState<'All Streams' | AcademicStream>('All Streams');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProgramme, setActiveProgramme] = useState<Programme | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProgramme(null);
      }
    };
    if (activeProgramme) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProgramme]);

  const filteredProgrammes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PROGRAMMES.filter((item) => {
      const matchesLevel = selectedLevel === 'All' || item.level === selectedLevel;
      const matchesStream =
        selectedStream === 'All Streams' || item.stream === selectedStream;
      const matchesQuery =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.stream.toLowerCase().includes(query) ||
        item.department.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.coreSubjects.some((subj) => subj.toLowerCase().includes(query));
      return matchesLevel && matchesStream && matchesQuery;
    });
  }, [selectedLevel, selectedStream, searchQuery]);

  const resetFilters = () => {
    setSelectedLevel('All');
    setSelectedStream('All Streams');
    setSearchQuery('');
  };

  return (
    <section id="academics" className="py-16 lg:py-20 bg-white border-b border-[#DCE2EC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#DCE2EC]">
          <div>
            <p className="text-xs font-medium text-[#64748B] mb-2">
              01. Academic Catalogue · Autonomous Choice-Based Credit System
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F172A] text-balance">
              Academic Programmes
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
            Explore undergraduate, postgraduate, and doctoral programmes approved by
            Bharathiar University. Inspect semester syllabi, annual fee structure,
            sanctioned intake, and admission eligibility.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Level Segmented Tabs */}
            <div
              role="tablist"
              aria-label="Filter by academic level"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F3F5F8] rounded-lg border border-[#DCE2EC] w-fit"
            >
              {LEVELS.map((level) => {
                const isActive = selectedLevel === level;
                return (
                  <button
                    key={level}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                      isActive
                        ? 'bg-[#0B1528] text-white shadow-xs'
                        : 'text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    {level === 'All' ? 'All Programmes' : level}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <label htmlFor="programme-search" className="sr-only">
                Search programmes by degree, code, department, or subject
              </label>
              <Search
                className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="programme-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search degree, code, or subject..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-[#F8FAFC] border border-[#DCE2EC] rounded-md text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
              />
            </div>
          </div>

          {/* Stream Filter Bar + Live Count */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[#64748B] mr-1">
                Faculty Stream:
              </span>
              {STREAMS.map((stream) => {
                const active = selectedStream === stream;
                return (
                  <button
                    key={stream}
                    type="button"
                    onClick={() => setSelectedStream(stream)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                      active
                        ? 'bg-[#1E3A8A] text-white border-[#1E3A8A]'
                        : 'bg-white text-[#475569] border-[#DCE2EC] hover:border-[#94A3B8] hover:text-[#0F172A]'
                    }`}
                  >
                    {stream}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-[#64748B] font-mono tabular-nums whitespace-nowrap">
              Showing {filteredProgrammes.length} of {PROGRAMMES.length} programmes
            </p>
          </div>
        </div>

        {/* Programmes Directory Grid */}
        {filteredProgrammes.length === 0 ? (
          <div className="mt-10 py-14 px-6 text-center bg-[#F3F5F8] border border-[#DCE2EC] rounded-lg">
            <BookOpen className="w-6 h-6 text-[#64748B] mx-auto mb-3" />
            <p className="font-serif text-xl font-semibold text-[#0F172A]">
              No matching programmes found
            </p>
            <p className="text-sm text-[#475569] mt-1">
              Try clearing your search query or switching the selected level and stream filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-medium text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-md transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProgrammes.map((programme) => (
              <article
                key={programme.id}
                className="flex flex-col justify-between p-6 bg-[#F8FAFC] border border-[#DCE2EC] rounded-lg hover:border-[#1E3A8A]/45 transition-colors duration-150"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#64748B] font-mono tabular-nums">
                    <span>{programme.code}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-sans">{programme.level}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-sans">{programme.duration}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-2xl font-semibold text-[#0F172A] leading-snug">
                    {programme.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-[#1E3A8A]">
                    {programme.department}
                  </p>

                  <p className="mt-3 text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {programme.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE2EC] flex items-center justify-between gap-4">
                  <div className="text-xs text-[#475569] font-mono tabular-nums">
                    <span>{programme.annualFee}</span>
                    <span className="mx-1.5 text-[#94A3B8]" aria-hidden="true">·</span>
                    <span className="text-[#64748B]">{programme.intake} seats</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProgramme(programme)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] hover:text-[#172554] whitespace-nowrap shrink-0 py-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] rounded-sm"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Programme Detail Modal */}
      {activeProgramme && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="programme-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1528]/70 backdrop-blur-xs"
          onClick={() => setActiveProgramme(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-[#DCE2EC] rounded-lg shadow-xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#DCE2EC]">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] font-mono tabular-nums">
                  <span>{activeProgramme.code}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-sans">{activeProgramme.level}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-sans">{activeProgramme.department}</span>
                </div>
                <h3
                  id="programme-modal-title"
                  className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#0F172A]"
                >
                  {activeProgramme.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProgramme(null)}
                aria-label="Close programme details"
                className="inline-flex items-center justify-center w-10 h-10 text-[#475569] hover:text-[#0F172A] hover:bg-[#F3F5F8] rounded-md cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {activeProgramme.overview}
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-[#DCE2EC]">
                <div>
                  <dt className="text-xs font-medium text-[#64748B]">Duration</dt>
                  <dd className="mt-1 text-sm font-medium text-[#0F172A] font-mono tabular-nums">
                    {activeProgramme.duration}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#64748B]">Sanctioned Intake</dt>
                  <dd className="mt-1 text-sm font-medium text-[#0F172A] font-mono tabular-nums">
                    {activeProgramme.intake} Seats
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#64748B]">Estimated Tuition</dt>
                  <dd className="mt-1 text-sm font-medium text-[#1E3A8A] font-mono tabular-nums">
                    {activeProgramme.annualFee}
                  </dd>
                </div>
                <div className="sm:col-span-3 pt-2 border-t border-[#DCE2EC]">
                  <dt className="text-xs font-medium text-[#64748B]">Minimum Eligibility</dt>
                  <dd className="mt-1 text-sm text-[#0F172A]">
                    {activeProgramme.eligibility}
                  </dd>
                </div>
              </dl>

              {(() => {
                const hod = findHodForDepartment(activeProgramme.department);
                return (
                  <div className="p-4 bg-[#F8FAFC] border border-[#DCE2EC] rounded-lg flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-16 h-20 rounded-md overflow-hidden border border-[#DCE2EC] bg-[#E8ECF2] shrink-0">
                      <ResilientImage
                        src={hod.photoUrl}
                        alt={hod.photoAlt}
                        className="w-full h-full object-cover object-top"
                        fallbackTitle={hod.name}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-[#1E3A8A]">
                        Head of Department · {hod.department}
                      </p>
                      <p className="font-serif text-lg font-semibold text-[#0F172A] mt-0.5">
                        {hod.name}
                      </p>
                      <p className="text-xs text-[#475569]">
                        {hod.qualifications} · {hod.officeLocation}
                      </p>
                      <p className="text-xs font-mono text-[#1E3A8A] mt-1">
                        {hod.email}
                      </p>
                    </div>
                  </div>
                );
              })()}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-[#0F172A] uppercase mb-3">
                    Core Curriculum Tracks
                  </h4>
                  <ul className="space-y-2 text-sm text-[#475569]">
                    {activeProgramme.coreSubjects.map((subject, idx) => (
                      <li key={subject} className="flex items-start gap-2.5">
                        <span className="font-mono text-xs text-[#64748B] tabular-nums mt-0.5">
                          0{idx + 1}.
                        </span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-[#0F172A] uppercase mb-3">
                    Graduate Career Pathways
                  </h4>
                  <ul className="space-y-2 text-sm text-[#475569]">
                    {activeProgramme.careerPathways.map((career) => (
                      <li key={career} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-[#1E3A8A]">
                          —
                        </span>
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#DCE2EC] flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveProgramme(null)}
                className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F3F5F8] rounded-md transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeProgramme.title;
                  setActiveProgramme(null);
                  onApplyForProgramme(title);
                }}
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Apply for this Programme
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
