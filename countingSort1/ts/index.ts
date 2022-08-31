'use strict';
/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr: number[]): number[] {
    // Write your code here
    let array: number[] = new Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) {
        array[arr[i]] += 1;
    }
    return array;
}