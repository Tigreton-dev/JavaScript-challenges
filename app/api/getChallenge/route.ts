import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import challenges from '../../data/challenges.json';

export async function GET(req: Request) {
    try {
        const headersList = headers();
        const user_id = headersList.get('user_id') as string;
        const challenge_id = headersList.get('challenge_id') as string;
        const currentChallenge = challenges[challenge_id];
        const submittedCode = false; // user_id !== null ? await kv.get(`challenge:${user_id}:${challenge_id}`) : false;
        if (submittedCode !== null && submittedCode !== false) {
            currentChallenge.submittedCode = submittedCode.replace(/\\n/g, '\n');
        } else {
            currentChallenge.submittedCode = false;
        }
        return NextResponse.json({ ...currentChallenge }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal server error...' }, { status: 500 });
    }
}
