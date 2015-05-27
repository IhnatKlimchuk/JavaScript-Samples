function initLazyFunction(func) {
    var requireArguments = Array.prototype.slice.call(arguments, 1);
    return function () {
        return func.apply(this, requireArguments);
    }
}