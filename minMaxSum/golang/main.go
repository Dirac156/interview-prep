package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strconv"
    "strings"
)

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

func miniMaxSum(arr []int32) {
    // Write your code here
    var max, min int64;
    
    for i := 0; i < len(arr); i++ {
        var sum int64 = 0;
        for j := 0; j < len(arr); j++ {
            if i != j {
                sum+= int64(arr[j])
            }
        }
        if (i == 0) {
            max = sum
            min = sum
        } else if sum < min {
            min = sum
        } else if sum > max {
            max = sum
        }
    }
    fmt.Printf("%d %d\n", min, max)
}

func main() {}