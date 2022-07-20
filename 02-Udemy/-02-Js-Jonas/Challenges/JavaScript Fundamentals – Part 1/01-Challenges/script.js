/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

//Solution:

// Dataset 1

let markMass1 = 78;
let markHeight1 = 1.69;

let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / markHeight1 ** 2;
let johnBMI1 = johnMass1 / johnHeight1 ** 2;

let markHigherBMI1 = markBMI1 > johnBMI1;

// Displaying output properly:
if (markHigherBMI1) {
  console.log("Mark has a higher BMI than John");
} else {
  console.log("John has a higher BMI than Mark");
}

// Dataset 2

let markMass2 = 95;
let markHeight2 = 1.88;

let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;

let markHigherBMI2 = markBMI2 > johnBMI2;

// Displaying output properly:

if (markHigherBMI2) {
  console.log("Mark has a higher BMI than John");
} else {
  console.log("John has a higher BMI than Mark");
}
