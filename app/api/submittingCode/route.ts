import { sql } from '@vercel/postgres';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const headersList = headers();
        const user_id = headersList.get('user_id') as string;
        const isUserExist = await sql`SELECT EXISTS(SELECT 1 FROM "user" WHERE id = ${user_id})`;
        if (!isUserExist) return response.status(404).json({ error: 'User not found.' });
        const challenge_id = headersList.get('challenge_id') as number;
        const submitted_time = new Date().toISOString();
        const submitted_code = headersList.get('submitted_code') as string;
        const language = 'javaScript';
        const code_execution_time = 0;

        const isChallengeSubmitted =
            await sql`SELECT EXISTS(SELECT 1 FROM submitted_code WHERE user_id = ${user_id} AND challenge_id = ${challenge_id})`;
        if (isChallengeSubmitted.rows[0].exists) {
            const { rows } =
                await sql`UPDATE submitted_code SET submitted_code = ${submitted_code} WHERE user_id = ${user_id} AND challenge_id = ${challenge_id} RETURNING user_id, challenge_id, submitted_time, submitted_code, language, code_execution_time`;
            return Response.json({ code: rows[0].submitted_code });
        } else {
            const { rows } =
                await sql`INSERT INTO submitted_code (user_id, challenge_id, submitted_time, submitted_code, language, code_execution_time) VALUES (${user_id}, ${challenge_id}, ${submitted_time}, ${submitted_code}, ${language}, ${code_execution_time}) RETURNING user_id, challenge_id, submitted_time, submitted_code, language, code_execution_time`;
            return Response.json({ code: rows[0].submitted_code });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal server error...' }, { status: 500 });
    }
}
