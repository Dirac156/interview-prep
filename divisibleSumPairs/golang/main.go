package main

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

func divisibleSumPairs(n int32, k int32, ar []int32) int32 {
    var numb, i, j int32 = 0, 0, 0
    // Get i,j where i is always less than j
    for i = 0; i < n - 1; i++ {
        for j = i + 1; j < n; j++ {
            // i will always be less than j
            if (ar[i] + ar[j]) % k == 0 {
                numb++
            }
        }
    }
    return numb
}

func main(){}

