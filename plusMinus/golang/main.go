package main

import "fmt"

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

func plusMinus(arr []int32) {
    // Write your code here
    var numbP, numbN, numbZ int = 0, 0, 0;
    for i := 0; i < len(arr); i++ {
        if arr[i] == 0 { 
            numbZ++ 
        } else if arr[i] > 0 { 
            numbP++ 
        } else { numbN++ }
    }

    fmt.Printf("%.6f\n", float32(numbP) / float32(len(arr)))
    fmt.Printf("%.6f\n", float32(numbN) / float32(len(arr)))
    fmt.Printf("%.6f\n", float32(numbZ) / float32(len(arr)))
    
}

func main(){}