import { create } from "zustand";

export type Page = "Password" | "Bcrypt" | "PGP";

type Store = {
    page: Page;
    setPage: (value: Page) => void;
};

const useStore = create<Store>((set) => ({
    page: "Password",
    setPage: (value) => set({ page: value }),
}));

export default useStore;