const Challenges = require('./challenges.json')

const fs = require('fs/promises');

async function example() {
  try {
    let updateChallenges = Challenges
    let index = 0
    for (let property in updateChallenges) {
        updateChallenges[property].refNumber = index
        index++
    }
    console.log(JSON.stringify(updateChallenges))
    //await fs.writeFile('/Challenges2.json', "AAA");
  } catch (err) {
    console.log(err);
  }
}
example();