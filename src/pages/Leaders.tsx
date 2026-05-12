import React from 'react';
import { GLOBAL_LEADERS } from '../constants';
import { Trophy, Award, Medal, TrendingUp, ChevronDown } from 'lucide-react';

export default function Leaders() {
  const topThree = GLOBAL_LEADERS.slice(0, 3);
  const others = GLOBAL_LEADERS.slice(3);

  return (
    <div className="flex flex-col gap-24 py-16">
      {/* Header Area */}
      <section className="flex flex-col md:flex-row justify-between items-baseline gap-12 border-b border-soft pb-12">
        <div className="flex flex-col gap-4">
          <div className="label-tracking text-primary">Prestige Index • Rankings</div>
          <h1 className="massive-text serif font-black tracking-tighter">ELITE<br /><span className="italic">MERIT.</span></h1>
        </div>

        <div className="flex flex-col gap-4 md:text-right md:items-end">
          <p className="font-light text-on-surface-variant max-w-xs leading-relaxed italic">
            Documentation of the most efficient combatants within the active arena circuit. Rankings are computed based on tournament yields and cumulative combat effectiveness.
          </p>
          <div className="flex gap-1 border-t border-soft pt-4 mt-4">
            {['Weekly', 'Monthly', 'Historic'].map((period) => (
              <button 
                key={period}
                className={`px-6 py-2 label-tracking transition-all ${period === 'Historic' ? 'text-primary border border-primary' : 'opacity-40 hover:opacity-100'}`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Podium */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
        {/* Rank 2 */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="label-tracking opacity-30">Secondary Status</div>
          <div className="aspect-[3/4] border border-soft p-1 grayscale group hover:grayscale-0 transition-all duration-700">
            <div className="w-full h-full bg-surface-container overflow-hidden relative">
              <img src={topThree[1].avatar} alt={topThree[1].name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100" />
              <div className="absolute top-0 left-0 p-6 serif text-7xl font-black italic opacity-10">02</div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-2">
            <h3 className="serif text-2xl">{topThree[1].name}</h3>
            <span className="label-tracking text-primary">14.2K Yield</span>
          </div>
        </div>

        {/* Rank 1 */}
        <div className="flex flex-col gap-8 order-1 md:order-2 transform md:scale-110">
          <div className="label-tracking text-primary flex items-center gap-4">
            <div className="w-8 h-[1px] bg-primary"></div>
            Primary Command
          </div>
          <div className="aspect-[3/4] border border-primary p-2 group overflow-hidden">
            <div className="w-full h-full bg-surface-container overflow-hidden relative border border-primary/20">
              <img src={topThree[0].avatar} alt={topThree[0].name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute top-0 left-0 p-8 serif text-9xl font-black italic text-primary opacity-20">01</div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center text-center">
            <h3 className="serif text-4xl">{topThree[0].name}</h3>
            <span className="label-tracking text-primary text-sm font-black">18.9K Yield • Undefeated</span>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="flex flex-col gap-6 order-3">
          <div className="label-tracking opacity-30">Tertiary Status</div>
          <div className="aspect-[3/4] border border-soft p-1 grayscale group hover:grayscale-0 transition-all duration-700">
            <div className="w-full h-full bg-surface-container overflow-hidden relative">
              <img src={topThree[2].avatar} alt={topThree[2].name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100" />
              <div className="absolute top-0 left-0 p-6 serif text-7xl font-black italic opacity-10">03</div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-2">
            <h3 className="serif text-2xl">{topThree[2].name}</h3>
            <span className="label-tracking text-primary">12.1K Yield</span>
          </div>
        </div>
      </section>

      {/* Catalog Rankings */}
      <section className="flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <h2 className="serif text-3xl italic">Archive</h2>
          <div className="flex-grow h-[1px] bg-soft"></div>
        </div>
        
        <div className="border border-soft divide-y divide-soft">
          {others.map((p) => (
            <div key={p.id} className="flex flex-col md:flex-row md:items-center justify-between p-8 hover:bg-surface transition-all gap-6">
              <div className="flex items-center gap-10">
                <span className="serif text-3xl opacity-20 w-12">0{p.rank}</span>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border border-soft p-1 shrink-0 overflow-hidden">
                    <img src={p.avatar} alt={p.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="flex flex-col">
                    <span className="serif text-2xl tracking-tight">{p.name}</span>
                    <span className="label-tracking opacity-30">Status: Active Service</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between md:justify-end md:gap-16 items-center">
                <div className="flex flex-col md:items-end">
                  <span className="label-tracking opacity-20">Campaigns</span>
                  <span className="serif text-xl italic">148</span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="label-tracking opacity-20">Yield Index</span>
                  <span className="serif text-2xl italic text-primary">{p.winnings.toFixed(2)} {p.winningsCurrency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
