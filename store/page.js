import { create } from "zustand";

const usePage = create((set) => ({
    currentPage: 'home',
    setCurrentPage: (page) => set({ currentPage: page })
}))

export default usePage