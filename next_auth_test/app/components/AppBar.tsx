"use client"
import { signIn, signOut } from "next-auth/react";
export const Appbar = () => {
    return <div className="flex justify-between">
        <button className="bg-white text-black rounded-sm p-1 m-4" onClick={() => signIn()}>Sign in</button>
        
        <button className="bg-white text-black rounded-sm p-1 m-4" onClick={() => signOut()}>Sign out</button>
    </div>
}