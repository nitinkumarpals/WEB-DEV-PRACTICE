import { NextAuth_Ts } from "@/app/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(NextAuth_Ts);

export const get = handler;
export const post = handler;