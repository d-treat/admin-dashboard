import React from 'react'

export default function Loader({ green }: { green?: boolean }) {
  return (
    <div className={`animate-spin rounded-full h-6 w-6 border-b-2 ${green ? "border-primary" : "border-gray-50"}`} >
    </div>
  )
}
