function linearSearch(array, search) {
    for (var index = 0; index < array.length; index++) {
        if (array[index] === search) {
            return index;
        }
    }
    return -1;
}
var arr = [2, 5, 12, 6, 2, 6, 8, 3, 5, 7, 5];
console.log(linearSearch(arr, 10)); // -1
console.log(linearSearch(arr, 7)); // 9
