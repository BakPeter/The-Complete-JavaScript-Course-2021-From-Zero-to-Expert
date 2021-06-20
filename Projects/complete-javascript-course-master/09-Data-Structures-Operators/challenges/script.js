'use strict';
// alert('Section 9');

// const arr = [[4, 5, 6], 1, 2, true, [4, 5], false, ['str1', 'str2'], 'str3'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(typeof arr[i], arr[i]);

//   if (typeof arr[i] === typeof Array) {
//     console.log(typeof arr[i], typeof Array, arr[i]);
//   } else {
//     console.log(typeof arr[i], arr[i]);
//   }
// }

// console.log(arr);
// const [[a1, a2, a3], b] = arr;
// console.log(a1, a2, a3, b);

//=================================================================================
//=================================================================================
//Challenges

//=================================================================================
//=================================================================================
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const lines = [...text.split('\n')];
  console.log(lines);
  const splitedLines = [];
  for (const line of lines) {
    const prossecedLine = line.trim().split('_');

    if (prossecedLine.length > 1) {
      for (let i = 1; i < prossecedLine.length; i++) {
        prossecedLine[i] =
          prossecedLine[i][0].toUpperCase() + prossecedLine[i].slice(1);
      }
    }
    console.log(prossecedLine);
    // prossecedLine.join();

    splitedLines.push(prossecedLine.join('').padEnd());
  }

  console.log(splitedLines);
});
//=================================================================================
//=================================================================================
// Coding Challenge #3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// console.log(gameEvents);
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL
// for (const [minute, event] of gameEvents) {
//   console.log(
//     `[${minute <= 45 ? 'FIRST' : 'SECOND'} HALF] ${minute} : ${event}`
//   );
// }
//=================================================================================
//=================================================================================
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// Coding Challenge #2
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [ind, name] of game.scored.entries()) {
//   console.log(`Goal nummber ${ind + 1} scorde by ${name}`);
// }
// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds);
// console.log(odds);
// let sum = 0;
// for (const odd of odds) {
//   sum += odd;
// }
// const avg = sum / odds.length;
// console.log(avg);
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// const entries = Object.entries(game.odds);
// console.log(entries);
// for (const [key, odd] of entries) {
//   // console.log(key, odd);
//   console.log(`Odd of victory ${game[key] ?? 'DRAW'}: ${odd}`);
// }

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// const scorers = {};
// for (const scorer of game.scored) {
//   // console.log(scorer);
//   scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
// }
// console.log(scorers);

//=================================================================================
//=================================================================================
//Challenge 1
// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// // console.log(game.players);
// console.log(players1, players2);
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // const { team1, x: draw, team2 } = { ...game.odds };
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// function printGoals(score, numberOfPlayers, ...players) {
//   for (let i = 0; i < numberOfPlayers; i++) {
//     console.log(score, players[i]);
//   }
// }
// printGoals(game.score, game.scored.length, ...game.scored);
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// const msg =
//   (game.odds.team1 < game.odds.team2 && game.team1) ||
//   (game.odds.team1 > game.odds.team2 && game.team2) ||
//   'draw';
// console.log(msg);

// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// //=================================================================================
// //=================================================================================
// for (const [ind, el] of allPlayers.entries()) {
//   console.log(`${ind} : ${el}`);
// }
