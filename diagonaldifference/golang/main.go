package main

import "math"

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

func diagonalDifference(arr [][]int32) int32 {
    var size int = len(arr) - 1
    var diagonalA, diagonalB int32 = 0, 0
    
    for i := 0; i <= size; i++ {
        diagonalA += arr[i][i]
        diagonalB += arr[i][size - i]
    }
    
    return int32(math.Abs(float64(diagonalA) - float64(diagonalB)))

}
