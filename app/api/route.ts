import { headers } from 'next/headers';
import { list } from '@vercel/blob';
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
    const allBlobs = await list();
    const getProblesResponse = await fetch(allBlobs.blobs[0].downloadUrl);
    const problems = await getProblesResponse.json();
    const headersList = headers();
    const problemNameId = headersList.get('problemNameId') as string;
    const user_id = headersList.get('user_id') as string;
    for (const challenge in problems) {
        const currChallenge = problems[challenge];
        if (currChallenge.refName === problemNameId) {
            if (user_id === 'null') return Response.json({ ...currChallenge });
            const isChallengeSubmitted =
                await sql`SELECT submitted_code FROM submitted_code WHERE user_id = ${user_id} AND challenge_id = ${currChallenge.refNumber}`;
            if (isChallengeSubmitted.rows.length && isChallengeSubmitted.rows[0].submitted_code) {
                return Response.json({ ...currChallenge, submittedCode: isChallengeSubmitted.rows[0].submitted_code });
            } else {
                return Response.json({ ...currChallenge });
            }
        }
    }
}
