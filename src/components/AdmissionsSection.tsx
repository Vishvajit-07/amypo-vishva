import {FormEvent, useEffect, useMemo, useState} from 'react';
import {CheckCircle2, Printer} from 'lucide-react';
import {ADMISSION_STEPS, PROGRAMMES} from '../data/collegeData';

interface AdmissionsSectionProps {
  preselectedProgramme: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  programme?: string;
  score?: string;
}

interface SubmissionReceipt {
  referenceId: string;
  fullName: string;
  email: string;
  phone: string;
  programme: string;
  score: string;
  scholarshipEstimate: string;
  submittedAt: string;
}

function getScholarshipEstimate(numericScore: number): string {
  if (Number.isNaN(numericScore) || numericScore < 35 || numericScore > 100) {
    return 'Enter your score to view merit waiver eligibility';
  }
  if (numericScore >= 95) {
    return 'Eligible for 100% Sri Krishna Academic Merit Waiver';
  }
  if (numericScore >= 88) {
    return 'Eligible for 25%–50% Honours Distinction Concession';
  }
  if (numericScore >= 60) {
    return 'Meets standard merit cutoff · Eligible for Govt. First-Graduate Aid';
  }
  return 'Eligible for general merit counselling review';
}

export function AdmissionsSection({preselectedProgramme}: AdmissionsSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programme, setProgramme] = useState(
    preselectedProgramme || PROGRAMMES[0].title,
  );
  const [score, setScore] = useState('');
  const [hostelRequired, setHostelRequired] = useState('No — Day Scholar');
  const [errors, setErrors] = useState<FormErrors>({});
  const [receipt, setReceipt] = useState<SubmissionReceipt | null>(null);

  useEffect(() => {
    if (preselectedProgramme) {
      setProgramme(preselectedProgramme);
      setReceipt(null);
    }
  }, [preselectedProgramme]);

  const selectedProgrammeObj = useMemo(
    () => PROGRAMMES.find((p) => p.title === programme) ?? PROGRAMMES[0],
    [programme],
  );

  const liveScholarshipPreview = useMemo(() => {
    if (!score.trim()) return null;
    const parsed = Number(score);
    if (Number.isNaN(parsed) || parsed < 35 || parsed > 100) return null;
    return getScholarshipEstimate(parsed);
  }, [score]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 3) {
      nextErrors.fullName = 'Please enter the applicant’s full name (min. 3 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!programme) {
      nextErrors.programme = 'Please select an academic programme.';
    }
    const parsedScore = Number(score);
    if (!score.trim() || Number.isNaN(parsedScore) || parsedScore < 35 || parsedScore > 100) {
      nextErrors.score = 'Enter qualifying exam percentage between 35 and 100.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const numericScore = Number(score);
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setReceipt({
      referenceId: `SKCAS-2026-${randomCode}`,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      programme,
      score: `${numericScore.toFixed(1)}%`,
      scholarshipEstimate: getScholarshipEstimate(numericScore),
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    });
  };

  const handleReset = () => {
    setReceipt(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setScore('');
    setErrors({});
  };

  return (
    <section id="admissions" className="py-16 lg:py-20 bg-[#F3F5F8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#DCE2EC]">
          <div>
            <p className="text-xs font-medium text-[#64748B] mb-2">
              05. Admissions 2026–27 · Academic Year Commencing July 2026
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F172A] text-balance">
              Apply for Admission
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
            Applications are open for Undergraduate, Postgraduate, and Ph.D. cohorts.
            Admissions are strictly merit-based per Bharathiar University and Tamil Nadu
            Higher Education guidelines.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 5 Cols: Step-by-step Admission Process & Office Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-[#0F172A] mb-4">
                Selection &amp; Enrolment Process
              </h3>
              <ol className="divide-y divide-[#DCE2EC] border-y border-[#DCE2EC]">
                {ADMISSION_STEPS.map((item) => (
                  <li key={item.step} className="py-4 flex items-start gap-4">
                    <span className="font-mono text-sm font-medium text-[#1E3A8A] tabular-nums shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0F172A]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-5 bg-white border border-[#DCE2EC] rounded-lg text-sm">
              <p className="font-semibold text-[#0F172A]">Admissions Office Desk</p>
              <p className="mt-1 text-xs text-[#475569] leading-relaxed">
                Administrative Block, Ground Floor, Sugunapuram, Kuniyamuthur,
                Coimbatore – 641008.
              </p>
              <dl className="mt-3 pt-3 border-t border-[#DCE2EC] space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <dt className="text-[#64748B]">Counselling Hours</dt>
                  <dd className="font-mono text-[#0F172A] tabular-nums">
                    Mon – Sat · 09:00 – 17:00
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#64748B]">Admissions Helpline</dt>
                  <dd className="font-mono text-[#0F172A] tabular-nums">
                    +91 422 267 8400
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#64748B]">Official Email</dt>
                  <dd className="font-mono text-[#0F172A]">
                    admissions@skasc.ac.in
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right 7 Cols: Interactive Provisional Application Form + Merit Preview */}
          <div className="lg:col-span-7 bg-white border border-[#DCE2EC] rounded-lg p-6 sm:p-8">
            {receipt ? (
              <div className="space-y-6">
                <div className="flex items-start gap-3 pb-5 border-b border-[#DCE2EC]">
                  <CheckCircle2
                    className="w-6 h-6 text-[#14532D] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-[#14532D]">
                      Provisional Application Registered
                    </p>
                    <h3 className="mt-1 font-serif text-2xl font-semibold text-[#0F172A]">
                      Reference ID: {receipt.referenceId}
                    </h3>
                    <p className="mt-1 text-sm text-[#475569]">
                      Thank you, {receipt.fullName}. Our Admissions Committee will contact
                      you at <span className="font-medium text-[#0F172A]">{receipt.email}</span>{' '}
                      with counselling slot instructions.
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-xs text-[#64748B]">Applicant Name</dt>
                    <dd className="mt-0.5 font-medium text-[#0F172A]">{receipt.fullName}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#64748B]">Submission Date</dt>
                    <dd className="mt-0.5 font-mono text-[#0F172A] tabular-nums">
                      {receipt.submittedAt}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#64748B]">Selected Programme</dt>
                    <dd className="mt-0.5 font-medium text-[#1E3A8A]">{receipt.programme}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#64748B]">Qualifying Score</dt>
                    <dd className="mt-0.5 font-mono text-[#0F172A] tabular-nums">
                      {receipt.score}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#64748B]">Mobile Number</dt>
                    <dd className="mt-0.5 font-mono text-[#0F172A] tabular-nums">
                      {receipt.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#64748B]">Accommodation</dt>
                    <dd className="mt-0.5 text-[#0F172A]">{hostelRequired}</dd>
                  </div>
                  <div className="sm:col-span-2 pt-3 border-t border-[#DCE2EC]">
                    <dt className="text-xs text-[#64748B]">Provisional Scholarship Assessment</dt>
                    <dd className="mt-0.5 font-medium text-[#14532D]">
                      {receipt.scholarshipEstimate}
                    </dd>
                  </div>
                </dl>

                <div className="pt-5 border-t border-[#DCE2EC] flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="no-print inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#0F172A] bg-[#F3F5F8] hover:bg-[#DCE2EC] rounded-md transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Acknowledgement</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="no-print px-4 py-2 text-xs font-medium text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-md transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-[#DCE2EC]">
                  <h3 className="font-serif text-2xl font-semibold text-[#0F172A]">
                    Provisional Admission Inquiry &amp; Registration
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Enter your academic percentage below for an immediate merit scholarship preview.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="applicant-name"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Applicant Full Name *
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Priya Dharshini R."
                      aria-invalid={Boolean(errors.fullName)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#DCE2EC] rounded-md text-[#0F172A] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#991B1B]" role="alert">
                        Error: {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-email"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="applicant-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="applicant@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#DCE2EC] rounded-md text-[#0F172A] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#991B1B]" role="alert">
                        Error: {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-phone"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Mobile Number *
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98422 00000"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#DCE2EC] rounded-md text-[#0F172A] font-mono tabular-nums focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#991B1B]" role="alert">
                        Error: {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-score"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Qualifying Exam Score (%) *
                    </label>
                    <input
                      id="applicant-score"
                      type="number"
                      min="35"
                      max="100"
                      step="0.1"
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      placeholder="e.g., 88.5"
                      aria-invalid={Boolean(errors.score)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#DCE2EC] rounded-md text-[#0F172A] font-mono tabular-nums focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                    {errors.score && (
                      <p className="mt-1 text-xs text-[#991B1B]" role="alert">
                        Error: {errors.score}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="applicant-programme"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Preferred Programme *
                    </label>
                    <select
                      id="applicant-programme"
                      value={programme}
                      onChange={(e) => setProgramme(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#DCE2EC] rounded-md text-[#0F172A] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    >
                      {PROGRAMMES.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title} ({item.level})
                        </option>
                      ))}
                    </select>
                    {errors.programme && (
                      <p className="mt-1 text-xs text-[#991B1B]" role="alert">
                        Error: {errors.programme}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-hostel"
                      className="block text-xs font-medium text-[#0F172A] mb-1.5"
                    >
                      Campus Accommodation Preference
                    </label>
                    <select
                      id="applicant-hostel"
                      value={hostelRequired}
                      onChange={(e) => setHostelRequired(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#DCE2EC] rounded-md text-[#0F172A] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    >
                      <option value="No — Day Scholar">No — Day Scholar</option>
                      <option value="Yes — Women’s Hostel">Yes — Women’s Hostel</option>
                      <option value="Yes — Men’s Hostel">Yes — Men’s Hostel</option>
                    </select>
                  </div>
                </div>

                {/* Live Programme Fee & Merit Scholarship Assessment Bar */}
                <div className="p-4 bg-[#F3F5F8] border border-[#DCE2EC] rounded-md text-xs space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-[#0F172A]">
                      {selectedProgrammeObj.title} · {selectedProgrammeObj.annualFee}
                    </span>
                    <span className="font-mono text-[#475569] tabular-nums">
                      Intake: {selectedProgrammeObj.intake} seats
                    </span>
                  </div>
                  <p className="text-[#475569]">
                    Eligibility: {selectedProgrammeObj.eligibility}
                  </p>
                  {liveScholarshipPreview && (
                    <p className="pt-1 font-medium text-[#1E3A8A]">
                      Merit Preview: {liveScholarshipPreview}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-[#64748B]">
                    No application fee is charged at this provisional registration step.
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-sm font-medium text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
