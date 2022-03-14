function binarySearch(sortedArray, search) {
    var startIndex = 0;
    var endIndex = sortedArray.length - 1;
    while (startIndex <= endIndex) {
        var middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        console.log(startIndex, middleIndex, endIndex);
        if (sortedArray[middleIndex] === search) {
            return middleIndex;
        }
        else if (sortedArray[middleIndex] < search) {
            startIndex = middleIndex + 1;
        }
        else {
            endIndex = middleIndex - 1;
        }
    }
    return -1;
}
var array = [1, 2, 3, 4, 4, 5, 5, 6, 6];
console.log(binarySearch(array, 3));
