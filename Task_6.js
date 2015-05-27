var filterFunction = function (callback, array) {
    var resultArray = [];
    for (var key in array) {
        callback(array[key]) && resultArray.push(array[key]);
    }
    return resultArray;
}
var filterFunctionCallback = function (value) {
    return value % 2;
}