/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { UserStore, userStore } from "./UserStore";

type Store = UserStore

export const DashBoardStore = create<Store>((set, get) => ({
    ...userStore(set)
}))