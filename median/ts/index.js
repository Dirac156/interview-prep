// https://www.hackerrank.com/challenges/find-the-median/problem
function findMedian(arr) {
    var sortedArray = arr.sort();
    var size = arr.length;
    // If number of element in the list is odd
    // Return middle element
    if (size % 2 != 0)
        return sortedArray[Math.floor((size / 2))];
    // Return average of the two middle elements
    var a = sortedArray[(size / 2) - 1];
    var b = sortedArray[(size / 2)];
    return (a + b) / 2;
}
console.log(findMedian([0, 1, 2, 3, 4, 5, 6, 7]));
