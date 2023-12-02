import { create } from 'zustand'

export const useNavState = create((set) => ({
    visible: false,
    toggle: () => set((state) => ({ visible: !state.visible })),
    hide: () => set(() => ({ visible: false })),
}));
