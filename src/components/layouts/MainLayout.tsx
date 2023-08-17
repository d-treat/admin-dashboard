/* eslint-disable react-hooks/exhaustive-deps */
// import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { League_Spartan } from "next/font/google"

const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    preload: true
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    // const { user } = useAuth();

    return (
        // <div className={`min-h-screen ${leagueSpartan.className}`}>
        <>
            {children}
        </>
        // </div>
    )
}
