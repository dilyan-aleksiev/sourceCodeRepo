// Bomb Numbers
// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power.
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right.Detonations are performed from left to right and all detonated numbers disappear.
// The input contains two arrays of numbers.The first contains the initial sequence and the second contains the special bomb number and it 's power.
// The output is the sum of the remaining elements in the sequence.

function bombNumbers(arr1, arr2) {

    let bombNum = arr2.shift();
    let detonatedNums = arr2.shift();
    let BD = bombNum - detonatedNums;
    let XD = (2 * detonatedNums + 1);
    let length = arr1.length;

    for (let i = 0; i < arr1.length; i++) {
        let currentNum = arr1[i];
        if (currentNum == bombNum) {
            if (BD <= 0) {
                BD = 0;
            }
            if (XD >= arr1.length) {
                XD = length;
            }
            arr1.splice((Math.max((i - detonatedNums), 0)), XD);
        }
    }

    let sum = 0;

    for (el of arr1) {
        sum += el;
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);