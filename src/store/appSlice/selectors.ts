import { createSelector } from "@reduxjs/toolkit";

import { Transaction, Budget, Pot } from "types/data";
import { RootState } from "store/store";
import { abs, isBillDue, isBillPaid } from "utils/helpers";

export const selectBalance = (state: RootState) => state.app.balance;

export const selectBudgets = (state: RootState) => state.app.budgets;
export const selectBudgetsIds = (state: RootState) => state.app.budgetsIds;
export const selectBudgetById = (state: RootState, id: Budget["id"]) =>
  state.app.budgets[id];

export const selectPotById = (state: RootState, id: Pot["id"]) =>
  state.app.pots[id];
export const selectPotsIds = (state: RootState) => state.app.potsIds;
export const selectPotsTotal = (state: RootState) =>
  Object.values(state.app.pots).reduce((t, p) => t + p.total, 0);

export const selectTransactions = (state: RootState) => state.app.transactions;
export const selectTransactionsIds = (state: RootState) =>
  state.app.transactionsIds;
export const selectTransactionById = (
  state: RootState,
  id: Transaction["id"]
) => state.app.transactions[id];

export const selectCategories = (state: RootState) => state.app.categories;

export const selectRecurringBillsIds = (
  state: RootState,
  search: string = "",
  sortOption: string = "latest"
) => {
  const { recurringBillsIds, transactions } = state.app;
  let filteredIds = [...recurringBillsIds];

  // Then filter by name
  if (search !== "") {
    filteredIds = filteredIds.filter((id) =>
      transactions[id].name.toLowerCase().includes(search)
    );
  }

  // Sort the filtered IDs based on the sortOption
  switch (sortOption) {
    case "latest":
      filteredIds.sort(
        (a, b) =>
          new Date(transactions[a].date).getDate() -
          new Date(transactions[b].date).getDate()
      );
      break;
    case "oldest":
      filteredIds.sort(
        (a, b) =>
          new Date(transactions[b].date).getDate() -
          new Date(transactions[a].date).getDate()
      );
      break;
    case "a-z":
      filteredIds.sort((a, b) =>
        transactions[a].name.localeCompare(transactions[b].name)
      );
      break;
    case "z-a":
      filteredIds.sort((a, b) =>
        transactions[b].name.localeCompare(transactions[a].name)
      );
      break;
    case "highest":
      filteredIds.sort(
        (a, b) => abs(transactions[b].amount) - abs(transactions[a].amount)
      );
      break;
    case "lowest":
      filteredIds.sort(
        (a, b) => abs(transactions[a].amount) - abs(transactions[b].amount)
      );
      break;
    default:
      break;
  }

  return filteredIds;
};

export const selectRecurBillsDetails = createSelector(
  (state: RootState) => state.app.transactions,
  selectRecurringBillsIds,
  (transactions, billsIds) => {
    let totalBills = 0,
      paidTotal = 0,
      paidCount = 0,
      dueTotal = 0,
      dueCount = 0;
    const totalCount = billsIds.length;

    billsIds.forEach((id) => {
      const { date, amount } = transactions[id];
      const isPaid = isBillPaid(date);
      const isDue = isBillDue(date);

      totalBills += Math.abs(amount);
      if (isPaid) {
        paidTotal += Math.abs(amount);
        paidCount++;
      } else if (isDue) {
        dueTotal += Math.abs(amount);
        dueCount++;
      }
    });

    return { totalBills, totalCount, paidTotal, paidCount, dueTotal, dueCount };
  }
);

export const selectMonthlySpent = (
  state: RootState,
  category: Transaction["category"]
) => {
  const { transactions } = state.app;
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  return Object.values(transactions).reduce((total, t) => {
    if (t.category !== category) return total;
    const tDate = new Date(t.date);
    if (tDate >= startOfMonth && tDate <= endOfMonth) {
      return total + Math.abs(t.amount);
    }
    return total;
  }, 0);
};

export const selectFilteredTranIds = (
  state: RootState,
  filter: string = "",
  category: string = "all",
  sortOption: string = "latest"
) => {
  const { transactionsIds, transactions } = state.app;
  let filteredIds = [...transactionsIds];

  // Filter by category first
  if (category !== "all") {
    filteredIds = filteredIds.filter(
      (id) => transactions[id].category.toLowerCase() === category
    );
  }

  // Then filter by name
  if (filter !== "") {
    filteredIds = filteredIds.filter((id) =>
      transactions[id].name.toLowerCase().includes(filter)
    );
  }

  // Sort the filtered IDs based on the sortOption
  switch (sortOption) {
    case "latest":
      filteredIds.sort(
        (a, b) =>
          new Date(transactions[b].date).getTime() -
          new Date(transactions[a].date).getTime()
      );
      break;
    case "oldest":
      filteredIds.sort(
        (a, b) =>
          new Date(transactions[a].date).getTime() -
          new Date(transactions[b].date).getTime()
      );
      break;
    case "a-z":
      filteredIds.sort((a, b) =>
        transactions[a].name.localeCompare(transactions[b].name)
      );
      break;
    case "z-a":
      filteredIds.sort((a, b) =>
        transactions[b].name.localeCompare(transactions[a].name)
      );
      break;
    case "highest":
      filteredIds.sort(
        (a, b) => abs(transactions[b].amount) - abs(transactions[a].amount)
      );
      break;
    case "lowest":
      filteredIds.sort(
        (a, b) => abs(transactions[a].amount) - abs(transactions[b].amount)
      );
      break;
    default:
      break;
  }

  return filteredIds;
};

export const selectLatestTransactionsIds = createSelector(
  selectTransactionsIds,
  selectTransactions,
  (_, category: Transaction["category"]) => category,
  (ids: Transaction["id"][], transactions, category) => {
    const sortedTransactions = ids
      .filter(
        (id) =>
          transactions[id].category.toLowerCase() === category.toLowerCase()
      )
      .sort(
        (a, b) =>
          new Date(transactions[b].date).getTime() -
          new Date(transactions[a].date).getTime()
      );

    return sortedTransactions.slice(0, 3);
  }
);
