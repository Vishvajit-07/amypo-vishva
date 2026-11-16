import {useEffect, useMemo, useState} from 'react';
import {ChevronLeft, ChevronRight, Expand, X} from 'lucide-react';
import {
  CAMPUS_GALLERY_PHOTOS,
  CampusPhotoCategory,
  CampusPhotoItem,
} from '../data/collegeData';
import {ResilientImage} from './ResilientImage';

const GALLERY_CATEGORIES: Array<'All Views' | CampusPhotoCategory> = [
  'All Views',
  'Student Commons',
  'Academic & Labs',
  'Transport & Grounds',
];

export function CampusGallery() {
  const [selectedCategory, setSelectedCategory] = useState<
    'All Views' | CampusPhotoCategory
  >('All Views');
  const [lightboxItem, setLightboxItem] = useState<CampusPhotoItem | null>(null);

  const visiblePhotos = useMemo(() => {
    if (selectedCategory === 'All Views') return CAMPUS_GALLERY_PHOTOS;
    return CAMPUS_GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const activeIndex = lightboxItem
    ? visiblePhotos.findIndex((p) => p.id === lightboxItem.id)
    : -1;

  const goPrev = () => {
    if (visiblePhotos.length === 0 || activeIndex === -1) return;
    const prevIdx = (activeIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
    setLightboxItem(visiblePhotos[prevIdx]);
  };

  const goNext = () => {
    if (visiblePhotos.length === 0 || activeIndex === -1) return;
    const nextIdx = (activeIndex + 1) % visiblePhotos.length;
    setLightboxItem(visiblePhotos[nextIdx]);
  };

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxItem(null);
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, activeIndex, visiblePhotos]);

  return (
    <section
      id="campus-gallery"
      className="py-16 lg:py-20 bg-[#F3F5F8] border-b border-[#DCE2EC]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#DCE2EC]">
          <div>
            <p className="text-xs font-medium text-[#64748B] mb-2">
              Campus Photography · Kuniyamuthur Precinct
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F172A] text-balance">
              Inside Sri Krishna Campus
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
            Explore real campus spaces across Sugunapuram—from the sunlit Central Food
            Court and solar-shaded student parking bays to Biotechnology wet labs,
            Computing studios, and the Convention Auditorium.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter campus photographs"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-white rounded-lg border border-[#DCE2EC] w-fit"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                    active
                      ? 'bg-[#0B1528] text-white'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-[#64748B] font-mono tabular-nums">
            Showing {visiblePhotos.length} campus photographs · Click any view to enlarge
          </p>
        </div>

        {/* Asymmetric Editorial Photo Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => {
            const isFeaturedLead =
              selectedCategory === 'All Views' && index === 0;
            return (
              <article
                key={photo.id}
                className={`group bg-white border border-[#DCE2EC] rounded-lg overflow-hidden flex flex-col ${
                  isFeaturedLead ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxItem(photo)}
                  className={`relative w-full overflow-hidden bg-[#E8ECF2] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                    isFeaturedLead ? 'aspect-[16/9] lg:aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                >
                  <ResilientImage
                    src={photo.imageUrl}
                    alt={photo.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    fallbackTitle={photo.title}
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#0B1528]/85 text-white text-xs font-medium opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150">
                    <Expand className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </span>
                </button>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] font-mono tabular-nums">
                      <span>{photo.figLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans text-[#1E3A8A] font-medium">
                        {photo.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans">{photo.hours}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#0F172A] leading-snug">
                      {photo.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                      {photo.description}
                    </p>
                  </div>

                  <p className="mt-4 pt-3 border-t border-[#DCE2EC] text-xs text-[#64748B]">
                    Location: <span className="text-[#0F172A] font-medium">{photo.location}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Photo Viewer */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1528]/85"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="w-full max-w-4xl bg-white border border-[#DCE2EC] rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[#DCE2EC] bg-[#F8FAFC]">
              <div className="min-w-0">
                <p className="text-xs font-mono text-[#64748B] tabular-nums">
                  {lightboxItem.figLabel} · {lightboxItem.category} · {lightboxItem.location}
                </p>
                <h3
                  id="lightbox-title"
                  className="font-serif text-xl sm:text-2xl font-semibold text-[#0F172A] truncate"
                >
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Close photo viewer"
                className="inline-flex items-center justify-center w-10 h-10 text-[#475569] hover:text-[#0F172A] hover:bg-[#E8ECF2] rounded-md cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#0B1528] aspect-[16/10] max-h-[68vh] w-full">
              <ResilientImage
                src={lightboxItem.imageUrl}
                alt={lightboxItem.imageAlt}
                className="w-full h-full object-contain"
                fallbackTitle={lightboxItem.title}
              />

              {visiblePhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous campus photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#0B1528]/80 hover:bg-[#0B1528] text-white border border-white/20 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next campus photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#0B1528]/80 hover:bg-[#0B1528] text-white border border-white/20 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-white border-t border-[#DCE2EC]">
              <p className="text-sm text-[#475569]">{lightboxItem.description}</p>
              <span className="font-mono text-xs text-[#64748B] tabular-nums shrink-0">
                {activeIndex + 1} / {visiblePhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
