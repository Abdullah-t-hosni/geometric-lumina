import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 relative overflow-hidden">
      {/* Premium Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-yellow/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-deep-teal/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

      <div className="text-center max-w-2xl w-full glass-panel p-16 md:p-24 rounded-[3rem] relative z-10 group overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-yellow/10 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <h1 className="mb-6 text-[100px] md:text-[160px] font-light font-satoshi leading-none tracking-tight text-creamy-white drop-shadow-md">
          <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-creamy-white">404</span>
        </h1>
        
        <div className="h-[1px] w-24 bg-neon-yellow/50 mx-auto mb-10 shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
        
        <p className="mb-12 text-xl font-ibm text-creamy-white/70 font-light leading-relaxed">
          The reality you are seeking has eluded us. <br/> 
          <span className="italic mt-2 block">Let's find our way back.</span>
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-12 py-5 bg-neon-yellow text-background rounded-full font-satoshi font-bold text-sm tracking-[0.2em] uppercase hover:bg-white glow-yellow hover:scale-105 transition-all duration-300"
        >
          Return to Base
        </a>
      </div>
    </div>
  );
};

export default NotFound;
