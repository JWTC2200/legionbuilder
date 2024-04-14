import { createJSONStorage } from "zustand/middleware"
import createPersistedStore from "@/app/utils/persistedStore"

interface AuthState {
	uid: string | null
	saveSession: (uid: string) => void
	reset: () => void
	authenticated: boolean
}

const useAuthState = createPersistedStore(
	(set: any): AuthState => ({
		uid: null,
		saveSession: (uid: string) => set({ uid, authenticated: true }),
		reset: () => set({ uid: null, authenticated: false }),
		authenticated: false,
	}),
	{
		name: "auth",
		storage: createJSONStorage(() => sessionStorage),
	}
)

export default useAuthState
