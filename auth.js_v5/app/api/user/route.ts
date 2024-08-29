import { auth } from "@/app/auth"; // Assuming you have exported `auth` from your auth setup
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth(); // Use the `auth` configuration
    console.log(session);

    return NextResponse.json({
        id: session?.user?.id || "Guest",
        name : session?.user?.name || "Guest",
        email: session?.user?.email || "Guest",
    });
}
