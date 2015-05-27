var mapFunction = function (callback, array) {
    var resultArray = [];
    for (var key in array) {
        resultArray.push(callback(array[key]));
    }
    return resultArray;
    
}
var mapFunctionCallback = function (value) {
    return value * value;
}