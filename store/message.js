import { create } from "zustand";

const useMessage = create((set) => ({
    message: {},
    viewMoreClicked: false,
    setMessage: (message) => set({ message }),
    setViewMoreClick: (viewMoreClicked) => set({ viewMoreClicked }),
}))

export default useMessage