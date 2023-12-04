import { create } from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
    uid: string | null;
    saveSession: (uid: string) => void;
    reset: () => void;
    authenticated: () => boolean;
}

export const useAuthState = create<AuthState>()(
    persist(
        (set, get) => ({
            uid: null,
            saveSession: (uid: string) => set( { uid }),
            reset: () => set({ uid: null }),
            authenticated: () => !!get().uid,
        }),
        {
            name: 'auth',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);
