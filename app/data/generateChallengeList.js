const challenges = require('./challenges.json');
const fs = require('fs');

const list = {};

function generateList() {
    for (const challenge in challenges) {
        const currentChallenge = challenges[challenge];
        const dataStructure = currentChallenge.category;
        const difficulty = currentChallenge.difficulty;
        const title = currentChallenge.title;
        if (dataStructure in list) {
            if (difficulty in list[dataStructure]) {
                list[dataStructure][difficulty] = [...list[dataStructure][difficulty], [title, difficulty]];
            } else {
                list[dataStructure][difficulty] = [[title, difficulty]];
            }
        } else {
            list[dataStructure] = {};
            list[dataStructure][difficulty] = [[title, difficulty]];
        }
        'All' in list[dataStructure]
            ? (list[dataStructure].All = [...list[dataStructure].All, [title, difficulty]])
            : (list[dataStructure].All = [[title, difficulty]]);
// ----------------
        if ('All' in list) {
            if (difficulty in list.All) {
                list.All[difficulty] = [...list.All[difficulty], [title, difficulty]];
            } else {
                list.All[difficulty] = [[title, difficulty]];
            }
        } else {
            list.All = {};
            list.All[difficulty] = [[title, difficulty]];
        }
        'All' in list.All
            ? (list.All.All = [...list.All.All, [title, difficulty]])
            : (list.All.All = [[title, difficulty]]);
    }

    fs.writeFile('challengeList.json', JSON.stringify(list, null, 2), err => {
        if (err) throw err;
        console.log('El archivo ha sido guardado.');
    });
}

generateList();
