package main

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

func lonelyinteger(a []int32) int32 {
    // Write your code here
    var isduplicate bool = false;
    var uniqueItem int32;

    for i := 0; i < len(a); i++ {
        uniqueItem = a[i]
        for j := 0; j < len(a); j++ {
            if a[i] == a[j] && i != j {
                isduplicate = true
            }
        }
        
        if isduplicate == false {
            break
        } else {
            isduplicate = false
        }
    }
    return uniqueItem
}

func main() {}