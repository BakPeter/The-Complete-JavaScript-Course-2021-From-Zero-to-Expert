'use strict';
// alert("myscript")
// console.log(this);

// const x = {
//   y: 10,
//   calcFunc: function () {
//     console.log(10 * 3);
//     return 10 * 2;
//   },
// };

// const z = {
//   y: 20,
// };
// z.calcFunc = x.calcFunc;

const classT = {
  f1: function () {
    console.log(this);
    console.log(arguments);
  },
  f2: function () {
    console.log(this);
    console.log(arguments);
  },
  f3: (a, b, c) => {
    // console.log(arguments);
    console.log(a, b, c);

    console.log(this);
  },
};
classT.f1(1, 2, 32);
classT.f2(true, 'str');
classT.f3('str' + 1);
