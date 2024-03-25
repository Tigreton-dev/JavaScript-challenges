import challenges from './challenges.json';

function getCurrentProblem() {}

export function getCurrentProblemList(category) {
    const list = [];
    for (const challenge in challenges) {
        const currChallenge = challenges[challenge];
        if (currChallenge.category === category) list.push(currChallenge);
    }

    return list;
}

export function getProblemByRefNumber(refNumber) {
    for (const challenge in challenges) {
        const currChallenge = challenges[challenge];
        if (currChallenge.refNumber === refNumber) return currChallenge;
    }
}

export function getProblemByRefName(refName: string) {
    for (const challenge in challenges) {
        const currChallenge = challenges[challenge];
        if (currChallenge.refName === refName) return currChallenge;
    }
}
