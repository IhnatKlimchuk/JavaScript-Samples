var linearUnfoldFunction = function (callback, initialState) {
    var resultArray = [];
    var callbackResult = callback(initialState);
    while (callbackResult !== false) {
        resultArray.push(callbackResult.element);
        callbackResult = callback(callbackResult.state);
    }
    return resultArray;
}
var unfoldingFunctionCallback = function (currentValue) {
    if (currentValue > 10)
        return false;
    return {
        state: currentValue + 1,
        element: currentValue * currentValue
    }
}