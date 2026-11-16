export type ProgrammeLevel = 'Undergraduate' | 'Postgraduate' | 'Research';
export type AcademicStream =
  | 'Computer Science & AI'
  | 'Commerce & Finance'
  | 'Management'
  | 'Sciences & Humanities';

export interface Programme {
  id: string;
  code: string;
  title: string;
  level: ProgrammeLevel;
  stream: AcademicStream;
  department: string;
  duration: string;
  intake: number;
  annualFee: string;
  eligibility: string;
  overview: string;
  coreSubjects: string[];
  careerPathways: string[];
}

export interface PlacementSector {
  sector: string;
  offersCount: number;
  sharePercent: string;
  medianPackage: string;
  topRecruiters: string;
}

export interface YearlyPlacementStat {
  year: string;
  placementRate: string;
  rateNumeric: number;
  offers: number;
  highestCtc: string;
  recruiters: number;
}

export interface AlumniOutcome {
  id: string;
  name: string;
  cohort: string;
  degree: string;
  role: string;
  organization: string;
  statement: string;
}

export interface CampusFacility {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  hours: string;
  capacity: string;
  location: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  imageAlt: string;
  caption: string;
}

export interface ResearchCentre {
  code: string;
  title: string;
  partner: string;
  focus: string;
  infrastructure: string;
  outcome: string;
}

export interface ScholarshipTier {
  name: string;
  eligibility: string;
  benefit: string;
  quota: string;
}

export interface PrincipalProfile {
  name: string;
  title: string;
  qualifications: string;
  tenure: string;
  email: string;
  phone: string;
  officeLocation: string;
  officeHours: string;
  message: string;
  highlights: string[];
  photoUrl: string;
  photoAlt: string;
}

export interface DepartmentHead {
  id: string;
  department: string;
  stream: AcademicStream;
  name: string;
  designation: string;
  qualifications: string;
  experience: string;
  researchFocus: string;
  email: string;
  officeLocation: string;
  consultationHours: string;
  photoUrl: string;
  photoAlt: string;
}

export interface AcademicNotice {
  date: string;
  category: string;
  title: string;
  detail: string;
}

export type CampusPhotoCategory =
  | 'Academic & Labs'
  | 'Student Commons'
  | 'Transport & Grounds';

