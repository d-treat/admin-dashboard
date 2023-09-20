/* eslint-disable react-hooks/exhaustive-deps */
import { adminAccount } from "@/utils/constants";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";



export const AuthContext = createContext({
    initialLoading: true,
    loggedIn: false,
    loggingIn: false,
    login: (username: string, password: string) => { },
    logout: () => { }
});


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [initialLoading, setInitialLoading] = useState(true);
    const [loggingIn, setLoggingIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (!loggedIn && router.pathname !== '/login') {
            // router.push('/login');
            setTimeout(() => {
                setInitialLoading(false);
            }, 1000);
        } else if (loggedIn && router.pathname === '/login') {
            router.push('/dashboard');
            setTimeout(() => {
                setInitialLoading(false);
            }, 1000);
        } else {
            setInitialLoading(false);
        }
    }, [router.pathname]);

    const login = async (username: string, password: string) => {
        setLoggingIn(true);
        if (username === adminAccount.username && password === adminAccount.password) {
            setLoggedIn(true);
            setTimeout(() => {
                setLoggingIn(false);
                router.push('/dashboard');
            }, 1000);
        } else {
            setTimeout(() => {
                toast.error("Invalid credentials");
                setLoggingIn(false);
            }, 1000)
        }
    }

    const logout = () => {
        setLoggedIn(false);
        router.push('/login');
    }

    return (
        <AuthContext.Provider value={{ initialLoading, loggedIn, loggingIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export default function useAuth() {
    return useContext(AuthContext);
}