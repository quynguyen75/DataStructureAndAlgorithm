function bubbleSort(originArray: number[]): number[] {
  const array = [...originArray];
  const arrayLength = array.length;

  let swapped;

  for (let i = 0; i < arrayLength; i++) {
    swapped = false;

    console.log(i);

    for (let j = 0; j < arrayLength - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
}

const arr = [15, 2, 15, 2, 3, 1, 8, 3, 5, 2, 7, 3];

console.log(bubbleSort(arr));
