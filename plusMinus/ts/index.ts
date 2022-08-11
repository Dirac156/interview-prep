'use strict';

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    let NumbZ: number = 0;
    let NumbP: number = 0;
    let NumbN: number = 0;

    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === 0) NumbZ++;
        else if (arr[i] > 0) NumbP++;
        else NumbN++;
    }
    console.log((NumbP/arr.length).toFixed(6))
    console.log((NumbN/arr.length).toFixed(6))
    console.log((NumbZ/arr.length).toFixed(6))
}