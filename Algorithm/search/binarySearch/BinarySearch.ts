function binarySearch(sortedArray: number[], search: number): number {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    console.log(startIndex, middleIndex, endIndex);

    if (sortedArray[middleIndex] === search) {
      return middleIndex;
    } else if (sortedArray[middleIndex] < search) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

const array = [1, 2, 3, 4, 4, 5, 5, 6, 6];

console.log(binarySearch(array, 3));
