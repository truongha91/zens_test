'use strict';

function miniMaxSum(arr) {
    let tempArr;
    let tempArrSum = [];
    for (let [keyFt, ft] of  Object.entries(arr)) {
        tempArr = [...arr];
        tempArr.splice(keyFt, 1);
        let sum = tempArr.reduce((partialSum, a) => partialSum + a, 0);
        tempArrSum.push(sum);
    }
    let minValue = Math.min(...tempArrSum);
    let maxValue = Math.max(...tempArrSum);
    console.log("---We would print---");
    console.log("Result: " + minValue + " " + maxValue);
}

process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        chunk = chunk.toString();
        const arr = chunk.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        miniMaxSum(arr);
    }
});