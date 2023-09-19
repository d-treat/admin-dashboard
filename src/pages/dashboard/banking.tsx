// sections
import { OverviewBankingView } from '@/sections/overview/banking/view';
import Head from 'next/head';

// ----------------------------------------------------------------------

export default function OverviewBankingPage() {
    return (
        <>
            <Head>
                <title>D-treat admin | Banking</title>
            </Head>

            <OverviewBankingView />
        </>
    );
}
