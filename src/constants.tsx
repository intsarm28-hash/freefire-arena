import { Tournament, Player, Transaction, UserProfile } from './types';

export const TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    title: 'Squad Rush #42',
    mode: 'TDM 4v4',
    entryFee: 100,
    entryFeeCurrency: 'PKR',
    prizePool: 2500,
    prizePoolCurrency: 'PKR',
    prizePoolBreakdown: '1st: 1500 • 2nd: 700 • 3rd: 300',
    slotsFilled: 38,
    totalSlots: 50,
    timeLabel: 'Tonight 9:00 PM',
    status: 'upcoming',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB102F8lI6NdrwoltiPcAxSpnVissEhPSbTTEiYUphAqs8Qk5q4CIldr5DRfj2VUIqJSrY2LKZl_GxZTmnJxu-YwfqsggY0coa2DRwcMmGt8pxL06he8fjTom7uEYaTVL0zQMZkGdqX2cRzLSoU7yC1Cm-YmJdoVD-a7HbnKxTJHX7g1S_itJTjc-7FK_xc0xCiPp7LYjFqx6-P-lH9ulfK8DNV8l8qWlB12epuhSzpIESXg8sVIXdxltMh4V1l47Yd4EiE9Rv8fDw'
  },
  {
    id: '2',
    title: 'Solo Survivor',
    mode: 'BR Solo',
    entryFee: 50,
    entryFeeCurrency: 'PKR',
    prizePool: 5000,
    prizePoolCurrency: 'PKR',
    prizePoolBreakdown: 'Per Kill: 10 PKR • WWCD: 1000 PKR',
    slotsFilled: 100,
    totalSlots: 100,
    timeLabel: 'Live Now',
    status: 'live',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv_XUQhjwq2H8DV1l3GThWAASYE6_GTCT3Xy1yYaLfi4CYJQLD6rn3Zb0a98iaU6G4idMGSNPq5SWIAfkiifm_ObGWWYuQ-VVMjgFAaksXHzXYPi9d5-Vd2bL_19xdW177btELRWVTMv-pF7oPx0PtKyJIgt0civ19I1rp2KejSVwT--IbPtT51kHWZkPReBFmzo_sOPIM_6wl9lsr7tCjuH-rh18h_TOu-U9DKN_t9rAiIh7DXBYH1T7b7vyOwC57NuVTx1UsR3M'
  }
];

export const TOP_PLAYERS: Player[] = [
  {
    id: 'p1',
    name: 'ShadowNinja_',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4CezgkJbcGQQRbKKADVgLvfAu0zE69C0ZUgZBsWH2iRBg6IloftUpnZoUhEkg00ATnmx8URRSegF2OtLY9KSvolQmT5i38yhrKw0jeEYOcebUKKwZqOCUyYKsC1vI10BZsC8GZ6YDMoh0K9tzhd2_-euNTeJUL8vqVBEQ8DFOd3fzSrdDo3L1BeQSuBMRRZSBzTz_ETNqL10qCiz858O86KUdKD7wUJHPqmu7tcU0VcJDsxri8wk2iE2KfDyeHN54R6DdyIuyjAk',
    rank: 1,
    winnings: 12500,
    winningsCurrency: 'PKR'
  },
  {
    id: 'p2',
    name: 'ToxicViper99',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4CezgkJbcGQQRbKKADVgLvfAu0zE69C0ZUgZBsWH2iRBg6IloftUpnZoUhEkg00ATnmx8URRSegF2OtLY9KSvolQmT5i38yhrKw0jeEYOcebUKKwZqOCUyYKsC1vI10BZsC8GZ6YDMoh0K9tzhd2_-euNTeJUL8vqVBEQ8DFOd3fzSrdDo3L1BeQSuBMRRZSBzTz_ETNqL10qCiz858O86KUdKD7wUJHPqmu7tcU0VcJDsxri8wk2iE2KfDyeHN54R6DdyIuyjAk',
    rank: 2,
    winnings: 8200,
    winningsCurrency: 'PKR'
  },
  {
    id: 'p3',
    name: 'NoobSlayer_X',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4CezgkJbcGQQRbKKADVgLvfAu0zE69C0ZUgZBsWH2iRBg6IloftUpnZoUhEkg00ATnmx8URRSegF2OtLY9KSvolQmT5i38yhrKw0jeEYOcebUKKwZqOCUyYKsC1vI10BZsC8GZ6YDMoh0K9tzhd2_-euNTeJUL8vqVBEQ8DFOd3fzSrdDo3L1BeQSuBMRRZSBzTz_ETNqL10qCiz858O86KUdKD7wUJHPqmu7tcU0VcJDsxri8wk2iE2KfDyeHN54R6DdyIuyjAk',
    rank: 3,
    winnings: 5000,
    winningsCurrency: 'PKR'
  }
];

