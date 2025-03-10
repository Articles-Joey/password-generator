import { create } from 'zustand'

const useStore = create((set) => ({
    page: "Password",
    setPage: (value) => set(() => ({ page: value })),
}))

export default useStore