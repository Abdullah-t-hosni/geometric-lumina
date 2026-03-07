import { cn } from '@/lib/utils';
import logoPng from '@/assets/images/Logo-2.png';

type LogoProps = {
  showWordmark?: boolean;
  className?: string;
};

export function Logo({ showWordmark = true, className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-1.5 shadow-[0_0_15px_rgba(204,255,0,0.1)] glow-yellow group">
        <img 
          src={logoPng} 
          alt="Geometric Logo" 
          className="h-9 w-auto object-contain brightness-110 group-hover:brightness-125 transition-all duration-300"
        />
      </div>
      {showWordmark && (
        <span className="font-satoshi text-2xl font-light tracking-tight text-white uppercase group-hover:text-neon-yellow transition-colors duration-300">
          Geometric
        </span>
      )}
    </div>
  );
}

