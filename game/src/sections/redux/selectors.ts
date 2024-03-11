import { RootState } from "@/core/redux/store";

export const name = (state: RootState) => state.auth.userName;
export const start = (state: RootState) => state.game.start;
