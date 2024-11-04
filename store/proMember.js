import { create } from 'zustand'

const useProMembers = create((set) => ({
    currentState: 'member',
    members: [],
    messageToEdit: {},
    setCurrentState: (state) => set({ currentState: state }),
    setMembers: (members) => set({ members }),
    setMessageToEdit: (message) => set({ messageToEdit: message })
}))

export default useProMembers