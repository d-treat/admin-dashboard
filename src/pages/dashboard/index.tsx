import Stats from '@/components/overall/Stats';
import Head from 'next/head';



export default function Overview() {

  return (
    <>
      <Head><title>D-Treat | Admin Dashboard</title></Head>
      <main className='space-y-4'>
        <header>
          {/* Heading */}
          <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-white sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-x-3">
                <div className="flex-none rounded-full bg-blue-600/10 p-1 text-blue-600">
                  <div className="h-2 w-2 rounded-full bg-current" />
                </div>
                <h1 className="flex gap-x-3 text-base leading-7">
                  <span className="font-semibold text-gray-800">D-Treat</span>
                  <span className="text-gray-600">/</span>
                  <span className="font-semibold text-gray-800">Admin Dashboard</span>
                </h1>
              </div>
              <p className="text-sm leading-6 text-gray-600">Manage and monitor everything here on your customized dashboard.</p>
            </div>
            <div className="order-first flex-none rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-blue-600/30 sm:order-none">
              Production
            </div>
          </div>
          <Stats />
        </header>
      </main>
    </>
  );

}
