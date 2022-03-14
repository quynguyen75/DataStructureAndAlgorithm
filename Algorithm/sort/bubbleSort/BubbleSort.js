var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function bubbleSort(originArray) {
    var _a;
    var array = __spreadArray([], originArray, true);
    var arrayLength = array.length;
    var swapped;
    for (var i = 0; i < arrayLength; i++) {
        swapped = false;
        console.log(i);
        for (var j = 0; j < arrayLength - i; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return array;
}
var arr = [15, 2, 15, 2, 3, 1, 8, 3, 5, 2, 7, 3];
console.log(bubbleSort(arr));
