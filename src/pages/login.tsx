import Head from 'next/head'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import Logo from '@/components/Logo'
// import useAuth from '@/hooks/useAuth'
import useAuth from '@/auth/useAuth'
import Loader from '@/components/Loader'
import { isValidName, isValidPassword } from '@/utils/validation'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

export default function Login() {
 
  const { login, loggingIn } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidName(formData.username) && isValidPassword(formData.password)) {
      login(formData.username, formData.password);
    } else {
      toast.error("Invalid credentials");
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
            label="Username"
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            type="password"
            required
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="w-full"
            >
              <span>
                {loggingIn ? <Loader /> : "Sign in"}
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
