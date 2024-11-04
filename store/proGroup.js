import { create } from 'zustand'

const useProGroup = create((set) => ({
    selected: 'messages',
    setSelected: (selected) => set({ selected })
}))

export default useProGroup