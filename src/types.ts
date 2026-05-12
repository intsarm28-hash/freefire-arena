export interface Tournament {
  id: string;
  title: string;
  mode: string;
  entryFee: number;
  entryFeeCurrency: string;
  prizePool: number;
  prizePoolCurrency: string;
  prizePoolBreakdown?: string;
  slotsFilled: number;
  totalSlots: number;
  timeLabel: string;
  status: 'upcoming' | 'live' | 'completed';
  image: string;
}

export interface Player {
  id: string;
  name: string;
  avatar: string;
  rank: number;
  winnings: number;
  winningsCurrency: string;
  level?: number;
}

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  currency: string;
  date: string;
  time: string;
  status: string;
  method?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  rank: string;
  verified: boolean;
  tournaments: number;
  totalWins: number;
  winRate: number;
  winStreak: number;
  balance: number;
  balanceCurrency: string;
}
