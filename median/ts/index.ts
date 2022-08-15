// https://www.hackerrank.com/challenges/find-the-median/problem
function findMedian(arr) {
    const sortedArray = arr.sort();
    const size = arr.length;
    // If number of element in the list is odd
    // Return middle element
    if(size % 2 != 0)
        return sortedArray[(size/2)];
    
    // Return average of the two middle elements
    let a = sortedArray[Math.floor(size/2)];
    let b = sortedArray[Math.floor(size/2)+1];
    
    return (a + b)/2;

}
