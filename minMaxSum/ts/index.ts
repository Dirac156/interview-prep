'use strict';

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    let min: number = 0;
    let max: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        let sum: number = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j]
            }
        }
        
        if (i == 0) {
            max = sum
            min = sum
        } else if (sum > max) {
            max = sum
        } else if (sum < min) {
            min = sum
        }
    }
    
    console.log(`${min} ${max}`);
}
