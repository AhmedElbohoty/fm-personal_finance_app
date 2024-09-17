import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "store/appSlice/initialState";
import { Budget, Pot } from "types/data";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // #region Pot Reducers
    addPot: (state, action: PayloadAction<Pot>) => {
      const pot = action.payload;
      state.pots[pot.id] = pot;
      state.potsIds.push(pot.id);
    },

    deletePot: (state, action: PayloadAction<string>) => {
      const potId = action.payload;
      const pot = state.pots[potId];
      if (!pot) return;

      state.balance.current += pot.total;
      delete state.pots[potId];
      state.potsIds = state.potsIds.filter((id) => id !== potId);
    },

    updatePot: (state, action: PayloadAction<Pot>) => {
      const pot = action.payload;
      if (!state.pots[pot.id]) return;
      state.pots[pot.id] = pot;
    },

    withdrawFromPot: (
      state,
      action: PayloadAction<{ potId: string; amount: number }>
    ) => {
      const { potId, amount } = action.payload;
      const pot = state.pots[potId];
      if (!pot) return;

      pot.total -= amount;
      state.balance.current += amount;
    },

    addToPot: (
      state,
      action: PayloadAction<{ potId: string; amount: number }>
    ) => {
      const { potId, amount } = action.payload;
      const pot = state.pots[potId];
      if (!pot) return;

      pot.total += amount;
      state.balance.current -= amount;
    },
    // #endregion Pot Reducers

    // #region Budgets Reducers
    addBudget: (state, action: PayloadAction<Budget>) => {
      const budget = action.payload;
      state.budgets[budget.id] = budget;
      state.budgetsIds.push(budget.id);
    },
    updateBudget: (state, action: PayloadAction<Budget>) => {
      const budget = action.payload;
      if (!state.budgets[budget.id]) return;
      state.budgets[budget.id] = budget;
    },
    deleteBudget: (state, action: PayloadAction<string>) => {
      const budgetId = action.payload;
      const budget = state.budgets[budgetId];
      if (!budget) return;

      delete state.budgets[budgetId];
      state.budgetsIds = state.budgetsIds.filter((id) => id !== budgetId);
    },
    // #endregion Budgets Reducers
  },
});

// Export action creators
export const {
  addPot,
  deletePot,
  updatePot,
  addToPot,
  withdrawFromPot,
  addBudget,
  updateBudget,
  deleteBudget,
} = appSlice.actions;

export default appSlice.reducer;
