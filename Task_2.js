var curryFunction = function (func) {

    var argsArray = [];
    var maxSize = func.length;
    return function (argument) {
        argsArray.push(argument);
        if (maxSize == argsArray.length) {
            return func.apply(this, argsArray);
        }
        else {
            return arguments.callee;
        }
    }
}
var testFunctionLine = function (x) {
    return x;
}
var testFunctionSquare = function (x, y) {
    return Math.sqrt(x * x + y * y);
}
var testFunctionCube = function (x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
}