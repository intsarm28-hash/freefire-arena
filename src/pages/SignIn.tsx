import React from 'react';
import { Swords, Mail, Lock, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-container/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary-container/10 blur-[110px] pointer-events-none" />
      
      {/* Grid Pattern BG */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Auth Card */}
      <main className="w-full max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row bg-surface-container/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden min-h-[650px]">
          {/* Left Side: Brand Visual */}
          <div className="hidden md:flex w-1/2 relative flex-col justify-end p-12 bg-surface-container-lowest overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
              style={{ 
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQ7q-CMcxD1mW7rTTwyS_eBaUGfSUqRON2ng5De_Heg6q_LXQg2iKYu-Gtc3fWLfyrgzEgm5gR3T0nbI2U7VvX89vZ_qYLA6Q7cD9ftQW6Luor6xUWjOwJukoXt4vuz2na0qQQEGM1uX3dk82pssayC-NpAkgqhNvrTwOMol7bkTlw-CdhhTgKzbme6TLDSOiZ1btyi9Pu3nSYft0BN--KH6kxeQLRXhvB0H8ll68nBfs5OYzssvRoDyZf4-zk2OLZwDPCUAVMBxA')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Swords className="text-primary-container" size={40} fill="currentColor" />
                <span className="font-display text-3xl text-white tracking-tight">Arena Battles</span>
              </div>
              <h1 className="font-display text-5xl text-on-surface leading-tight">Join the Arena</h1>
              <p className="font-sans text-lg text-on-surface-variant max-w-sm leading-relaxed">
                Access your combat record, manage your loadouts, and step back into the competitive circuit.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2 p-8 sm:p-14 flex flex-col justify-center bg-surface/40">
            <div className="mb-10">
              <h2 className="font-display text-4xl text-on-surface mb-3">Sign In</h2>
              <p className="font-sans text-on-surface-variant">Welcome back, contender.</p>
            </div>

            {/* Google Sign In */}
            <button className="w-full bg-white hover:bg-white/90 text-gray-900 font-label text-[10px] uppercase tracking-widest py-4.5 px-6 rounded-xl flex items-center justify-center gap-4 transition-all duration-300 shadow-sm mb-8 group">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/10" />
              <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Or sign in with email</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest ml-1" htmlFor="email">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors" size={20} />
                  <input 
                    type="email" 
                    id="email"
                    placeholder="contender@example.com"
                    className="w-full bg-surface-container-lowest border border-white/5 text-on-surface placeholder:text-on-surface-variant/40 rounded-xl py-4 pl-14 pr-4 focus:outline-none focus:border-primary-container/50 focus:ring-1 focus:ring-primary-container/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest" htmlFor="password">Password</label>
                  <button type="button" className="font-label text-[10px] text-primary-container uppercase tracking-widest hover:text-white transition-colors">Forgot?</button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors" size={20} />
                  <input 
                    type="password" 
                    id="password"
                    placeholder="••••••••"
                    className="w-full bg-surface-container-lowest border border-white/5 text-on-surface placeholder:text-on-surface-variant/40 rounded-xl py-4 pl-14 pr-4 focus:outline-none focus:border-primary-container/50 focus:ring-1 focus:ring-primary-container/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="pt-4">
                <NavLink 
                  to="/" 
                  className="w-full bg-primary-container text-on-primary-container font-label text-[10px] uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                >
                  Sign In
                  <ArrowRight size={20} />
                </NavLink>
              </div>
            </form>

            <div className="mt-12 text-center">
              <p className="font-sans text-sm text-on-surface-variant">
                Don't have an account? 
                <button className="text-primary-container hover:text-white font-bold transition-all ml-2 border-b border-primary-container/20 hover:border-white">Create one now</button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
