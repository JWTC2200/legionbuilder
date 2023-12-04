import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import createPersistedStore from "@/app/utils/persistedStore";

interface AuthState {
    uid: string | null;
    saveSession: (uid: string) => void;
    reset: () => void;
    authenticated: () => boolean;
}

const useAuthState = createPersistedStore(
    (set, get): AuthState => ({
        uid: null,
        saveSession: (uid: string) => set( { uid }),
        reset: () => set({ uid: null }),
        authenticated: () => !!get().uid,
    }),
    {
        name: 'auth',
        storage: createJSONStorage(() => sessionStorage)
    }
);

export default useAuthState;