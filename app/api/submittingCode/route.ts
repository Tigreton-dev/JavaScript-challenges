import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET(req: Request) {}

export async function POST(req: Request) {
    try {
        const headersList = headers();
        const user_id = headersList.get('user_id') as string;
        const challenge_id = headersList.get('challenge_id') as string;
        const submitted_code = headersList.get('submitted_code') as string;
        const raw = await kv.set(`challenge:${user_id}:${challenge_id}`, submitted_code);
        return NextResponse.json({ message: raw }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal server error...' }, { status: 500 });
    }
}
