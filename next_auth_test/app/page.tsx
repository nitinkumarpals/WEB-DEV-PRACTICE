import { getServerSession } from "next-auth"
import { NextAuth_Ts } from "./lib/auth";
import { Appbar } from "./components/AppBar";

async function getUser() {
  const session = await getServerSession(NextAuth_Ts);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      <Appbar />
      {JSON.stringify(session)}
    </div>
  );
}