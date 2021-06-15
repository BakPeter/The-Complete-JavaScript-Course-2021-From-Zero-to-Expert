'use strict';
// alert('Section 5 - How to navigate this course');

// let x = 9;

// if (x === 23) console.log(23);
// if (x === 23) console.log(23);

// if (x === 23) console.log(23);

// const calcAge = (year) => year + 1;
// console.log('edf');
// console.log();
// console.log(calcAge);
// console.log(calcAge);
// console.log('wfdwfewf');
// console.log('wfdwfewf');
// console.log('wfdwfewf');
// console.log('wfdwfewf');
// let x = 4;
// const measureKelvin = function () {
//   const measurment = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degree in celsius')),
//   };

//   console.log(measurment);

//   //   console.log(measurment.value);
//   //   console.warn(measurment.value);
//   //   console.error(measurment.value);

//   const kelvin = measurment.value + 273;

//   return kelvin;
// };

// console.log(measureKelvin());

function printForcast(arr) {
  let retVal = '...';
  for (let i = 0; i < arr.length; i++) {
    retVal += ` ${arr[i]} ºC in ${i + 1} days ...`;
  }

  //   retVal += ' ...';

  return retVal;
}

const TEST_DATA_1 = [1, 21, 23];
const TEST_DATA_2 = [12, 5, -5, 0, 4];
console.log(printForcast(TEST_DATA_1));
console.log(printForcast(TEST_DATA_2));
