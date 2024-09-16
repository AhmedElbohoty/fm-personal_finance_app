import { createSelector } from "@reduxjs/toolkit";

import { Transaction, Budget, Pot } from "types/data";
import { RootState } from "store/store";
import { isDateBeforeNow } from "utils/helpers";

// Budget selectors
export const selectAllBudgets = (state: RootState) =>
  Object.values(state.app.budgets);

// Pot selectors
export const selectPotById = (state: RootState, id: Pot["id"]) =>
  state.app.pots[id];
export const selectPotsIds = (state: RootState) => state.app.potsIds;
export const selectAllPots = (state: RootState) =>
  Object.values(state.app.pots);
export const selectPotsTotal = (state: RootState) =>
  Object.values(state.app.pots).reduce((t, p) => t + p.total, 0);

// Bills selectors
export const selectRecurringBills = (state: RootState) => {
  const { transactions } = state.app;
  const recurring = Object.values(transactions).filter((t) => t.recurring);
  const vendors = new Set();
  const uniqueRecurring = [];

  for (const t of recurring) {
    if (vendors.has(t.name)) continue;
    vendors.add(t.name);
    uniqueRecurring.push(t);
  }

  return uniqueRecurring;
};

export const selectPaidRecurringBills = createSelector(
  (s) => selectRecurringBills(s),
  (bills: Transaction[]) => bills.filter((b) => isDateBeforeNow(b.date))
);

export const selectPaidRecurringBillsValue = createSelector(
  (s) => selectPaidRecurringBills(s),
  (bills: Transaction[]) =>
    bills.reduce((sum, t) => sum + Math.abs(t.amount), 0)
);
export const selectAllTransactions = (state: RootState) =>
  Object.values(state.app.transactions);

//
const getBalance = (state: RootState) => state.app.balance;

const getCurrentBalance = (state: RootState) => state.app.balance.current;

const getIncome = (state: RootState) => state.app.balance.income;

const getExpenses = (state: RootState) => state.app.balance.expenses;

const getTransactionById = (state: RootState, id: Transaction["id"]) =>
  state.app.transactions[id];

const getTransactionsIds = (state: RootState) => state.app.transactionsIds;

const getTransactionIdsByCategory = (
  state: RootState,
  category: Transaction["category"]
) =>
  state.app.transactionsIds.filter(
    (id) => state.app.transactions[id].category === category
  );

const getTransactionByName = (state: RootState, name: string) =>
  Object.values(state.app.transactions).find(
    (transaction) => transaction.name === name
  );

const getTransactionsByDateRange = (
  state: RootState,
  startDate: string,
  endDate: string
) =>
  Object.values(state.app.transactions).filter(
    (transaction) =>
      transaction.date >= startDate && transaction.date <= endDate
  );

const getTransactionsByAmountRange = (
  state: RootState,
  minAmount: number,
  maxAmount: number
) =>
  Object.values(state.app.transactions).filter(
    (transaction) =>
      transaction.amount >= minAmount && transaction.amount <= maxAmount
  );

const getNonRecurringTransactions = (state: RootState) =>
  Object.values(state.app.transactions).filter(
    (transaction) => !transaction.recurring
  );

const getTotalSpentByCategory = (
  state: RootState,
  category: Transaction["category"]
) =>
  Object.values(state.app.transactions)
    .filter((transaction) => transaction.category === category)
    .reduce((total, transaction) => total + transaction.amount, 0);

const getTotalIncome = (state: RootState) =>
  Object.values(state.app.transactions)
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

const getTotalExpenses = (state: RootState) =>
  Object.values(state.app.transactions)
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

const getBudgetById = (state: RootState, id: Budget["id"]) =>
  state.app.budgets[id];

const getBudgetsIds = (state: RootState) => state.app.budgetsIds;

const getBudgetsByCategory = (state: RootState, category: Budget["category"]) =>
  state.app.budgetsIds.filter(
    (id) => state.app.budgets[id].category === category
  );

const getBudgetMaximum = (state: RootState, id: Budget["id"]) =>
  state.app.budgets[id]?.maximum || 0;

