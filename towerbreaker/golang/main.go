package main

/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

func towerBreakers(n int32, m int32) int32 {
    // Write your code here
    
    if m == 1 || n % 2 == 0 {
        return 2
    } else {
        return 1
    }
}

func main() {}