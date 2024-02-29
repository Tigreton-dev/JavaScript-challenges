import { sql } from '@vercel/postgres';
import { list } from '@vercel/blob';

export async function GET(request: Request) {
    try {
        const allBlobs = await list();
        if (!allBlobs.blobs.length) return response.status(404).json({ error: 'No blobs found.' });
        const getChallengesResponse = await fetch(allBlobs.blobs[0].downloadUrl);
        const allChallenges = await getChallengesResponse.json();
        for (const challenge in allChallenges) {
            if (allChallenges.hasOwnProperty(challenge)) {
                const currentChallenge = allChallenges[challenge];
                const ref_name = currentChallenge.refName;
                const ref_number = currentChallenge.refNumber;
                const title = currentChallenge.title;
                const category = currentChallenge.category;
                const difficulty = currentChallenge.difficulty;
                const description = currentChallenge.description;
                const { rows } =
                    await sql`INSERT INTO challenges (ref_name, ref_number, title, category, difficulty, description) VALUES (${ref_name}, ${ref_number}, ${title}, ${category}, ${difficulty}, ${description}) RETURNING ref_name, ref_number, title, category, difficulty, description`;
                console.log(rows);
            }
        }
        const result = { result: true };
        return Response.json({ result });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
