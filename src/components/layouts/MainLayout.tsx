/* eslint-disable react-hooks/exhaustive-deps */
// import useAuth from '@/hooks/useAuth';
import useAuth from '@/auth/useAuth';
import { League_Spartan } from "next/font/google";
import { useRouter } from 'next/router';
import React from 'react';
import PrePageLoader from '../PrePageLoader';

const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    preload: true
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { initialLoading } = useAuth();

    return (

        <div className={leagueSpartan.className}>
            {initialLoading ? <PrePageLoader /> : children}
        </div>
    )
}
