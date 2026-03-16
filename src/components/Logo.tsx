import { cn } from '@/lib/utils';
import logoPng from '@/assets/images/Logo-3.webp';

type LogoProps = {
  showWordmark?: boolean;
  className?: string;
  variant?: 'white' | 'dark';
};

export function Logo({ showWordmark = false, className, variant = 'white' }: LogoProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={cn('flex items-center gap-3 group', className)}>
      <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        {/* Glow effect based on variant */}
        <div className={cn(
          "absolute inset-0 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          isDark ? "bg-black/10" : "bg-white/10"
        )} />
        <img 
          src={logoPng} 
          alt="Geometric Logo" 
          width={44}
          height={44}
          className={cn(
            "relative h-9 md:h-11 w-auto object-contain transition-all duration-500",
            isDark ? "brightness-0" : "brightness-0 invert",
            isDark 
              ? "drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.2)]"
              : "drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
          )}
        />
      </div>
      {showWordmark && (
        <span className={cn(
          "font-ibm text-2xl font-light tracking-wide transition-colors duration-500",
          isDark ? "text-background group-hover:text-black" : "text-creamy-white group-hover:text-neon-yellow"
        )}>
          Geometric
        </span>
      )}
    </div>
  );
}

