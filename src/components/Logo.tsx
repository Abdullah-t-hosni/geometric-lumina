import { cn } from '@/lib/utils';
import logoPng from '@/assets/images/Logo-3.webp';

type LogoProps = {
  showWordmark?: boolean;
  className?: string;
};

export function Logo({ showWordmark = false, className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3 group', className)}>
      <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        {/* Optional subtle glow behind the logo instead of a harsh border */}
        <div className="absolute inset-0 bg-neon-yellow/10 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img 
          src={logoPng} 
          alt="Geometric Logo" 
          className="relative h-12 md:h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all duration-500"
        />
      </div>
      {showWordmark && (
        <span className="font-ibm text-2xl font-light tracking-wide text-creamy-white group-hover:text-neon-yellow transition-colors duration-500">
          Geometric
        </span>
      )}
    </div>
  );
}

