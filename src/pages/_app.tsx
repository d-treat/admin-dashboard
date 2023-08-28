import DashboardLayout from '@/components/layouts/DashboardLayout'
import '@/styles/nprogress.css'
import '@/styles/tailwind.css'
import 'focus-visible'
import { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
// import { AuthProvider } from '@/hooks/useAuth'
import { AuthProvider } from '@/auth/useAuth'
import MainLayout from '@/components/layouts/MainLayout'

NProgress.configure({
  showSpinner: false,
});

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <RecoilRoot>
      <AuthProvider>
        <MainLayout>
          <Toaster />
          {(router.pathname.includes('/dashboard')) ? (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </MainLayout>
      </AuthProvider>
    </RecoilRoot>
  )
}
