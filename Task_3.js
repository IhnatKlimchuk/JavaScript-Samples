var linearFoldFunction = function (array, callback, initialValue) {
    var previousValue = initialValue ? initialValue : 0;
    for (var i = 0; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }
    return previousValue;
}
var foldingFunctionCallback = function (previousValue, currentValue, index, array) {
    return (currentValue * currentValue) - previousValue * index;
}