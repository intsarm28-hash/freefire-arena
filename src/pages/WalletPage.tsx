import React from 'react';
import { TRANSACTIONS, CURRENT_USER } from '../constants';
import { History, PlusCircle, ArrowUp, Wallet, ArrowDown } from 'lucide-react';

export default function WalletPage() {
  return (
    <div className="flex flex-col gap-24 py-16 selection:bg-primary/30">
      {/* Editorial Ledger Header */}
      <section className="relative border-b border-soft pb-20">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="label-tracking text-primary">Fiscal Status • Ledger 001</div>
            <h1 className="massive-text serif font-black">
              CURRENT <br />
              LIQUIDITY<span className="italic font-light">.</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
            <div className="flex flex-col gap-4">
              <div className="serif text-8xl md:text-9xl text-primary leading-none tracking-tighter">
                {CURRENT_USER.balance.toLocaleString()}
              </div>
              <div className="label-tracking text-xl opacity-40">Available {CURRENT_USER.balanceCurrency} Units</div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-light text-on-surface-variant italic max-w-sm border-l border-soft pl-8 leading-relaxed">
                Assets are distributed via the central node. Winnings are processed instantly upon circuit validation. Documentation of all deposits is preserved within the immutable ledger.
              </p>
              <div className="flex gap-1 border-t border-soft pt-6 mt-4">
                <button className="flex-1 bg-primary text-on-primary label-tracking py-4 hover:bg-on-surface hover:text-background transition-colors">
                  Deposit
                </button>
                <button className="flex-1 border border-soft label-tracking py-4 hover:border-primary hover:text-primary transition-colors">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Records */}
      <section className="flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <h2 className="serif text-3xl italic">Audit Log</h2>
          <div className="flex-grow h-[1px] bg-soft"></div>
        </div>

        <div className="border border-soft bg-surface selection:bg-primary/20">
          <div className="grid grid-cols-[1fr_150px_150px] p-8 border-b border-soft label-tracking opacity-30 text-[9px]">
            <div>Transaction Description</div>
            <div className="text-right">Timestamp</div>
            <div className="text-right">Amount</div>
          </div>
          
          <div className="divide-y divide-soft">
            {TRANSACTIONS.map((tx) => (
              <div key={tx.id} className="grid grid-cols-[1fr_150px_150px] p-8 hover:bg-background transition-colors items-center group">
                <div className="flex items-center gap-6">
                  <div className={`w-10 h-10 border border-soft flex items-center justify-center grayscale opacity-30 group-hover:opacity-100 group-hover:border-primary transition-all`}>
                    {tx.amount > 0 ? (
                      <ArrowDown size={16} className="text-primary" />
                    ) : (
                      <ArrowUp size={16} />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="serif text-xl tracking-tight leading-none group-hover:text-primary transition-colors">{tx.type}</span>
                    <span className="label-tracking text-[8px] opacity-30 mt-2">{tx.status}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col justify-center">
                  <span className="font-sans text-[11px] opacity-40">{tx.date}</span>
                  <span className="font-sans text-[11px] opacity-40">{tx.time}</span>
                </div>
                <div className="text-right flex flex-col justify-center">
                  <span className={`serif text-xl ${tx.amount > 0 ? 'text-primary' : 'text-on-surface'}`}>
                    {tx.amount > 0 ? `+${tx.amount.toLocaleString()}` : tx.amount.toLocaleString()}
                  </span>
                  <span className="label-tracking text-[9px] opacity-30">{tx.currency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
