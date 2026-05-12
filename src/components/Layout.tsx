import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Bell, Wallet, Home, Trophy, BarChart2, User, WalletCards } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isSignIn = location.pathname === '/signin';

  if (isSignIn) return <>{children}</>;

  const navItems = [
    { name: 'Index', path: '/', icon: <Home size={18} /> },
    { name: 'Circuit', path: '/tournaments', icon: <Trophy size={18} /> },
    { name: 'Rankings', path: '/leaders', icon: <BarChart2 size={18} /> },
    { name: 'Ledger', path: '/wallet', icon: <WalletCards size={18} /> },
    { name: 'Profile', path: '/profile', icon: <User size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-24 md:pb-0 selection:bg-primary selection:text-on-primary">
      {/* Editorial Header */}
      <header className="bg-background sticky top-0 w-full z-50 border-b border-soft h-20 flex justify-between items-center px-6 md:px-12">
        <div className="hidden md:block label-tracking opacity-50">Issue No. 001</div>
        
        <div className="flex items-center gap-4">
          <span className="serif text-2xl md:text-3xl italic tracking-tighter">
            Arena Battles
          </span>
        </div>

        <div className="hidden md:block label-tracking opacity-50">Circuit / 26</div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 border-l border-soft pl-6 h-10">
            <span className="label-tracking opacity-70">Balance</span>
            <span className="font-sans font-bold text-sm">0.25 ETH</span>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <Bell size={18} />
          </button>
        </div>
      </header>

      {/* Desktop Side Navigation Framework */}
      <nav className="hidden md:flex justify-center items-center gap-12 border-b border-soft h-12 bg-surface">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "label-tracking transition-all duration-300 relative py-2",
                isActive ? "text-primary border-b-2 border-primary" : "text-on-surface-variant hover:text-on-surface"
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden bg-background/95 backdrop-blur-xl fixed bottom-0 w-full z-50 border-t border-soft flex justify-around items-center px-4 py-3 pb-safe">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center transition-colors",
                isActive ? "text-primary" : "text-on-surface-variant opacity-50"
              )
            }
          >
            {item.icon}
            <span className="label-tracking text-[8px] mt-1">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
