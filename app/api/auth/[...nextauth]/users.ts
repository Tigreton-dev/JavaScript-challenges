import { Account } from 'next-auth';
import { Adapter, AdapterAccount, AdapterSession, AdapterUser, VerificationToken } from 'next-auth/adapters';
import { kv } from '@vercel/kv';

export async function createUser(user: Omit<AdapterUser, 'id'>): Promise<AdapterUser> {
    try {
        const userExist = await getUser(user.id);
        if (userExist.length) return;
        await kv.hset(`user:${user.id}`, { id: user.id, name: user.name, email: user.email, image: user.image });
    } catch (error) {
        // Handle errors
        console.log(error);
    }
}

async function getUser(id: string) {
    try {
        const userId = await kv.hget(`user:${id}`, 'id');
        return userId;
    } catch (error) {
        console.log(error);
    }
}

export async function createAccount(payload) {
    try {
        const {
            userId,
            providerId,
            providerType,
            providerAccountId,
            accessToken,
            expiresAt,
            refreshToken,
            scope,
            tokenType,
            idToken
        } = payload;
        const existAccount = await getAccount(providerAccountId);
        if (existAccount !== null) return;
        await kv.hset(`account:${providerAccountId}`, {
            userId,
            providerId,
            providerType,
            providerAccountId,
            accessToken,
            expiresAt,
            refreshToken,
            scope,
            tokenType,
            idToken
        });
    } catch (error) {
        console.log(error);
    }
}

async function getAccount(providerAccountId: string) {
    try {
        const accountId = await kv.hget(`account:${providerAccountId}`, 'providerAccountId');
        return accountId;
    } catch (error) {
        console.log(error);
    }
}

async function createToken({ expires, session_token, user_id }) {
    try {
        const accountId = await kv.hset(`auth_session:${user_id}`, {expires, session_token, user_id});
        return accountId;
    } catch (error) {
        console.log(error);
    }
}

//Return verification token from the database and delete it so it cannot be used again.
async function useVerificationToken({ identifier, token }: { identifier: string; token: string }) {
    try {
        const { rows } =
            await sql`SELECT * FROM verification_tokens WHERE identifier = ${identifier} AND token = ${token} AND expires > NOW()`;
        await sql`DELETE FROM verification_tokens WHERE identifier = ${identifier} AND token = ${token}`;
        return {
            expires: rows[0].expires,
            identifier: rows[0].identifier,
            token: rows[0].token
        };
    } catch (error) {
        console.log(error);
    }
}
