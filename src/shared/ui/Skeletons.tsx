import { cn } from "@/shared/lib/utils";

// 🚀 Professional Shimmer System - GPU Optimized
const Shimmer = () => (
  <div 
    className="absolute inset-0 shimmer-overlay pointer-events-none will-change-transform" 
    aria-hidden="true" 
    style={{ transform: "translateZ(0)" }}
  />
);

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circle" | "card";
}

// ⚡ Optimized Skeleton Component
export const Skeleton = ({ className, variant = "text" }: SkeletonProps) => {
  const base = "skeleton-base relative overflow-hidden";
  
  const variants = {
    text: "h-4 w-full",
    circle: "rounded-full aspect-square",
    card: "rounded-xl",
  };

  return (
    <div 
      className={cn(base, variants[variant], className)}
      aria-hidden="true"
      style={{ transform: "translateZ(0)" }}
    >
      <Shimmer />
    </div>
  );
};

// 🦾 Generic Pulse Container
export const PulseContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("skeleton-pulse", className)}>
    {children}
  </div>
);

const HDD_ITEMS = [1, 2, 3];

export const ProjectCardSkeleton = () => (
  <div 
    className="bg-background/80 border border-white/5 p-2 rounded-[32px] aspect-[16/10] sm:aspect-[4/3] relative overflow-hidden group"
    role="status"
    aria-live="polite"
  >
    <div className="w-full h-full rounded-[24px] bg-white/[0.02] relative p-6 md:p-10 flex flex-col justify-end">
      {/* HUD Header */}
      <div className="absolute top-8 left-8 flex gap-4">
        <Skeleton className="w-16 h-2" />
        <Skeleton className="w-24 h-2 opacity-50" />
      </div>
      
      {/* Tags */}
      <div className="flex gap-2 mb-6">
        <Skeleton className="w-16 h-5 rounded-full" />
        <Skeleton className="w-20 h-5 rounded-full" />
      </div>

      {/* Title */}
      <div className="space-y-3">
        <Skeleton className="w-24 h-2" />
        <Skeleton className="w-3/4 h-10" />
      </div>

      {/* Sidebar HUD */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col gap-6">
        {HDD_ITEMS.map(i => (
          <div key={i} className="flex flex-col items-end gap-1">
             <Skeleton className="w-8 h-1" />
             <Skeleton className="w-1 h-12" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ServiceCardSkeleton = () => (
    <div 
      className="rounded-[32px] border border-white/5 bg-background/80 h-[350px] relative overflow-hidden p-8 md:p-10 flex flex-col"
      role="status"
      aria-live="polite"
    >
       <div className="flex justify-between items-start mb-8">
          <div className="space-y-2">
            <Skeleton className="w-24 h-6 rounded-full" />
            <Skeleton className="w-1 h-1" />
          </div>
          <Skeleton className="w-12 h-12 rounded-full" />
       </div>

       <div className="mt-auto space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="w-2 h-2 rounded-full" />
            <Skeleton className="w-20 h-2" />
          </div>
          <Skeleton className="w-3/4 h-8" />
          <Skeleton className="w-full h-12" />
          <div className="flex items-center gap-4 pt-4">
             <Skeleton className="w-12 h-[1px]" />
             <Skeleton className="w-24 h-2" />
          </div>
       </div>
    </div>
);

export const ServiceDetailSkeleton = () => (
    <div 
      className="bg-background min-h-screen" 
      role="status" 
      aria-live="polite"
      aria-busy="true"
    >
      <div className="h-screen w-full relative flex items-center justify-center">
        <Skeleton className="absolute inset-0 rounded-none opacity-20" variant="card" />
        <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center gap-8">
           <Skeleton className="w-48 h-10 rounded-full" />
           <Skeleton className="w-2/3 h-24" />
           <Skeleton className="w-1/2 h-6" />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
           <Skeleton className="w-full h-12" />
           <Skeleton className="w-full h-40" />
           <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
           </div>
        </div>
        <div className="lg:col-span-5">
           <Skeleton className="h-[400px] rounded-[40px] shadow-2xl" />
        </div>
      </div>
    </div>
);
