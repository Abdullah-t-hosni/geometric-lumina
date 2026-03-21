import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function RootLayout({ children }: { children?: React.ReactNode }) {

  return (
    <div className="min-h-dvh bg-background flex flex-col font-ibm selection:bg-neon-yellow selection:text-background relative">
      {/* Global Background Noise Texture */}
      <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none z-0" />
      
      <Header />
      <main className="flex-1 relative min-h-screen flex flex-col">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}