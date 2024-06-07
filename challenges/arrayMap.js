// function subarraySumExists(arr, target) {
//     const cumSumMap = new Map();
//     let cumSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         cumSum += arr[i];

//         if (cumSum === target) {
//             return true;
//         }

//         if (cumSumMap.has(cumSum - target)) {
//             return true;
//         }

//         cumSumMap.set(cumSum, i);
//     }

//     return false;
// }

// // Example usage:
// const arr = [4, 2, 7, 1, 9, 5];
// const target = 17;
// console.log(subarraySumExists(arr, target));  // Output: true

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function arrayContains(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}

function subarraySumExists(arr, target) {
    let cumSumMap = {};
    let cumSum = 0;

    for (let i = 0; i < arr.length; i++) {
        cumSum += arr[i];

        if (cumSum === target) {
            return true;
        }

        if (cumSumMap[cumSum - target] !== undefined) {
            return true;
        }

        cumSumMap[cumSum] = i;
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(subarraySumExists(arr, target));  // Output: true
