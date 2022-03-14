class MergeSort {
  static sort(originArray: number[]): number[] {
    const arrayLength = originArray.length;

    if (arrayLength <= 1) {
      return originArray;
    }

    const middle = Math.ceil(arrayLength / 2);

    const leftArray = originArray.slice(0, middle);
    const rightArray = originArray.slice(middle, arrayLength);

    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    return this.mergeSortedArray(leftSortedArray, rightSortedArray);
  }

  private static mergeSortedArray(
    leftArray: number[],
    rightArray: number[]
  ): number[] {
    const sortedArray = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        sortedArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }

    return [
      ...sortedArray,
      ...leftArray.slice(leftIndex),
      ...rightArray.slice(rightIndex),
    ];
  }
}

const arr = [5, 4, 3, 2, 1];

console.log(MergeSort.sort(arr));
