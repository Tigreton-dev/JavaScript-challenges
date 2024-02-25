import { sql } from '@vercel/postgres';
import { Account } from 'next-auth';
import { Adapter, AdapterAccount, AdapterSession, AdapterUser, VerificationToken } from 'next-auth/adapters';

export async function createUser(user: Omit<AdapterUser, 'id'>): Promise<AdapterUser> {
    try {
        const userExist = await getUser(user.id);
        if (userExist) return true;
        const { rows } =
            await sql`INSERT INTO "user" (Id, Name, Email, Image) VALUES (${user.id}, ${user.name}, ${user.email}, ${user.image}) RETURNING id, name, email, email_verified, image`;
        const newUser: AdapterUser = {
            ...rows[0],
            id: rows[0].id.toString(),
            emailVerified: rows[0].email_verified,
            email: rows[0].email
        };
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

async function getUser(id: string) {
    try {
        const { rows } = await sql`SELECT * FROM "user" WHERE id = ${id};`;
        return {
            ...rows[0],
            id: rows[0].id.toString(),
            emailVerified: rows[0].email_verified,
            email: rows[0].email
        };
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
        const { rows } = await sql`
        INSERT INTO account (user_id, provider_id, provider_type, provider_account_id, refresh_token, access_token, expires_at, token_type, scope, id_token)
        VALUES (${userId}, ${providerId}, ${providerType}, ${providerAccountId}, ${refreshToken}, ${accessToken}, ${expiresAt}, ${tokenType}, ${scope}, ${idToken})
        RETURNING id;
      `;
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function createToken({ expires, session_token, user_id }) {
    try {
        const { rows } =
            await sql`INSERT INTO auth_session (expires, session_token, user_id) VALUES (${expires}, ${session_token}, ${user_id}) RETURNING user;
      `;
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
