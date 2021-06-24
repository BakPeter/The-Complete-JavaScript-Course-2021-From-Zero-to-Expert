'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (move, i) {
    const type = move < 0 ? 'withdrawal' : 'deposit';
    const htmlRow = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${Math.abs(move)}€</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', htmlRow);
  });
};
// displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcultaeDisplaySummary = function (account) {
  const income = account.movements
    .filter(income => income > 0)
    .reduce((acc, income) => (acc += income), 0);
  labelSumIn.textContent = `${income}€`;

  const outcome = movements
    .filter(outcome => outcome < 0)
    .reduce((acc, income) => (acc += income), 0);
  labelSumOut.textContent = `${outcome}€`;

  const intrest = movements
    .filter(value => value > 0)
    .map(value => (value * account.interestRate) / 100)
    .filter(intrest => intrest > 1)
    .reduce((acc, intrest) => (acc += intrest), 0);
  labelSumInterest.textContent = `${intrest}€`;
};
// calcultaeDisplaySummary(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
// console.log(accounts);

let currAccount;

// Event handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  let inputUserName = inputLoginUsername.value;
  let inputUserPin = Number(inputLoginPin.value);

  console.log(accounts);
  currAccount = accounts.find(account => account.userName === inputUserName);
  console.log(currAccount);
  if (currAccount?.pin === inputUserPin) {
    // console.log('Login');
    containerApp.style.opacity = 100;

    labelWelcome.textContent = `Welcome back, ${
      currAccount.owner.split(' ')[0]
    }`;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    displayMovements(currAccount.movements);
    calcDisplayBalance(currAccount.movements);
    calcultaeDisplaySummary(currAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// movements.forEach(function (i, mov, arr) {
//   console.log(`${mov}\n${i}\n${arr}`);
// });

// const movementsMaped = movements.map(function (currValue) {
//   return currValue * 2;
// });
// const movementsMaped = movements.map(currValue => currValue * 2);
// // console.log(movements);
// console.log(movementsMaped);

//===================================================
//===================================================
//challenge 2

//if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// const calcAvgHumanAge = function (dogsAges) {
//   let humanAges = dogsAges.map(function (dogAge) {
//     if (dogAge <= 2) {
//       return 2 * dogAge;
//     } else {
//       return 16 + dogAge * 4;
//     }
//   });

//   //   humanAges = humanAges.map(age => (age >= 18 ? age : undefined));
//   humanAges = humanAges.filter(age => age >= 18);
//   let avg = humanAges.reduce((acc, age) => (acc += age), 0) / humanAges.length;

//   return { ages: humanAges, avarge: avg };
// };
// console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]));

//===================================================
//===================================================
// //challenge 3
// const calcAvgHumanAge = humanAges =>
//   humanAges
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => (acc += age / arr.length), 0);

// console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]));

console.log(movements.sort((a, b) => b - a));

let x = { length: 7 };
console.log(x);
