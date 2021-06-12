console.log("challenge index")

//#1
// function calculateBmi1(mass, height) {
//     return mass/ height ** 2
// }
// function calculateBmi2(mass, height) {
//     return mass/ (height * height)  
// }

// var bmi1_1 = calculateBmi1(78, 1.69)
// var bmi1_2 = calculateBmi2(78, 1.69)
// console.log("bm1_dataset_1 => " + bmi1_1)
// console.log("bm1_2_dataset_1 => " + bmi1_1)

// var bmi2_1 = calculateBmi1(95, 1.69)
// var bmi2_2 = calculateBmi2(95, 1.88)
// console.log("bmi2_1_dataset_2 ==>" + bmi2_1)
// console.log("bmi2_1_dataset_2 ==> " + bmi2_2)

// var bmi1HeigherBmi2 = bmi1_1 > bmi2_1
// console.log(bmi1HeigherBmi2)
// console.log(bmi1_1 < bmi2_1)


//2
// let msg;
// const bmi1=23, bmi2=40
// if(bmi1 > bmi2) {
//     msg = `bmi1 BMI(${bmi1}) is higher then bmi2 BMI(${bmi2}) `
// } else {
//     msg = `bmi2 BMI(${bmi2}) is higher then bmi1 BMI(${bmi1}) `
// }
// console.log(msg)

// console.log('23' > '20')
// console.log('efer' < 'zefer')

//3
const bill = 430
const tip = bill>=50 && bill<=300 ? bill*0.15 : bill*0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)