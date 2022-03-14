var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MergeSort = /** @class */ (function () {
    function MergeSort() {
    }
    MergeSort.sort = function (originArray) {
        var arrayLength = originArray.length;
        if (arrayLength <= 1) {
            return originArray;
        }
        var middle = Math.ceil(arrayLength / 2);
        var leftArray = originArray.slice(0, middle);
        var rightArray = originArray.slice(middle, arrayLength);
        var leftSortedArray = this.sort(leftArray);
        var rightSortedArray = this.sort(rightArray);
        return this.mergeSortedArray(leftSortedArray, rightSortedArray);
    };
    MergeSort.mergeSortedArray = function (leftArray, rightArray) {
        var sortedArray = [];
        console.log(leftArray, rightArray);
        var leftIndex = 0;
        var rightIndex = 0;
        while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
            if (leftArray[leftIndex] < rightArray[rightIndex]) {
                sortedArray.push(leftArray[leftIndex]);
                leftIndex++;
            }
            else {
                sortedArray.push(rightArray[rightIndex]);
                rightIndex++;
            }
        }
        return __spreadArray(__spreadArray(__spreadArray([], sortedArray, true), leftArray.slice(leftIndex), true), rightArray.slice(rightIndex), true);
    };
    return MergeSort;
}());
var arr = [5, 4, 3, 2, 1];
console.log(MergeSort.sort(arr));
