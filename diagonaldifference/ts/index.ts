'use strict';

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    let size = arr.length - 1;
    let diagonalA: number = 0; // (index of array, j)
    let diagonalB: number = 0; // (index of array, size of array - j)
    
    // sqaure matrix: nbColumn = nbRows
    for (let i = 0; i < arr.length; i++) {
        // row
        diagonalA += arr[i][i]
        diagonalB += arr[i][size - i]
    }
    return Math.abs(diagonalB - diagonalA);
}