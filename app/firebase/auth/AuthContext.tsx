"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, getAuth, User } from "firebase/auth"
import useAuthState from "@/app/Auth"
import firebase_app from "../config"

const auth = getAuth(firebase_app)

export const AuthContext = createContext<{ user: User | null }>({ user: null })

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)
	const saveSession = useAuthState((state) => state.saveSession)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
				saveSession(user.uid)
			} else {
				setUser(null)
			}
		})
		return () => unsubscribe()
	})

	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
