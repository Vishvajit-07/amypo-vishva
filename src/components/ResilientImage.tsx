import {useState} from 'react';
import {Landmark} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Sri Krishna College of Arts and Science',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F2F4F7] via-[#E8ECF2] to-[#DCE3EE] text-[#1E3A8A] p-8 text-center ${className}`}
      >
        <Landmark className="w-8 h-8 mb-3 opacity-80" strokeWidth={1.5} />
        <p className="font-serif text-lg font-semibold text-[#0F172A]">
          {fallbackTitle}
        </p>
        <p className="text-xs text-[#475569] mt-1 max-w-xs">
          Kuniyamuthur Campus · Coimbatore
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
