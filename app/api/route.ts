import { headers } from 'next/headers';
import { list } from '@vercel/blob';

export async function GET(request: Request) {
    const allBlobs = await list();
    const getProblesResponse = await fetch(allBlobs.blobs[0].downloadUrl);
    const problems = await getProblesResponse.json();
    const headersList = headers();
    const problemNameId = headersList.get('problemNameId') as string;
    for (const challenge in problems) {
        const currChallenge = problems[challenge];
        if (currChallenge.refName === problemNameId) {
            return Response.json({ ...currChallenge });
        }
    }
}
