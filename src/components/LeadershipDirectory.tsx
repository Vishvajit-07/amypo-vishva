import {useMemo, useState} from 'react';
import {
  AcademicStream,
  DEPARTMENT_HODS,
  DepartmentHead,
  PRINCIPAL_PROFILE,
} from '../data/collegeData';
import {ResilientImage} from './ResilientImage';

const STREAM_FILTERS: Array<'All Departments' | AcademicStream> = [
  'All Departments',
  'Computer Science & AI',
  'Commerce & Finance',
  'Management',
  'Sciences & Humanities',
];

export function LeadershipDirectory() {
  const [selectedStream, setSelectedStream] = useState<'All Departments' | AcademicStream>(
    'All Departments',
  );
  const [selectedDeptId, setSelectedDeptId] = useState<string>('all');

  const departmentFilteredHods = useMemo(() => {
    return DEPARTMENT_HODS.filter((hod) => {
      const streamMatch =
        selectedStream === 'All Departments' || hod.stream === selectedStream;
      const deptMatch = selectedDeptId === 'all' || hod.id === selectedDeptId;
      return streamMatch && deptMatch;
    });
  }, [selectedStream, selectedDeptId]);

  const handleStreamChange = (stream: 'All Departments' | AcademicStream) => {
    setSelectedStream(stream);
    setSelectedDeptId('all');
  };

  const renderHodCard = (hod: DepartmentHead) => (
    <article
      key={hod.id}
      className="bg-white border border-[#DCE2EC] rounded-lg overflow-hidden flex flex-col"
    >
      <div className="aspect-[3/4] w-full bg-[#E8ECF2] border-b border-[#DCE2EC] overflow-hidden">
        <ResilientImage
          src={hod.photoUrl}
          alt={hod.photoAlt}
          className="w-full h-full object-cover object-top"
          fallbackTitle={hod.name}
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-medium text-[#1E3A8A]">{hod.department}</p>
          <h4 className="mt-1.5 font-serif text-2xl font-semibold text-[#0F172A] leading-snug">
            {hod.name}
          </h4>
          <p className="text-xs text-[#475569] mt-0.5">
            {hod.designation} · {hod.qualifications}
          </p>

          <p className="mt-3 text-xs text-[#475569] leading-relaxed">
            <span className="font-semibold text-[#0F172A]">Research Focus: </span>
            {hod.researchFocus}
          </p>
        </div>

        <dl className="mt-4 pt-3 border-t border-[#DCE2EC] space-y-1.5 text-xs">
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-[#64748B]">Experience</dt>
            <dd className="text-[#0F172A] font-medium text-right">{hod.experience}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-[#64748B]">Office</dt>
            <dd className="text-[#0F172A] text-right">{hod.officeLocation}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-[#64748B]">Consultation</dt>
            <dd className="font-mono text-[#0F172A] tabular-nums text-right">
              {hod.consultationHours}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-[#64748B]">Email</dt>
            <dd className="font-mono text-[#1E3A8A] text-right truncate">
              {hod.email}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );

  return (
    <section
      id="leadership"
      className="py-16 lg:py-20 bg-[#F3F5F8] border-b border-[#DCE2EC]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#DCE2EC]">
          <div>
            <p className="text-xs font-medium text-[#64748B] mb-2">
              Academic Leadership · Principal &amp; Heads of Departments
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F172A] text-balance">
              Principal &amp; Departmental Faculty Heads
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
            Meet the institutional Principal and the Professors leading each specific
            academic department across Computing, Commerce, Management, and Sciences.
          </p>
        </div>

        {/* Part A: Principal's Desk Feature */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pb-12 border-b border-[#DCE2EC]">
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative flex-1 min-h-[340px] max-h-[460px] overflow-hidden rounded-lg border border-[#DCE2EC] bg-[#F3F5F8]">
              <ResilientImage
                src={PRINCIPAL_PROFILE.photoUrl}
                alt={PRINCIPAL_PROFILE.photoAlt}
                className="w-full h-full object-cover object-top"
                fallbackTitle={PRINCIPAL_PROFILE.name}
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-[#64748B]">
              Fig. — {PRINCIPAL_PROFILE.name}, Principal, Sri Krishna College of Arts &amp; Science.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#DCE2EC] rounded-lg">
            <div>
              <p className="text-xs font-medium text-[#1E3A8A]">
                Office of the Principal · {PRINCIPAL_PROFILE.qualifications}
              </p>
              <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#0F172A]">
                {PRINCIPAL_PROFILE.name}
              </h3>
              <p className="text-sm text-[#475569] mt-1">{PRINCIPAL_PROFILE.tenure}</p>

              <p className="mt-5 font-serif italic text-xl text-[#0F172A] leading-relaxed">
                “{PRINCIPAL_PROFILE.message}”
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[#475569]">
                {PRINCIPAL_PROFILE.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="text-[#1E3A8A] font-medium">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-6 pt-5 border-t border-[#DCE2EC] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <dt className="text-[#64748B]">Office Location</dt>
                <dd className="mt-0.5 font-medium text-[#0F172A]">
                  {PRINCIPAL_PROFILE.officeLocation}
                </dd>
              </div>
              <div>
                <dt className="text-[#64748B]">Visiting Hours</dt>
                <dd className="mt-0.5 font-mono text-[#0F172A] tabular-nums">
                  {PRINCIPAL_PROFILE.officeHours}
                </dd>
              </div>
              <div>
                <dt className="text-[#64748B]">Direct Contact</dt>
                <dd className="mt-0.5 font-mono text-[#1E3A8A]">
                  {PRINCIPAL_PROFILE.email} · {PRINCIPAL_PROFILE.phone}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Part B: Specific Department HOD Directory */}
        <div className="mt-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F172A]">
                Heads of Departments (HODs)
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                Filter by academic stream or select a specific department to view its Head.
              </p>
            </div>

            {/* Specific Department Dropdown */}
            <div className="w-full lg:w-80">
              <label htmlFor="hod-department-select" className="sr-only">
                Select specific department
              </label>
              <select
                id="hod-department-select"
                value={selectedDeptId}
                onChange={(e) => {
                  setSelectedDeptId(e.target.value);
                  if (e.target.value !== 'all') {
                    setSelectedStream('All Departments');
                  }
                }}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#DCE2EC] rounded-md text-[#0F172A] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
              >
                <option value="all">All Specific Departments ({DEPARTMENT_HODS.length})</option>
                {DEPARTMENT_HODS.map((hod) => (
                  <option key={hod.id} value={hod.id}>
                    {hod.department} — {hod.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Stream Filter Tabs */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {STREAM_FILTERS.map((stream) => {
              const active = selectedStream === stream && selectedDeptId === 'all';
              return (
                <button
                  key={stream}
                  type="button"
                  onClick={() => handleStreamChange(stream)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                    active
                      ? 'bg-[#0B1528] text-white border-[#0B1528]'
                      : 'bg-white text-[#475569] border-[#DCE2EC] hover:border-[#94A3B8] hover:text-[#0F172A]'
                  }`}
                >
                  {stream}
                </button>
              );
            })}
          </div>

          {/* HOD Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentFilteredHods.map(renderHodCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
