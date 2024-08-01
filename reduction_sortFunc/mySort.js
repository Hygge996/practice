/**
 * 使用快速排序算法对数组进行排序
 *
 * @param {T[]} arr - 要排序的数组
 * @param {(a: T, b: T) => number} compareFunction - 用于比较两个元素的函数
 * @returns {T[]} - 排序后的数组
 */
function quickSort(arr, compareFunction) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[Math.floor(arr.length / 2)];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2))
            continue; // 跳过 pivot
        var comparison = compareFunction(arr[i], pivot);
        if (comparison < 0) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left, compareFunction).concat(pivot, quickSort(right, compareFunction));
}
/**
 * 对数组进行排序的方法
 *
 * @param {(a: T, b: T) => number} [compareFunction] - 用于比较两个元素的函数，如果未提供则按字典顺序排序
 * @returns {T[]} - 排序后的原数组
 */
Array.prototype.mySort = function (compareFunction) {
    if (typeof compareFunction !== 'function') {
        compareFunction = function (a, b) {
            a = String(a);
            b = String(b);
            return a < b ? -1 : a > b ? 1 : 0;
        };
    }
    var sortedArray = quickSort(this, compareFunction);
    // 将排序后的数组元素复制回原数组
    for (var i = 0; i < sortedArray.length; i++) {
        this[i] = sortedArray[i];
    }
    return this;
};
// 示例用法
var array = [5, 3, 8, 4, 2];
array.mySort();
console.log(array); // 输出: [2, 3, 4, 5, 8]
// 使用自定义比较函数
var array2 = [5, 3, 8, 4, 2];
array2.mySort(function (a, b) { return b - a; });
console.log(array2); // 输出: [8, 5, 4, 3, 2]
