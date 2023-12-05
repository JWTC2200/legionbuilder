import { create } from 'zustand'

interface NavState {
    visible: boolean;
    toggle: () => void;
    hide: () => void;
}

export const useNavState = create<NavState>()((set) => ({
    visible: false,
    toggle: () => set((state) => ({ visible: !state.visible })),
    hide: () => set(() => ({ visible: false })),
}));
