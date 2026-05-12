import React from 'react';
import { TOURNAMENTS, TOP_PLAYERS } from '../constants';
import { Clock, Users, Trophy, ChevronRight, Filter, MessageCircle, Wallet as WalletIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-16">
      {/* Editorial Hero Section */}
      <section className="flex flex-col gap-12 border-b border-soft pb-20">
        <div className="flex flex-col gap-6">
          <div className="label-tracking text-primary opacity-80">Featured Circuit • Season 04</div>
          <h1 className="massive-text serif font-black">
            ARENA <br />
            BATTLES<span className="italic font-light">.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="w-full h-0.5 bg-primary mt-4"></div>
          <p className="text-xl leading-relaxed font-light text-on-surface-variant max-w-lg">
            A refined competitive hub for high-stakes digital engagement. We curate elite tournaments where precision meets prestige. Battle for dominance in an environment designed for the modern competitor.
          </p>
        </div>
      </section>

      {/* Stats Monograph Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 border border-soft divide-x md:divide-y-0 divide-soft">
        {[
          { label: 'Cumulative Index', value: '1,204' },
          { label: 'Active Circuits', value: '12' },
          { label: 'Live Deployments', value: '03', isLive: true },
          { label: 'Enlisted Personnel', value: '8,492' },
        ].map((stat, i) => (
          <div key={i} className="p-10 flex flex-col gap-3 relative overflow-hidden group hover:bg-surface transition-colors">
            {stat.isLive && (
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-error animate-pulse" />
                <span className="label-tracking text-error">Current</span>
              </div>
            )}
            <span className="label-tracking opacity-40">{stat.label}</span>
            <span className="serif text-4xl leading-none">
              {stat.value}
            </span>
          </div>
        ))}
      </section>

      {/* Tournament Catalog */}
      <section className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
          <h2 className="serif text-4xl italic">Active Circuits</h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-soft"></div>
            <button className="label-tracking opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
              Discovery <Filter size={12} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border-t border-soft pt-1">
          {TOURNAMENTS.map((t) => (
            <div key={t.id} className="group relative border border-soft p-1 hover:border-primary transition-all duration-500 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 p-6 bg-surface selection:bg-primary/20">
                <div className="w-full md:w-48 aspect-square relative overflow-hidden border border-soft shrink-0">
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 label-tracking text-[8px]">{t.status}</div>
                </div>

                <div className="flex flex-col flex-grow justify-between py-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <span className="label-tracking opacity-40">{t.mode}</span>
                      <span className="serif italic text-primary">{t.timeLabel}</span>
                    </div>
                    <h3 className="serif text-3xl group-hover:text-primary transition-colors cursor-pointer">{t.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-8 border-t border-soft pt-6 mt-8">
                    <div>
                      <div className="label-tracking opacity-30 mb-2">Entry</div>
                      <div className="font-sans font-bold">{t.entryFee} {t.entryFeeCurrency}</div>
                    </div>
                    <div>
                      <div className="label-tracking opacity-30 mb-2">Prize Pool</div>
                      <div className="font-sans font-bold text-primary">{t.prizePool} {t.prizePoolCurrency}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                   <a 
                    href="https://wa.me/923214473394"
                    className="w-12 h-12 border border-soft flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all group/btn"
                  >
                    <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment & Ledger Snippet */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-soft border-y border-soft">
        <div className="bg-background p-12 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="label-tracking text-primary">Protocol</span>
            <div className="flex-grow h-[1px] bg-soft"></div>
          </div>
          <h2 className="serif text-4xl italic">Enrollment Ledger</h2>
          <p className="font-light leading-relaxed text-on-surface-variant">
            To secure your position within the upcoming circuit, direct the specified enrollment fee to our central ledger. Documentation of transaction is mandatory for validation.
          </p>
          <div className="border border-soft p-12 flex flex-col items-center justify-center gap-2 text-center bg-surface relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 label-tracking opacity-10 font-black text-4xl">JZC</div>
            <span className="label-tracking opacity-40">Official JazzCash Address</span>
            <span className="serif text-5xl text-primary my-4 tracking-tighter">0321 4473394</span>
            <span className="label-tracking text-[12px]">Title: Arena Battles Pk</span>
          </div>
        </div>

        <div className="bg-background p-12 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="label-tracking text-primary">Leaderboard</span>
            <div className="flex-grow h-[1px] bg-soft"></div>
          </div>
          <h2 className="serif text-4xl italic">Elite Merit</h2>
          
          <div className="flex flex-col gap-1">
            {TOP_PLAYERS.map((p) => (
              <div key={p.id} className="flex justify-between items-center py-5 border-b border-soft hover:px-2 transition-all group">
                <div className="flex items-center gap-6">
                  <span className="serif italic text-2xl opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all">0{p.rank}</span>
                  <span className="font-sans font-medium tracking-tight text-lg">{p.name}</span>
                </div>
                <span className="label-tracking opacity-40 group-hover:opacity-100">{p.winnings.toLocaleString()} {p.winningsCurrency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Component (Modified for Editorial) */}
      <a 
        href="https://wa.me/923214473394"
        className="fixed bottom-12 right-12 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-40 group"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
