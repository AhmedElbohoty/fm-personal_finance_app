import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "store/appSlice/initialState";
import { Pot } from "types/data";

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
  },
});

// Export action creators
export const { addPot, deletePot, updatePot, addToPot, withdrawFromPot } =
  appSlice.actions;

export default appSlice.reducer;
