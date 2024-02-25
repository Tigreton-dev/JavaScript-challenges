import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { createAccount, createUser } from './users';

const handler = NextAuth({
    debug: true,
    // secret: process.env.NEXT_AUTH as string,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', user, account, profile, email, credentials);

            const timestampInSeconds = account.expires_at;
            const date = new Date(timestampInSeconds * 1000).toISOString();

            const accountPayload = {
                userId: user.id,
                providerId: account.provider,
                providerType: account.type,
                providerAccountId: account.providerAccountId,
                accessToken: account.access_token,
                expiresAt: date,
                refreshToken: account.refresh_token,
                scope: account.scope,
                tokenType: account.token_type,
                idToken: account.id_token
            };
            await createAccount(accountPayload);
            await createUser(user);
            return true;
        }
        // async redirect({ url, baseUrl }) {
        //     return baseUrl;
        // },
        // async session({ session, token, user }) {
        //     return session;
        // },
        // async jwt({ token, user, account, profile, isNewUser }) {
        //     return token;
        // }
    }
});

export { handler as GET, handler as POST };
