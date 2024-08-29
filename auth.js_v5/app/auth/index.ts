import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({

            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                return {
                    id: "user1",
                    name: "asd",
                    userId: "asd",
                    email: "ramdomEmail"
                };
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            console.log('Token:', token) // Add this line

            return token
        },
        session({ session, token }) {
            session.user.id = token.id as string
            return session
        },
    },
})