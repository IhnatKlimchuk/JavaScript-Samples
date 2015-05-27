var partialFunction = function (func) {
    
    var argsArray = Array.prototype.slice.call(arguments, 1);
    return function () {
        return func.apply(this, argsArray.concat(Array.prototype.slice.call(arguments)));
    }
}
var testFunction = function (x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
}