"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'
export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SessionProvider>
                {children}
            </SessionProvider>
        </div>
    )
}


