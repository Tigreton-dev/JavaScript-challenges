import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import vercelPostgresAdapter from './vercelPostgresAdapter';

import PostgresAdapter from '@auth/pg-adapter';
import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    user: 'database-user',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

const handler = NextAuth({
    debug: true,
    // secret: process.env.NEXT_AUTH as string,
    adapter: PostgresAdapter(pool),
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
    ]
});

export { handler as GET, handler as POST };
