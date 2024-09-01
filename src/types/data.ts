export type Balance = {
  current: number;
  income: number;
  expenses: number;
};

export type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export type Budget = {
  category: string;
  maximum: number;
  theme: string;
};

export type Pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
};

export type Data = {
  balance: Balance;
  transactions: Transaction[];
  budgets: Budget[];
  pots: Pot[];
};
