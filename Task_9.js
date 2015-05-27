var firstFilterFunction = function (callback, array) {
    for (var key in array) {
        if (callback(array[key])) {
            return array[key];
        }
    }
    return null;

}
var firstFilterFunctionCallback = function (value) {
    if (value === 3)
        return true;
    else
        return false;
}