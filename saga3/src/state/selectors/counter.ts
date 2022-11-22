import { ICounterSlice } from "../slices";
import { RootState } from "../store";

export const counterValueSelector = (state: RootState): ICounterSlice => state.counter