export const GLOBAL_LEADERS: Player[] = [
  ...TOP_PLAYERS,
  {
    id: 'p4',
    name: 'Ghost_Protocol',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIAe5kxmsH8xB9pQrAzKWbvFOzAHr9Pl3yCZhvTM6lnatQb-9SMbvKtQF7bAw9JN1L-dZOsfOklDe9BeSoMbPPCuMNU2uf71ENcuOqfF-Rn6c5tdfTrRZQ7NyTmz7-rKEzQEDUx8I13vncQTTU7YqUSfx5M33RSkMJGc4LnS8BKRuhN1GlVBK47QcA19sBIxYdoWfttiVz1DObhBPsFj_kr6MPqjZuYpbKEzJaQB8Sgy5i--8mSL_S70nhteRV_jXp_75tCVYk8S8',
    rank: 4,
    winnings: 1.2,
    winningsCurrency: 'ETH',
    level: 84
  },
  {
    id: 'p5',
    name: 'Ironclad_Jess',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVgmkhuZ2ZEI9AaP8nwO4y6_gYqhcHgFwdgKWr0Ok8gDP6TWe7cZmewWCMUZgzjrGebt3BZljrsAQvqQ7gfTirCGHlk0couXflppJ5YA3ZJvJ3V-dLhBxv2Y91Rc_CqtibdlwQ7_Hobq_rTAcFfhDuHZgPxZkvW-824z2xPXgO-H6nbKMqFSKff71LqfvJcVa8zGQR7SO4yj8KFYziXX77l-VzNoe4pXdr6g-E4BnyIs9WX9h9NZGYnvI5fI5oEk3VWBharIwH8YI',
    rank: 5,
    winnings: 0.85,
    winningsCurrency: 'ETH',
    level: 79
  },
  {
    id: 'p6',
    name: 'VoidWalker',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdLSNuMmAUNmGIVMp_aWRKIxZ_QGKy80WZEqC8RIaDviuqxonV57_0ajwRm20jIjtJGFaMyxedFj5jaACLqc0fNfQ_9vRrzVtBpcyr6L8mGiZSmMuqxsBcsToMYg5wIBVSN9Yal5BZNtqv8MApUv5EFnALqpSgdFdb1-Xyi5W_hA6KrRwuCYHbVugXSezONFI7z984hDbwI5mh7QPRSEaKtaeC28MUI-0Tad38-PdirlO09JMB_Kkk7rFDkkJpOnoEOdGY33G_luQ',
    rank: 6,
    winnings: 0.60,
    winningsCurrency: 'ETH',
    level: 82
  }
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: 't1',
    type: 'JazzCash Deposit',
    amount: 1000,
    currency: 'PKR',
    date: 'OCT 24, 2023',
    time: '14:30',
    status: 'COMPLETED'
  },
  {
    id: 't2',
    type: 'Prize Winnings',
    amount: 1500,
    currency: 'PKR',
    date: 'OCT 22, 2023',
    time: '22:00',
    status: '1ST PLACE'
  },
  {
    id: 't3',
    type: 'Tournament Entry',
    amount: -500,
    currency: 'PKR',
    date: 'OCT 22, 2023',
    time: '18:00',
    status: 'FEE'
  }
];

export const CURRENT_USER: UserProfile = {
  id: 'u1',
  name: 'ProGamer_99',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4CezgkJbcGQQRbKKADVgLvfAu0zE69C0ZUgZBsWH2iRBg6IloftUpnZoUhEkg00ATnmx8URRSegF2OtLY9KSvolQmT5i38yhrKw0jeEYOcebUKKwZqOCUyYKsC1vI10BZsC8GZ6YDMoh0K9tzhd2_-euNTeJUL8vqVBEQ8DFOd3fzSrdDo3L1BeQSuBMRRZSBzTz_ETNqL10qCiz858O86KUdKD7wUJHPqmu7tcU0VcJDsxri8wk2iE2KfDyeHN54R6DdyIuyjAk',
  rank: 'Grandmaster',
  verified: true,
  tournaments: 142,
  totalWins: 89,
  winRate: 62.6,
  winStreak: 4,
  balance: 2500,
  balanceCurrency: 'PKR'
};
