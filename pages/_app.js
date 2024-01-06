'use client'
import { SessionProvider } from "next-auth/react";

export const MyApp = ({children})=>{
  return <SessionProvider>{children}</SessionProvider>
}