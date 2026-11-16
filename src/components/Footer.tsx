export function Footer() {
  return (
    <footer className="bg-[#0B1528] text-[#CBD5E1] border-t border-white/10 py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-5">
            <p className="font-serif text-xl font-bold text-white">
              Sri Krishna College of Arts and Science
            </p>
            <p className="mt-2 text-sm text-[#CBD5E1] leading-relaxed max-w-sm">
              Sugunapuram, Kuniyamuthur Post, Coimbatore – 641008, Tamil Nadu, India.
            </p>
            <p className="mt-2 text-xs text-[#94A3B8]">
              An Autonomous Institution affiliated with Bharathiar University ·
              Approved by UGC · Re-accredited by NAAC with ‘A’ Grade.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-white mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Academic Programmes
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">
                  Principal &amp; Department HODs
                </a>
              </li>
              <li>
                <a href="#campus-gallery" className="hover:text-white transition-colors">
                  Campus Photo Gallery
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-white transition-colors">
                  Placements &amp; Recruiters
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Campus Facilities
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admissions 2026–27
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-white mb-3">
              Institutional Contact
            </p>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[#94A3B8]">Office Phone</dt>
                <dd className="font-mono text-xs text-white tabular-nums">
                  +91 422 267 8400
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#94A3B8]">Admissions Desk</dt>
                <dd className="font-mono text-xs text-white">
                  admissions@skasc.ac.in
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#94A3B8]">Principal’s Office</dt>
                <dd className="font-mono text-xs text-white">
                  principal@skasc.ac.in
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            © {new Date().getFullYear()} Sri Krishna College of Arts and Science, Coimbatore.
          </p>
          <p>VLB &amp; Sri Krishna Institutions Trust · Kuniyamuthur</p>
        </div>
      </div>
    </footer>
  );
}
