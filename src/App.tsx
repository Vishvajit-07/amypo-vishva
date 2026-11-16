import {useState} from 'react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {CampusGallery} from './components/CampusGallery';
import {AcademicsExplorer} from './components/AcademicsExplorer';
import {LeadershipDirectory} from './components/LeadershipDirectory';
import {GovernanceAndResearch} from './components/GovernanceAndResearch';
import {PlacementsSection} from './components/PlacementsSection';
import {CampusFacilities} from './components/CampusFacilities';
import {AdmissionsSection} from './components/AdmissionsSection';
import {Footer} from './components/Footer';

export default function App() {
  const [preselectedProgramme, setPreselectedProgramme] = useState('');

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleApplyForProgramme = (programmeTitle: string) => {
    setPreselectedProgramme(programmeTitle);
    scrollToSection('admissions');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F5F8] text-[#0F172A]">
      <Navbar onApplyClick={() => scrollToSection('admissions')} />

      <main className="flex-1">
        <HeroSection
          onExploreClick={() => scrollToSection('academics')}
          onAdmissionsClick={() => scrollToSection('admissions')}
        />
        <CampusGallery />
        <AcademicsExplorer onApplyForProgramme={handleApplyForProgramme} />
        <LeadershipDirectory />
        <GovernanceAndResearch />
        <PlacementsSection />
        <CampusFacilities />
        <AdmissionsSection preselectedProgramme={preselectedProgramme} />
      </main>

      <Footer />
    </div>
  );
}
