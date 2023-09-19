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
import { LocalizationProvider } from '@/locales'
import { MotionLazy } from 'src/components/animate/motion-lazy'
import { SettingsProvider } from 'src/components/settings'
import SnackbarProvider from 'src/components/snackbar/snackbar-provider'
import ThemeProvider from 'src/theme'


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
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeContrast: 'default', // 'default' | 'bold'
              themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
              themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
              themeStretch: false,
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <SnackbarProvider>
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
                </SnackbarProvider>
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </AuthProvider>
    </RecoilRoot>
  )
}