export interface CampusPhotoItem {
  id: string;
  figLabel: string;
  title: string;
  category: CampusPhotoCategory;
  location: string;
  hours: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const INSTITUTIONAL_METRICS = [
  {
    value: 'NIRF #50',
    label: 'National College Ranking',
    detail: 'Ministry of Education, Govt. of India',
  },
  {
    value: "NAAC 'A'",
    label: 'Institutional Accreditation',
    detail: 'UGC Autonomous · Bharathiar University',
  },
  {
    value: '32+',
    label: 'Academic Programmes',
    detail: '14 Departments · 210+ Research Faculty',
  },
  {
    value: '96.2%',
    label: '2025–26 Placement Rate',
    detail: '1,321 Offers · 184 Recruiting Partners',
  },
];

export const PROGRAMMES: Programme[] = [
  {
    id: 'bsc-cs',
    code: 'UG-CS01',
    title: 'B.Sc. Computer Science',
    level: 'Undergraduate',
    stream: 'Computer Science & AI',
    department: 'Department of Computer Science',
    duration: '3 Years (6 Semesters)',
    intake: 180,
    annualFee: '₹64,000 / year',
    eligibility: '10+2 pass with Mathematics or Computer Science (min. 60% aggregate)',
    overview:
      'Foundational training in algorithms, systems programming, relational databases, and cloud-native software engineering backed by industry-aligned lab practicums.',
    coreSubjects: [
      'Data Structures & Algorithms',
      'Operating Systems & Linux',
      'Database Management Systems',
      'Full-Stack Web Engineering',
      'Cloud Architecture & DevOps',
    ],
    careerPathways: [
      'Software Development Engineer',
      'Systems Analyst',
      'Cloud Support Associate',
      'M.Sc. / MCA Higher Studies',
    ],
  },
  {
    id: 'bsc-aids',
    code: 'UG-AI02',
    title: 'B.Sc. Artificial Intelligence & Data Science',
    level: 'Undergraduate',
    stream: 'Computer Science & AI',
    department: 'School of AI & Data Science',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    annualFee: '₹72,000 / year',
    eligibility: '10+2 pass with Mathematics and Physics / Computer Science (min. 65%)',
    overview:
      'Applied curriculum bridging statistical inference, neural architectures, Python data pipelines, and ethical AI deployment on campus GPU clusters.',
    coreSubjects: [
      'Linear Algebra & Probability',
      'Statistical Machine Learning',
      'Deep Learning & Computer Vision',
      'Natural Language Processing',
      'Big Data Engineering with Spark',
    ],
    careerPathways: [
      'Junior Data Scientist',
      'Machine Learning Engineer',
      'Business Intelligence Analyst',
      'Applied AI Researcher',
    ],
  },
  {
    id: 'bsc-it',
    code: 'UG-IT03',
    title: 'B.Sc. Information Technology',
    level: 'Undergraduate',
    stream: 'Computer Science & AI',
    department: 'Department of Information Technology',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    annualFee: '₹62,000 / year',
    eligibility: '10+2 pass with Mathematics or Computer Applications',
    overview:
      'Practical specialization in enterprise networking, web infrastructure, cybersecurity hygiene, and cloud systems administration.',
    coreSubjects: [
      'Computer Networks & Routing',
      'Enterprise Java & Spring Boot',
      'Cybersecurity & Ethical Hacking',
      'Cloud Infrastructure (AWS / Azure)',
      'Software Project Management',
    ],
    careerPathways: [
      'Network & Cloud Administrator',
      'Backend Software Developer',
      'Information Security Analyst',
      'Technical Support Engineer',
    ],
  },
  {
    id: 'bca',
    code: 'UG-CA04',
    title: 'Bachelor of Computer Applications (BCA)',
    level: 'Undergraduate',
    stream: 'Computer Science & AI',
    department: 'Department of Computer Applications',
    duration: '3 Years (6 Semesters)',
    intake: 180,
    annualFee: '₹62,000 / year',
    eligibility: '10+2 pass in any stream with Mathematics or Business Mathematics',
    overview:
      'Application-centric computing degree emphasizing enterprise software delivery, mobile engineering, UI prototyping, and agile capstone projects.',
    coreSubjects: [
      'Object-Oriented Java & C++',
      'Mobile Application Development',
      'Software Testing & Quality Assurance',
      'Information Security Fundamentals',
      'Enterprise Resource Planning',
    ],
    careerPathways: [
      'Application Developer',
      'QA Automation Engineer',
      'UI/UX Engineer',
      'Database Administrator',
    ],
  },
  {
    id: 'bcom-pa',
    code: 'UG-CM05',
    title: 'B.Com. Professional Accounting',
    level: 'Undergraduate',
    stream: 'Commerce & Finance',
    department: 'Department of Commerce (PA)',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    annualFee: '₹58,000 / year',
    eligibility: '10+2 pass with Commerce and Accountancy (min. 60%)',
    overview:
      'Structured commerce degree synchronized with CA, CMA, and ACCA syllabi, focusing on corporate law, taxation, statutory audit, and financial reporting.',
    coreSubjects: [
      'Corporate Accounting & IFRS',
      'Direct & Indirect Taxation (GST)',
      'Auditing & Assurance Standards',
      'Cost & Management Accounting',
      'Corporate & Mercantile Law',
    ],
    careerPathways: [
      'Audit Associate',
      'Taxation Consultant',
      'Financial Reporting Analyst',
      'Chartered Accountancy Track',
    ],
  },
  {
    id: 'bcom-ba',
    code: 'UG-CM06',
    title: 'B.Com. Business Analytics',
    level: 'Undergraduate',
    stream: 'Commerce & Finance',
    department: 'Department of Commerce & Analytics',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    annualFee: '₹64,000 / year',
    eligibility: '10+2 pass with Commerce, Mathematics, or Statistics',
    overview:
      'Interdisciplinary programme combining financial accounting and corporate economics with SQL, Power BI, financial modelling, and risk analytics.',
    coreSubjects: [
      'Financial Modelling in Excel',
      'SQL & Business Intelligence Tools',
      'Quantitative Economics',
      'Investment & Portfolio Analysis',
      'Predictive Retail Analytics',
    ],
    careerPathways: [
      'Financial Data Analyst',
      'Risk Advisory Associate',
      'Revenue Operations Analyst',
      'Corporate Treasury Analyst',
    ],
  },
  {
    id: 'bcom-ca',
    code: 'UG-CM07',
    title: 'B.Com. Computer Applications',
    level: 'Undergraduate',
    stream: 'Commerce & Finance',
    department: 'Department of Commerce (CA)',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    annualFee: '₹56,000 / year',
    eligibility: '10+2 pass with Commerce / Accountancy / Computer Science',
    overview:
      'Dual-competency commerce curriculum integrating Tally Prime, SAP FICO fundamentals, web technologies, and automated accounting workflows.',
    coreSubjects: [
      'Financial & Cost Accounting',
      'Relational Databases for Business',
      'E-Commerce & Digital Payments',
      'SAP FICO & Tally Prime Lab',
      'Banking & Insurance Operations',
    ],
    careerPathways: [
      'ERP Finance Executive',
      'Accounts & Compliance Analyst',
      'FinTech Operations Associate',
      'Banking Officer Track',
    ],
  },
  {
    id: 'bba',
    code: 'UG-MG08',
    title: 'Bachelor of Business Administration (BBA)',
    level: 'Undergraduate',
    stream: 'Management',
    department: 'School of Management Studies',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    annualFee: '₹56,000 / year',
    eligibility: '10+2 pass in any recognized board with minimum 55% marks',
    overview:
      'Case-study driven management education cultivating leadership, supply chain operations, brand strategy, and entrepreneurial venture planning.',
    coreSubjects: [
      'Organizational Behaviour',
      'Operations & Supply Chain Management',
      'Marketing Strategy & Consumer Insights',
      'Corporate Finance & Valuation',
      'International Business Policy',
    ],
    careerPathways: [
      'Management Trainee',
      'Operations Coordinator',
      'Brand & Growth Associate',
      'MBA / Entrepreneurship Track',
    ],
  },
  {
    id: 'bsc-biotech',
    code: 'UG-SC09',
    title: 'B.Sc. Biotechnology',
    level: 'Undergraduate',
    stream: 'Sciences & Humanities',
    department: 'Department of Biosciences',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    annualFee: '₹60,000 / year',
    eligibility: '10+2 pass with Biology / Biotechnology and Chemistry',
    overview:
      'Laboratory-intensive life sciences degree covering molecular genetics, bioprocess engineering, immunology, and agricultural bioinformatics.',
    coreSubjects: [
      'Molecular Biology & Genetics',
      'Microbiology & Immunology',
      'Recombinant DNA Technology',
      'Bioprocess & Fermentation Tech',
      'Clinical Bioinformatics',
    ],
    careerPathways: [
      'Bioprocess Lab Analyst',
      'Clinical Research Coordinator',
      'Quality Control Microbiologist',
      'M.Sc. Life Sciences Research',
    ],
  },
  {
    id: 'bsc-psych',
    code: 'UG-HM10',
    title: 'B.Sc. Psychology',
    level: 'Undergraduate',
    stream: 'Sciences & Humanities',
    department: 'Department of Psychology',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    annualFee: '₹52,000 / year',
    eligibility: '10+2 pass in any recognized stream (min. 55% aggregate)',
    overview:
      'Scientific study of human cognition, developmental psychology, psychometric assessment, and clinical counselling practicums.',
    coreSubjects: [
      'Cognitive & Experimental Psychology',
      'Psychometrics & Research Statistics',
      'Organizational & Industrial Psychology',
      'Abnormal & Clinical Foundations',
      'Counselling Fieldwork Practicum',
    ],
    careerPathways: [
      'HR & Talent Assessment Specialist',
      'School & Career Counsellor',
      'Behavioural Research Assistant',
      'M.Sc. Clinical Psychology Track',
    ],
  },
  {
    id: 'ba-english',
    code: 'UG-HM11',
    title: 'B.A. English Literature',
    level: 'Undergraduate',
    stream: 'Sciences & Humanities',
    department: 'Department of English',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    annualFee: '₹46,000 / year',
    eligibility: '10+2 pass in any stream with proficiency in English',
    overview:
      'Critical study of world literatures, Indian writing in English, literary theory, journalism, and academic communication.',
    coreSubjects: [
      'British & Commonwealth Literature',
      'Indian Writing in English',
      'Literary Criticism & Theory',
      'Media Writing & Editorial Craft',
      'Linguistics & Phonetics',
    ],
    careerPathways: [
      'Editorial & Publishing Associate',
      'Corporate Communications Specialist',
      'Academic Researcher & Educator',
      'Civil Services Track',
    ],
  },
  {
    id: 'msc-cs',
    code: 'PG-CS12',
    title: 'M.Sc. Computer Science',
    level: 'Postgraduate',
    stream: 'Computer Science & AI',
    department: 'Department of Computer Science',
    duration: '2 Years (4 Semesters)',
    intake: 50,
    annualFee: '₹68,000 / year',
    eligibility: 'B.Sc. CS / IT / BCA or equivalent computing degree with 55%+',
    overview:
      'Advanced postgraduate specialization in distributed computing, cybersecurity, compiler design, and peer-reviewed thesis research.',
    coreSubjects: [
      'Distributed Systems & Microservices',
      'Network Security & Cryptography',
      'Advanced Machine Learning',
      'Cloud-Native Systems Engineering',
      'Dissertation & Industry Internship',
    ],
    careerPathways: [
      'Senior Software Engineer',
      'Security Engineer',
      'Systems Architect',
      'Doctoral Research (Ph.D.)',
    ],
  },
  {
    id: 'mcom',
    code: 'PG-CM13',
    title: 'Master of Commerce (M.Com.)',
    level: 'Postgraduate',
    stream: 'Commerce & Finance',
    department: 'Department of Commerce',
    duration: '2 Years (4 Semesters)',
    intake: 60,
    annualFee: '₹54,000 / year',
    eligibility: 'B.Com. / BBA / B.A. Corporate Secretaryship with 55%+',
    overview:
      'Graduate study in strategic financial management, international trade law, econometrics, and empirical corporate research.',
    coreSubjects: [
      'Strategic Financial Management',
      'Research Methodology & Econometrics',
      'International Trade & Forex',
      'Corporate Governance & Ethics',
      'Security Analysis & Derivatives',
    ],
    careerPathways: [
      'Corporate Finance Manager',
      'Equity Research Analyst',
      'Assistant Professor (NET/SET Track)',
      'Banking & Treasury Officer',
    ],
  },
  {
    id: 'msw',
    code: 'PG-HM14',
    title: 'Master of Social Work (MSW)',
    level: 'Postgraduate',
    stream: 'Sciences & Humanities',
    department: 'Department of Social Work',
    duration: '2 Years (4 Semesters)',
    intake: 40,
    annualFee: '₹50,000 / year',
    eligibility: 'Any recognized Bachelor’s degree with minimum 50% aggregate',
    overview:
      'Field-immersion graduate degree offering specializations in Human Resource Management, Medical & Psychiatric Social Work, and Community Development.',
    coreSubjects: [
      'Human Resource & Industrial Relations',
      'Community Organization & Public Policy',
      'Counselling & Clinical Practice',
      'Labour Legislation & Compliance',
      'Concurrent Fieldwork Practicum',
    ],
    careerPathways: [
      'HR Business Partner',
      'CSR Programme Lead',
      'Hospital Psychiatric Counsellor',
      'Development Sector Officer',
    ],
  },
  {
    id: 'phd-cs-comm',
    code: 'RS-PH15',
    title: 'Ph.D. in Computer Science, Commerce & Biotechnology',
    level: 'Research',
    stream: 'Computer Science & AI',
    department: 'Directorate of Doctoral Research',
    duration: '3–5 Years (Full-Time / Part-Time)',
    intake: 24,
    annualFee: '₹42,000 / year',
    eligibility: 'Master’s degree (55%+) with Bharathiar University CET / NET / GATE',
    overview:
      'Doctoral research fellowships supervised by recognized Bharathiar University guides with access to funded instrumentation and international journal support.',
    coreSubjects: [
      'Research Methodology & Publication Ethics',
      'Domain Literature & Quantitative Colloquium',
      'Sponsored Lab & Grant Execution',
      'Doctoral Thesis & Viva Voce',
    ],
    careerPathways: [
      'University Faculty & Principal Investigator',
      'Industrial R&D Scientist',
      'Policy & Economic Think-Tank Fellow',
    ],
  },
];

export const RESEARCH_CENTRES: ResearchCentre[] = [
  {
    code: 'COE-01',
    title: 'Centre for AI, Cloud & Applied Computing',
    partner: 'Industry Lab · IBM & AWS Academy Partner',
    focus: 'Distributed systems, applied computer vision, and automated software verification.',
    infrastructure: 'Dedicated GPU inference nodes, enterprise blade servers, and 10 Gbps campus fiber.',
    outcome: '42 student-authored IEEE/Scopus papers and 9 patent filings since 2023.',
  },
  {
    code: 'COE-02',
    title: 'Financial Markets & IFRS Analytics Studio',
    partner: 'Corporate Practice · Grant Thornton & NSE Academy',
    focus: 'Statutory audit simulation, GST compliance modelling, and quantitative equity research.',
    infrastructure: '60-seat terminal laboratory running live market feeds, SAP FICO, and Power BI.',
    outcome: 'Over 310 students certified annually in NISM, Tally Prime, and ACCA modules.',
  },
  {
    code: 'COE-03',
    title: 'DST-Supported Biosciences & Genetics Wing',
    partner: 'Sponsored Research · DBT & Bharathiar University',
    focus: 'Microbial bioprocessing, phytochemical screening, and clinical diagnostics.',
    infrastructure: 'PCR thermal cyclers, UV-Vis spectrophotometers, and sterile laminar airflow chambers.',
    outcome: '₹1.85 Cr in active extramural research grants and regional industry consultancy.',
  },
  {
    code: 'COE-04',
    title: 'Sri Krishna Innovation & Incubation Cell (IIC)',
    partner: 'Ministry of Education IIC · 4-Star Rated Hub',
    focus: 'Early-stage venture prototyping, MSME mentorship, and intellectual property support.',
    infrastructure: 'Co-working ideation studio, rapid prototyping bay, and seed-pitch advisory.',
    outcome: '14 student-founded startups incubated across SaaS, AgriTech, and D2C retail.',
  },
];

export const SCHOLARSHIP_TIERS: ScholarshipTier[] = [
  {
    name: 'Sri Krishna Academic Merit Waiver',
    eligibility: '95.0% and above in Class XII Board Examinations',
    benefit: '100% Tuition Fee Waiver for First Academic Year',
    quota: 'Top 50 Incoming Scholars',
  },
  {
    name: 'Honours Distinction Scholarship',
    eligibility: '88.0% – 94.9% in Class XII (or 8.5+ CGPA for PG)',
    benefit: '25% to 50% Tuition Fee Concession',
    quota: 'Merit-cum-Application Basis',
  },
  {
    name: 'National & State Sports Fellowship',
    eligibility: 'Medallists in State, National, or Inter-University Championships',
    benefit: 'Up to 100% Tuition + Hostel & Dietary Support',
    quota: 'Verified by Physical Education Board',
  },
  {
    name: 'First-Graduate & Govt. Aid Desk',
    eligibility: 'Tamil Nadu First-Graduate & BC/MBC/SC/ST State Schemes',
    benefit: 'Full State Fee Reimbursement & Nodal Facilitation',
    quota: '100% Eligible Applicants Assisted',
  },
];

export const ACADEMIC_NOTICES: AcademicNotice[] = [
  {
    date: '18 May 2026',
    category: 'Admissions',
    title: 'Phase I Merit List & Counselling Schedule Released for UG Programmes',
    detail: 'Shortlisted candidates for B.Sc. CS, AI & DS, BCA, and B.Com. PA may confirm slots at the Kuniyamuthur Admissions Desk.',
  },
  {
    date: '04 Jun 2026',
    category: 'Research',
    title: 'Call for Doctoral (Ph.D.) Synopsis Proposals — July 2026 Session',
    detail: 'Eligible NET/SET/GATE and Bharathiar CET qualifiers invited to submit abstracts in Computer Science, Commerce, and Biotechnology.',
  },
  {
    date: '15 Jul 2026',
    category: 'Academic Calendar',
    title: 'Deeksharambh 2026: Incoming First-Year Student Induction Week',
    detail: 'Department orientations, digital library onboarding, and bridge workshops commence across all 14 academic schools.',
  },
];

export const YEARLY_PLACEMENTS: YearlyPlacementStat[] = [
  {
    year: '2023–24',
    placementRate: '91.4%',
    rateNumeric: 91.4,
    offers: 1148,
    highestCtc: '12.0 LPA',
    recruiters: 156,
  },
  {
    year: '2024–25',
    placementRate: '93.8%',
    rateNumeric: 93.8,
    offers: 1236,
    highestCtc: '13.2 LPA',
    recruiters: 171,
  },
  {
    year: '2025–26',
    placementRate: '96.2%',
    rateNumeric: 96.2,
    offers: 1321,
    highestCtc: '14.5 LPA',
    recruiters: 184,
  },
];

export const PLACEMENT_SECTORS: PlacementSector[] = [
  {
    sector: 'IT Services & Product Engineering',
    offersCount: 642,
    sharePercent: '48.6%',
    medianPackage: '5.4 LPA',
    topRecruiters: 'Zoho, Cognizant, TCS, Infosys, Wipro',
  },
  {
    sector: 'Audit, Consulting & Financial Services',
    offersCount: 384,
    sharePercent: '29.1%',
    medianPackage: '4.8 LPA',
    topRecruiters: 'Grant Thornton, Deloitte, EY, HDFC Bank',
  },
  {
    sector: 'Data Analytics & FinTech Platforms',
    offersCount: 196,
    sharePercent: '14.8%',
    medianPackage: '6.2 LPA',
    topRecruiters: 'KGISL, PayPal India, Freshworks, Ford Tech',
  },
  {
    sector: 'Life Sciences, Media & HR Operations',
    offersCount: 99,
    sharePercent: '7.5%',
    medianPackage: '4.2 LPA',
    topRecruiters: 'Biocon, HCL Life Sciences, Robert Bosch',
  },
];

export const RECRUITER_PARTNERS = [
  'Zoho Corporation',
  'Grant Thornton',
  'Cognizant',
  'Deloitte India',
  'Tata Consultancy Services',
  'Wipro Technologies',
  'KGISL',
  'Infosys',
  'PayPal',
  'Ford Business Solutions',
  'EY Global Delivery',
  'Biocon Biologics',
];

export const ALUMNI_OUTCOMES: AlumniOutcome[] = [
  {
    id: 'alumni-1',
    name: 'Kavya Subramanian',
    cohort: 'Class of 2024',
    degree: 'B.Sc. Artificial Intelligence & Data Science',
    role: 'Member Technical Staff',
    organization: 'Zoho Corporation, Chennai',
    statement:
      'Entering SKASC with zero programming exposure, three semesters of structured competitive coding labs and faculty-mentored ML capstones helped me clear Zoho’s product engineering interviews directly on campus.',
  },
  {
    id: 'alumni-2',
    name: 'Aravindh Natarajan',
    cohort: 'Class of 2023',
    degree: 'B.Com. Professional Accounting',
    role: 'Tax & Assurance Analyst',
    organization: 'Grant Thornton Bharat, Bengaluru',
    statement:
      'Aligning my undergraduate syllabus with statutory accounting standards and live Excel financial modelling gave me a measurable head start during campus recruitment and accelerated my CA Intermediate clearance.',
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'library',
    indexLabel: '01',
    title: 'Central Digital Knowledge Centre',
    subtitle: 'Fully automated academic library & research archive',
    hours: 'Mon – Sat · 08:00 to 19:30',
    capacity: '480 Reading Seats · 92,000+ Volumes',
    location: 'Main Quadrangle, Ground & First Floor',
    description:
      'Air-conditioned scholarly reading hall integrated with INFLIBNET, IEEE Xplore, JSTOR, and EBSCO digital repositories, alongside quiet seminar pods and video-conferencing suites.',
    highlights: [
      '92,400+ print monographs & 18,500+ peer-reviewed e-journals',
      'RFID self-checkout kiosks and remote VPN off-campus access',
      'Dedicated postgraduate thesis consultation & plagiarism-check desk',
    ],
    imageUrl: '/src/assets/images/skcas_digital_library_1794810243802.jpg',
    imageAlt: 'Students reading and working with laptops inside the sunlit Sri Krishna College digital library reading hall',
    caption: 'Fig. 2 — Central Digital Knowledge Centre, reading wing and research stacks.',
  },
  {
    id: 'labs',
    indexLabel: '02',
    title: 'Computing & Data Analytics Laboratories',
    subtitle: 'Enterprise blade servers & dedicated AI workstations',
    hours: 'Mon – Sat · 08:30 to 18:30',
    capacity: '1,250+ Networked Workstations',
    location: 'Academic Block C, Levels 2 & 3',
    description:
      'Twelve specialized laboratories powered by high-availability IBM blade servers, campus-wide 10 Gbps fiber backbone, and licensed toolchains for cloud engineering, cybersecurity, and statistical computing.',
    highlights: [
      'GPU-accelerated workstations for Deep Learning & Computer Vision',
      'Glass-walled Agile Collaboration Studio for capstone sprint reviews',
      'Dedicated Biotechnology & Molecular Genetics wet labs in Block B',
    ],
    imageUrl: '/src/assets/images/skcas_computing_lab_1794810243663.jpg',
    imageAlt: 'University students working on dual-monitor systems in the SKCAS Data Analytics and Collaboration Lab',
    caption: 'Fig. 3 — Data Analytics Laboratory and glass-walled collaborative seminar studio.',
  },
  {
    id: 'campus-life',
    indexLabel: '03',
    title: 'Swachh Campus, Hostels & Athletics',
    subtitle: 'Nationally ranked green campus in Kuniyamuthur',
    hours: 'Residential Access · 24×7 Security',
    capacity: '1,400+ Hostel Residents · 14 Sports Disciplines',
    location: 'Sugunapuram Campus Precinct, Coimbatore',
    description:
      'Ranked 1st nationally in the Swachh Campus Rankings, the green Kuniyamuthur campus pairs shaded sandstone amphitheatres and botanical walkways with residential hostels and floodlit courts.',
    highlights: [
      'Separate, Wi-Fi enabled hostels for men and women with hygienic dining',
      '400m athletic track, cricket oval, basketball, and indoor badminton courts',
      '28 student-led cultural, NCC, NSS, and entrepreneurship chapters',
    ],
    imageUrl: '/src/assets/images/skcas_campus_quad_1794810245343.jpg',
    imageAlt: 'College students discussing coursework on sandstone amphitheatre steps surrounded by tropical campus gardens',
    caption: 'Fig. 4 — Open-air sandstone amphitheatre and shaded colonnade at Kuniyamuthur.',
  },
];

export const CAMPUS_LOGISTICS = [
  {
    title: '45+ Coimbatore & Regional Bus Routes',
    detail: 'Daily college transport connecting Gandhipuram, RS Puram, Avinashi, Pollachi, Tiruppur, and Mettupalayam.',
  },
  {
    title: 'Residential Hostels & Medical Wing',
    detail: 'On-campus residences for 1,400+ students with 24×7 security, solar hot water, reading lounges, and resident medical nurse.',
  },
  {
    title: '28 Clubs, NCC & NSS Units',
    detail: 'Active student chapters spanning Fine Arts, Debate, Coding Guild, Rotaract, Women’s Empowerment Cell, and Eco Club.',
  },
];

export const ADMISSION_STEPS = [
  {
    step: '01.',
    title: 'Online Application Submission',
    detail:
      'Complete the provisional application with Class XII / Undergraduate marks and select your preferred academic programme.',
  },
  {
    step: '02.',
    title: 'Merit Screening & Scholarship Review',
    detail:
      'Admissions Committee evaluates qualifying percentages, subject prerequisites, and automatic merit fee-waiver eligibility.',
  },
  {
    step: '03.',
    title: 'Counselling & Document Verification',
    detail:
      'Shortlisted applicants attend an on-campus or virtual faculty interaction with original transfer and mark certificates.',
  },
  {
    step: '04.',
    title: 'Enrolment & Fee Confirmation',
    detail:
      'Receive your official Seat Allotment Order and register for the July 2026 Deeksharambh Induction Week.',
  },
];

export const PRINCIPAL_PROFILE: PrincipalProfile = {
  name: 'Dr. R. Jagajeevan',
  title: 'Principal · Sri Krishna College of Arts and Science',
  qualifications: 'M.Com., M.Phil., Ph.D.',
  tenure: '26+ Years in Autonomous Higher Education & Academic Governance',
  email: 'principal@skasc.ac.in',
  phone: '+91 422 267 8401',
  officeLocation: 'Principal’s Chambers, Administrative Block, Ground Floor',
  officeHours: 'Mon – Sat · 09:30 to 16:30 (By Prior Appointment)',
  message:
    'At Sri Krishna College of Arts and Science, autonomous curriculum design gives our faculty the freedom to pair foundational scholarship with emerging industry practice. Our commitment is to ensure every undergraduate, postgraduate, and doctoral researcher graduates with analytical rigour, ethical clarity, and measurable career readiness.',
  highlights: [
    'Guided NAAC ‘A’ Grade institutional re-accreditation and NIRF Top-50 national ranking',
    'Chaired Outcome-Based Education (OBE) reforms across 14 academic schools',
    'Oversaw expansion of industry-embedded Centres of Excellence and doctoral fellowships',
  ],
  photoUrl: '/src/assets/images/skcas_principal_portrait_1794811935125.jpg',
  photoAlt: 'Portrait of Dr. R. Jagajeevan, Principal of Sri Krishna College of Arts and Science, Coimbatore',
};

export const DEPARTMENT_HODS: DepartmentHead[] = [
  {
    id: 'hod-cs',
    department: 'Department of Computer Science',
    stream: 'Computer Science & AI',
    name: 'Dr. K. Devika Rani Dhivya',
    designation: 'Professor & Head of Department',
    qualifications: 'M.Sc., M.Phil., Ph.D.',
    experience: '19 Years Teaching & Research',
    researchFocus: 'Distributed Cloud Architectures, Edge Computing & Network Security',
    email: 'hod.cs@skasc.ac.in',
    officeLocation: 'Academic Block C, Level 2 · Room C-204',
    consultationHours: 'Mon – Fri · 14:00 – 16:00',
    photoUrl: '/src/assets/images/skcas_hod_cs_1794811934316.jpg',
    photoAlt: 'Portrait of Dr. K. Devika Rani Dhivya, Head of Department of Computer Science',
  },
  {
    id: 'hod-aids',
    department: 'School of AI & Data Science',
    stream: 'Computer Science & AI',
    name: 'Dr. S. Dhanalakshmi',
    designation: 'Professor & Head of Department',
    qualifications: 'M.C.A., M.Phil., Ph.D.',
    experience: '18 Years Teaching & Research',
    researchFocus: 'Deep Computer Vision, Medical Imaging & Statistical NLP',
    email: 'hod.aids@skasc.ac.in',
    officeLocation: 'Academic Block C, Level 3 · AI Lab Wing',
    consultationHours: 'Mon – Fri · 15:00 – 16:30',
    photoUrl: '/src/assets/images/skcas_hod_cs_1794811934316.jpg',
    photoAlt: 'Portrait of Dr. S. Dhanalakshmi, Head of School of AI & Data Science',
  },
  {
    id: 'hod-it',
    department: 'Department of Information Technology',
    stream: 'Computer Science & AI',
    name: 'Dr. C. Sunitha',
    designation: 'Professor & Head of Department',
    qualifications: 'M.Sc. (IT), M.Phil., Ph.D.',
    experience: '20 Years Teaching & Research',
    researchFocus: 'Cognitive Computing Systems, IoT Protocols & Cyber Forensics',
    email: 'hod.it@skasc.ac.in',
    officeLocation: 'Academic Block C, Level 2 · Room C-212',
    consultationHours: 'Tue – Sat · 14:00 – 16:00',
    photoUrl: '/src/assets/images/skcas_hod_cs_1794811934316.jpg',
    photoAlt: 'Portrait of Dr. C. Sunitha, Head of Department of Information Technology',
  },
  {
    id: 'hod-bca',
    department: 'Department of Computer Applications',
    stream: 'Computer Science & AI',
    name: 'Dr. B. Anuja Beatrice',
    designation: 'Professor & Head of Department',
    qualifications: 'M.C.A., Ph.D.',
    experience: '17 Years Teaching & Research',
    researchFocus: 'Enterprise Software Engineering, Agile DevOps & Cloud Microservices',
    email: 'hod.bca@skasc.ac.in',
    officeLocation: 'Academic Block C, Level 1 · Room C-108',
    consultationHours: 'Mon – Fri · 14:30 – 16:30',
    photoUrl: '/src/assets/images/skcas_hod_cs_1794811934316.jpg',
    photoAlt: 'Portrait of Dr. B. Anuja Beatrice, Head of Department of Computer Applications',
  },
  {
    id: 'hod-comm-dean',
    department: 'Department of Commerce & Analytics',
    stream: 'Commerce & Finance',
    name: 'Dr. W. Maria Josephine Williams',
    designation: 'Dean of Commerce & Head of Department',
    qualifications: 'M.Com., M.Phil., Ph.D.',
    experience: '23 Years Teaching & Research',
    researchFocus: 'Financial Econometrics, Derivatives Pricing & Corporate Governance',
    email: 'dean.commerce@skasc.ac.in',
    officeLocation: 'Main Quadrangle, Level 1 · Commerce Deanery',
    consultationHours: 'Mon – Fri · 11:00 – 13:00',
    photoUrl: '/src/assets/images/skcas_hod_commerce_1794811935329.jpg',
    photoAlt: 'Portrait of Dr. W. Maria Josephine Williams, Dean of Commerce and Head of Department',
  },
  {
    id: 'hod-comm-pa',
    department: 'Department of Commerce (PA)',
    stream: 'Commerce & Finance',
    name: 'Dr. C. Dhanalakshmi',
    designation: 'Professor & Head of Department',
    qualifications: 'M.Com., Ph.D., UGC-NET',
    experience: '18 Years Teaching & Research',
    researchFocus: 'Direct Taxation, Statutory Audit Standards & IFRS Convergence',
    email: 'hod.compa@skasc.ac.in',
    officeLocation: 'Main Quadrangle, Level 2 · Room A-205',
    consultationHours: 'Mon – Sat · 14:00 – 16:00',
    photoUrl: '/src/assets/images/skcas_hod_commerce_1794811935329.jpg',
    photoAlt: 'Portrait of Dr. C. Dhanalakshmi, Head of Department of Commerce Professional Accounting',
  },
  {
    id: 'hod-comm-ca',
    department: 'Department of Commerce (CA)',
    stream: 'Commerce & Finance',
    name: 'Dr. J. Vijimol',
    designation: 'Professor & Head of Department',
    qualifications: 'M.Com. (CA), M.Phil., Ph.D.',
    experience: '16 Years Teaching & Research',
    researchFocus: 'Digital Banking Ecosystems, ERP Finance & E-Commerce Compliance',
    email: 'hod.comca@skasc.ac.in',
    officeLocation: 'Main Quadrangle, Level 2 · Room A-214',
    consultationHours: 'Mon – Fri · 14:00 – 16:00',
    photoUrl: '/src/assets/images/skcas_hod_commerce_1794811935329.jpg',
    photoAlt: 'Portrait of Dr. J. Vijimol, Head of Department of Commerce Computer Applications',
  },
  {
    id: 'hod-bba',
    department: 'School of Management Studies',
    stream: 'Management',
    name: 'Dr. T. Shenbhagavadivu',
    designation: 'Professor & Head of Department',
    qualifications: 'M.B.A., M.Phil., Ph.D.',
    experience: '17 Years Teaching & Industry Advisory',
    researchFocus: 'Supply Chain Resilience, Human Capital Analytics & Retail Strategy',
    email: 'hod.bba@skasc.ac.in',
    officeLocation: 'Academic Block B, Level 1 · Management Wing',
    consultationHours: 'Mon – Fri · 14:30 – 16:30',
    photoUrl: '/src/assets/images/skcas_hod_management_1794811935745.jpg',
    photoAlt: 'Portrait of Dr. T. Shenbhagavadivu, Head of School of Management Studies',
  },
  {
    id: 'hod-bioscience',
    department: 'Department of Biosciences',
    stream: 'Sciences & Humanities',
    name: 'Dr. M. Manikandan',
    designation: 'Dean of Biosciences & Head of Department',
    qualifications: 'M.Sc., Ph.D.',
    experience: '21 Years Teaching & Funded Research',
    researchFocus: 'Microbial Bioprocessing, Molecular Genetics & Phytochemical Screening',
    email: 'hod.biotech@skasc.ac.in',
    officeLocation: 'Academic Block B, Level 2 · Biosciences Wing',
    consultationHours: 'Mon – Fri · 15:00 – 17:00',
    photoUrl: '/src/assets/images/skcas_hod_sciences_1794811935512.jpg',
    photoAlt: 'Portrait of Dr. M. Manikandan, Dean and Head of Department of Biosciences',
  },
  {
    id: 'hod-english',
    department: 'Department of English',
    stream: 'Sciences & Humanities',
    name: 'Dr. I.J. Kavitha',
    designation: 'Associate Professor & Head of Department',
    qualifications: 'M.A., M.Phil., Ph.D.',
    experience: '18 Years Teaching & Editorial Scholarship',
    researchFocus: 'Postcolonial Indian Writing, Discourse Analysis & Academic Rhetoric',
    email: 'hod.english@skasc.ac.in',
    officeLocation: 'Main Quadrangle, Level 1 · Room A-116',
    consultationHours: 'Mon – Fri · 14:00 – 16:00',
    photoUrl: '/src/assets/images/skcas_hod_commerce_1794811935329.jpg',
    photoAlt: 'Portrait of Dr. I.J. Kavitha, Head of Department of English',
  },
  {
    id: 'hod-msw',
    department: 'Department of Social Work',
    stream: 'Sciences & Humanities',
    name: 'Dr. A. Alagarsamy',
    designation: 'Professor & Head of Department',
    qualifications: 'M.S.W., M.Phil., Ph.D.',
    experience: '19 Years Academic & Field Practice',
    researchFocus: 'Industrial Labour Welfare, CSR Policy & Clinical Community Health',
    email: 'hod.msw@skasc.ac.in',
    officeLocation: 'Academic Block B, Ground Floor · Room B-104',
    consultationHours: 'Mon – Sat · 10:30 – 12:30',
    photoUrl: '/src/assets/images/skcas_hod_sciences_1794811935512.jpg',
    photoAlt: 'Portrait of Dr. A. Alagarsamy, Head of Department of Social Work',
  },
  {
    id: 'hod-psychology',
    department: 'Department of Psychology',
    stream: 'Sciences & Humanities',
    name: 'Dr. K. Lethika',
    designation: 'Associate Professor & Head of Department',
    qualifications: 'M.Sc., M.Phil., Ph.D.',
    experience: '14 Years Clinical & Academic Practice',
    researchFocus: 'Cognitive Assessment, Adolescent Wellbeing & Organizational Behaviour',
    email: 'hod.psychology@skasc.ac.in',
    officeLocation: 'Academic Block B, Level 1 · Counselling Lab',
    consultationHours: 'Mon – Fri · 14:00 – 16:00',
    photoUrl: '/src/assets/images/skcas_hod_management_1794811935745.jpg',
    photoAlt: 'Portrait of Dr. K. Lethika, Head of Department of Psychology',
  },
];

export function findHodForDepartment(departmentName: string): DepartmentHead {
  const exact = DEPARTMENT_HODS.find((h) => h.department === departmentName);
  if (exact) return exact;
  if (departmentName.toLowerCase().includes('commerce')) {
    return DEPARTMENT_HODS.find((h) => h.id === 'hod-comm-dean') ?? DEPARTMENT_HODS[0];
  }
  return DEPARTMENT_HODS[0];
}

export const CAMPUS_GALLERY_PHOTOS: CampusPhotoItem[] = [
  {
    id: 'food-court',
    figLabel: 'Fig. 1',
    title: 'Central Food Court & Tiffin Pavilion',
    category: 'Student Commons',
    location: 'Central Courtyard, Near Block B',
    hours: '07:30 – 18:30',
    description:
      'Sunlit glass-walled dining pavilion serving hygienic South Indian tiffins, meals, fresh juices, and coffee with spacious oak seating.',
    imageUrl: '/src/assets/images/skcas_food_court_1794812181427.jpg',
    imageAlt: 'College students dining at oak tables inside the sunlit Sri Krishna College food court and tiffin pavilion',
  },
  {
    id: 'campus-parking',
    figLabel: 'Fig. 2',
    title: 'Solar-Shaded Student Parking & Bus Bay',
    category: 'Transport & Grounds',
    location: 'North Gate Concourse, Kuniyamuthur',
    hours: '06:30 – 20:30',
    description:
      'Dedicated two-wheeler and car parking bays under solar-panel shade canopies, integrated with the 45+ route college bus boarding concourse.',
    imageUrl: '/src/assets/images/skcas_campus_parking_1794812181148.jpg',
    imageAlt: 'Organized campus two-wheeler and car parking bays under solar canopies next to a college bus concourse',
  },
  {
    id: 'biotech-lab',
    figLabel: 'Fig. 3',
    title: 'Biotechnology & Life Sciences Laboratory',
    category: 'Academic & Labs',
    location: 'Academic Block B, Level 2',
    hours: '08:30 – 17:30',
    description:
      'Equipped with compound microscopes, biosafety laminar hoods, spectrophotometers, and PCR instruments for UG and PG wet-lab practicums.',
    imageUrl: '/src/assets/images/skcas_biotech_lab_1794812181282.jpg',
    imageAlt: 'Students in lab coats working with microscopes and analytical instruments in the SKCAS Biotechnology Laboratory',
  },
  {
    id: 'computing-lab',
    figLabel: 'Fig. 4',
    title: 'Data Analytics & Computing Laboratory',
    category: 'Academic & Labs',
    location: 'Academic Block C, Levels 2 & 3',
    hours: '08:30 – 18:30',
    description:
      'Dual-monitor engineering workstations powered by IBM blade servers and a glass-walled Agile Collaboration Studio for capstone projects.',
    imageUrl: '/src/assets/images/skcas_computing_lab_1794810243663.jpg',
    imageAlt: 'Computer science students working at dual-monitor workstations and glass seminar studio in Block C',
  },
  {
    id: 'auditorium',
    figLabel: 'Fig. 5',
    title: 'Sri Krishna Convention Auditorium',
    category: 'Academic & Labs',
    location: 'Central Academic Wing, Level 1',
    hours: 'Events & Symposia',
    description:
      'Acoustic oak-paneled convention hall hosting international conferences, placement pre-talks, graduation convocations, and guest lectures.',
    imageUrl: '/src/assets/images/skcas_auditorium_hall_1794812181491.jpg',
    imageAlt: 'Tiered oak acoustic convention auditorium during an academic lecture at Sri Krishna College',
  },
  {
    id: 'digital-library',
    figLabel: 'Fig. 6',
    title: 'Central Digital Knowledge Centre',
    category: 'Academic & Labs',
    location: 'Main Quadrangle, Ground Floor',
    hours: '08:00 – 19:30',
    description:
      'Air-conditioned reading hall housing 92,400+ volumes, RFID self-checkout terminals, and IEEE / INFLIBNET digital research archives.',
    imageUrl: '/src/assets/images/skcas_digital_library_1794810243802.jpg',
    imageAlt: 'Students studying at oak reading tables inside the sunlit Central Digital Knowledge Centre',
  },
  {
    id: 'amphitheatre',
    figLabel: 'Fig. 7',
    title: 'Open-Air Sandstone Amphitheatre',
    category: 'Student Commons',
    location: 'South Botanical Courtyard',
    hours: 'Open Access',
    description:
      'Shaded sandstone amphitheatre steps and tropical gardens serving as an informal study terrace, debate forum, and cultural gathering space.',
    imageUrl: '/src/assets/images/skcas_campus_quad_1794810245343.jpg',
    imageAlt: 'Students discussing coursework on sandstone amphitheatre steps surrounded by campus greenery',
  },
  {
    id: 'quadrangle',
    figLabel: 'Fig. 8',
    title: 'Main Academic Quadrangle & Clock Tower',
    category: 'Transport & Grounds',
    location: 'Sugunapuram Main Avenue',
    hours: '07:00 – 19:00',
    description:
      'Swachh Rank #1 green campus walkways linking the Administrative Clock Tower, Commerce Schools, and landscaped neem avenues.',
    imageUrl: '/src/assets/images/skcas_campus_hero_1794810243502.jpg',
    imageAlt: 'Main academic quadrangle and sandstone clock tower building surrounded by green lawns',
  },
];
