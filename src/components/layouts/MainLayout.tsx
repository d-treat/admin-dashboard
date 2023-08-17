/* eslint-disable react-hooks/exhaustive-deps */
// import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    // const { user } = useAuth();

    return (
        <>
            {children}
        </>
    )
}
