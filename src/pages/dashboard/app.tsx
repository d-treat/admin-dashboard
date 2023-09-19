import Head from 'next/head';
import { OverviewAppView } from '@/sections/overview/app/view';

// ----------------------------------------------------------------------

export default function OverviewAppPage() {
    return (
        <>
            <Head>
                <title> Dashboard: App</title>
            </Head>

            <OverviewAppView />
        </>
    );
}
