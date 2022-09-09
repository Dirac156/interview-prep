/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n: number, m: number): number {
    // Write your code here
    const winner: number = m == 1 || n%2 == 0 ? 2 : 1;
    return winner;
}