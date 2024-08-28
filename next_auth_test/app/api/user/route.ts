import { NextAuth_Ts } from "@/app/lib/auth";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(NextAuth_Ts);
    console.log(session);
    return NextResponse.json({
        name: session?.user?.name
    })
}