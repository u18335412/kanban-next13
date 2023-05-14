/* eslint-disable no-unused-vars */

import { create } from 'zustand'

interface BoardState {
    isSidebarHidden: boolean
    toggleSidebar: () => void
}

const useBearStore = create<BoardState>()((set) => ({
    isSidebarHidden: true,
    toggleSidebar: () => set((state) => ({ isSidebarHidden: !state.isSidebarHidden })),
}))

export default useBearStore