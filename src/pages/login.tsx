import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import Logo from '@/components/Logo'
// import useAuth from '@/hooks/useAuth'
import { isValidEmail, isValidPassword } from '@/utils/validation'
import { FormEvent, useState } from 'react'
import Loader from '@/components/Loader'

export default function Login() {

  // const { signIn, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidEmail(formData.email) && isValidPassword(formData.password)) {
      // signIn(formData.email, formData.password);
    }
  }
  return (
    <>
      <Head>
        <title>Sign In - d-treat</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Logo showText />
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to continue
            </h2>
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            type="password"
            autoComplete="current-password"
            required
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="w-full"
              href='/dashboard'
            >
              <span>
                {/* {loading ? <Loader /> : "Sign in"} */}
                sign in
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
