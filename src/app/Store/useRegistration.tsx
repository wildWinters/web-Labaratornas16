"use Client"
import { create } from "zustand";

interface AuthState {
    isLogInorLogOut: "Log in" | "Log out" | null;
    isAuthModal: boolean;
    logIn: () => void;
    logOut: () => void;
    setLoginOutNull: () => void;
    openAuthModal: () => void;
    closeAuthModal: () => void;
}

const useAuth = create<AuthState>((set) => ({
    isLogInorLogOut: null,
    isAuthModal: false,
    logIn: () => set({ isLogInorLogOut: "Log in" }), 
    logOut: () => set({ isLogInorLogOut: "Log out" }),
    setLoginOutNull: () => set({isLogInorLogOut: null}),
    openAuthModal: () => set({isAuthModal: true}),
    closeAuthModal: () => set({isAuthModal: false}),
}));

export default useAuth;
