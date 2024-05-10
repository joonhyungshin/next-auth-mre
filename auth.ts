import NextAuth from "next-auth"
import Twitter from "next-auth/providers/twitter"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Twitter({
      token: { request: () => { console.log('token') } },
      userinfo: { request: () => { console.log('userinfo') } }
    })
  ],
})

