import Credentials from "next-auth/providers/credentials"
import { AuthOptions } from 'next-auth';

export const NextAuth_Ts : AuthOptions  = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" , placeholder: "Email" },
        password: {label: "Password", type: "password", placeholder: "Password"},
        
      },
      authorize: async (credentials : any) => {
        const email =  credentials.email;
        const password = credentials.password;
        return {
          id : "1",
          name : "John Doe",
          email : email
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ user, token }: any) => {
    if (user) {
        token.uid = user.id;
    }
    return token;
    },
  session: ({ session, token, user }: any) => {
      if (session.user) {
          session.user.id = token.uid
      }
      return session
  }
},
pages: {
  signIn: "/sign-in/page.tsx",
  error: "/sign-in/error", // Custom error page
},
}