const getBudgetTheme = (state: RootState, id: Budget["id"]) =>
  state.app.budgets[id]?.theme || "";

const getBudgetsTotal = (state: RootState) =>
  Object.values(state.app.budgets).reduce(
    (total, budget) => total + budget.maximum,
    0
  );

const getPotAmountById = (state: RootState, id: Pot["id"]) =>
  state.app.pots[id].total;

const getPotNameById = (state: RootState, id: Pot["id"]) =>
  state.app.pots[id]?.name || "";

const getTransactionCount = (state: RootState) =>
  Object.values(state.app.transactions).length;

const getBudgetCount = (state: RootState) =>
  Object.values(state.app.budgets).length;

const getPotCount = (state: RootState) => Object.values(state.app.pots).length;

//  const getTransactionsForBudget = (
//   state: RootState,
//   budgetId: Budget["id"]
// ) =>
//   Object.values(state.app.transactions).filter(
//     (transaction) => transaction.budgetId === budgetId
//   );

//  const getTotalAmountForBudget = (
//   state: RootState,
//   budgetId: Budget["id"]
// ) =>
//   getTransactionsForBudget(state, budgetId).reduce(
//     (total, transaction) => total + transaction.amount,
//     0
//   );

const getBudgetsByTheme = (state: RootState, theme: Budget["theme"]) =>
  state.app.budgetsIds.filter((id) => state.app.budgets[id].theme === theme);

const getTransactionsWithNameContaining = (
  state: RootState,
  searchTerm: string
) =>
  Object.values(state.app.transactions).filter((transaction) =>
    transaction.name.includes(searchTerm)
  );

const getExpensesByDateRange = (
  state: RootState,
  startDate: string,
  endDate: string
) =>
  Object.values(state.app.transactions).filter(
    (transaction) =>
      transaction.amount < 0 &&
      transaction.date >= startDate &&
      transaction.date <= endDate
  );

const getIncomeByDateRange = (
  state: RootState,
  startDate: string,
  endDate: string
) =>
  Object.values(state.app.transactions).filter(
    (transaction) =>
      transaction.amount > 0 &&
      transaction.date >= startDate &&
      transaction.date <= endDate
  );

const getAverageTransactionAmount = (state: RootState) =>
  Object.values(state.app.transactions).reduce(
    (total, transaction) => total + transaction.amount,
    0
  ) / Object.values(state.app.transactions).length;

const getHighestTransactionAmount = (state: RootState) =>
  Math.max(
    ...Object.values(state.app.transactions).map(
      (transaction) => transaction.amount
    )
  );

const getLowestTransactionAmount = (state: RootState) =>
  Math.min(
    ...Object.values(state.app.transactions).map(
      (transaction) => transaction.amount
    )
  );

const getTransactionsByRecurringStatus = (
  state: RootState,
  isRecurring: boolean
) =>
  Object.values(state.app.transactions).filter(
    (transaction) => transaction.recurring === isRecurring
  );

const getTotalAmountByRecurringStatus = (
  state: RootState,
  isRecurring: boolean
) =>
  getTransactionsByRecurringStatus(state, isRecurring).reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

const getTransactionsGroupedByCategory = (state: RootState) =>
  Object.values(state.app.transactions).reduce((grouped, transaction) => {
    (grouped[transaction.category] = grouped[transaction.category] || []).push(
      transaction
    );
    return grouped;
  }, {} as Record<Transaction["category"], Transaction[]>);

const getBudgetsByMaximumRange = (
  state: RootState,
  minAmount: number,
  maxAmount: number
) =>
  state.app.budgetsIds.filter(
    (id) =>
      state.app.budgets[id].maximum >= minAmount &&
      state.app.budgets[id].maximum <= maxAmount
  );

const getPotsByAmountRange = (
  state: RootState,
  minAmount: number,
  maxAmount: number
) =>
  state.app.potsIds.filter(
    (id) =>
      (state.app.pots[id].total || 0) >= minAmount &&
      (state.app.pots[id].total || 0) <= maxAmount
  );
