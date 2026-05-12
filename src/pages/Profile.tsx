import React from 'react';
import { CURRENT_USER } from '../constants';
import { Shield, Medal, Award, Activity, Flame, ChevronRight, Share2, Edit2, LogOut, Swords } from 'lucide-react';

export default function Profile() {
  return (
    <div className="flex flex-col gap-20 py-16 selection:bg-primary/30">
      {/* Editorial Profile Header */}
      <section className="relative border border-soft p-12 bg-surface overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 label-tracking opacity-10 text-6xl italic serif font-black">USER.001</div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-soft to-transparent"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-end gap-12">
          <div className="w-48 h-64 border border-soft p-1 shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700">
            <div className="w-full h-full bg-surface-container overflow-hidden relative border border-soft">
              <img 
                src={CURRENT_USER.avatar} 
                alt={CURRENT_USER.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              {CURRENT_USER.verified && (
                <div className="absolute top-4 right-4">
                  <Shield size={16} className="text-primary" />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-grow">
            <div className="flex flex-col gap-2">
              <div className="label-tracking text-primary">Personnel File • Verified</div>
              <h1 className="massive-text serif font-black leading-none">{CURRENT_USER.name}</h1>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="border border-soft px-6 py-2 flex items-center gap-3 bg-background">
                <span className="label-tracking opacity-40">Class</span>
                <span className="serif italic text-lg">{CURRENT_USER.rank}</span>
              </div>
              <div className="border border-soft px-6 py-2 flex items-center gap-3 bg-background">
                <span className="label-tracking opacity-40">Registry</span>
                <span className="serif italic text-lg">#88492A</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <button className="border border-soft hover:border-primary px-8 py-3 label-tracking transition-all flex items-center gap-3 bg-background">
              <Share2 size={14} /> Circulate
            </button>
            <button className="bg-primary text-on-primary px-8 py-3 label-tracking transition-all flex items-center gap-3 hover:bg-on-surface hover:text-background">
              <Edit2 size={14} /> Configure
            </button>
          </div>
        </div>
      </section>

      {/* Combat Analytics Grid */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <h2 className="serif text-3xl italic">Combat Analytics</h2>
          <div className="flex-grow h-[1px] bg-soft"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 border border-soft divide-x divide-soft">
          {[
            { label: 'Circuits', value: CURRENT_USER.tournaments, icon: <Medal size={14} /> },
            { label: 'Victories', value: CURRENT_USER.totalWins, icon: <Award size={14} />, highlight: true },
            { label: 'Efficiency', value: `${CURRENT_USER.winRate}%`, icon: <Activity size={14} /> },
            { label: 'Momentum', value: CURRENT_USER.winStreak, icon: <Flame size={14} /> },
          ].map((stat, i) => (
            <div key={i} className="p-10 flex flex-col gap-4 hover:bg-surface transition-colors cursor-default group">
              <div className="flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                {stat.icon}
                <span className="label-tracking">{stat.label}</span>
              </div>
              <div className={`serif text-5xl ${stat.highlight ? 'text-primary' : 'text-on-surface'}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Circuits Section */}
      <section className="flex flex-col gap-10">
        <div className="flex justify-between items-baseline px-2">
          <h2 className="serif text-3xl italic">Engagement History</h2>
          <button className="label-tracking opacity-40 hover:opacity-100 transition-all flex items-center gap-2">
            Archive <ChevronRight size={12} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-soft border border-soft">
          {[
            { title: 'Neon Genesis Invitational', state: 'Active', stage: 'Quarter-Finals', prize: '5.0 ETH' },
            { title: 'Weekly Scrims: Alpha', state: 'Pending', stage: 'Registration', prize: 'Merit Only' },
          ].map((item, i) => (
            <div key={i} className="bg-background p-8 flex items-center justify-between hover:bg-surface transition-colors group cursor-pointer">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className={`label-tracking ${item.state === 'Active' ? 'text-primary' : 'opacity-30'}`}>{item.state}</span>
                  <div className="w-1 h-1 rounded-full bg-soft"></div>
                  <span className="serif italic text-[12px] opacity-50">{item.stage}</span>
                </div>
                <h3 className="serif text-2xl group-hover:text-primary transition-colors">{item.title}</h3>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="label-tracking opacity-20">Yield</span>
                <span className="serif text-lg italic text-primary">{item.prize}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Settings & Exit */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <h2 className="serif text-2xl italic border-b border-soft pb-4">Configuration</h2>
          {['Registry Connectivity', 'Engagement Preferences', 'Security Protocols'].map((setting, i) => (
            <button key={i} className="flex items-center justify-between label-tracking opacity-40 hover:opacity-100 hover:text-primary transition-all py-2 group">
              {setting}
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6 border border-soft p-12 items-center text-center bg-surface group hover:border-error transition-colors">
          <Swords className="opacity-20 group-hover:opacity-100 group-hover:text-error transition-all" size={32} />
          <h3 className="serif text-2xl">End Engagement</h3>
          <p className="font-light text-on-surface-variant italic mb-4">Disconnect all active terminals and clear session cache from the current node.</p>
          <button className="border border-error/30 text-error px-12 py-4 label-tracking hover:bg-error hover:text-white transition-all uppercase tracking-widest text-[11px]">
            Terminate Session
          </button>
        </div>
      </section>
    </div>
  );
}
