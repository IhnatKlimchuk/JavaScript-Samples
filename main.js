console.log("Run Task 1");
(function () {
    console.log("Test 1 Task 1");
    var resultFunction = partialFunction(testFunction);
    console.log(resultFunction(2, 2, 1) === testFunction(2, 2, 1) ? "Passed" : "Failed");
    console.log("-----------------------------------------------");

    console.log("Test 2 Task 1");
    var resultFunction = partialFunction(testFunction, 2);
    console.log(resultFunction(2, 1) === testFunction(2, 2, 1) ? "Passed" : "Failed");
    console.log("-----------------------------------------------");

    console.log("Test 3 Task 1");
    var resultFunction = partialFunction(testFunction, 2, 2);
    console.log(resultFunction(1) === testFunction(2, 2, 1) ? "Passed" : "Failed");
    console.log("-----------------------------------------------");

    console.log("Test 4 Task 1");
    var resultFunction = partialFunction(testFunction, 2, 2, 1);
    console.log(resultFunction() === testFunction(2, 2, 1) ? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 1 finished");

console.log("Run Task 2");
(function () {
    console.log("Test 1 Task 2");
    var resultFunction = curryFunction(testFunctionLine);
    console.log(resultFunction(2) === testFunctionLine(2) ? "Passed" : "Failed");
    console.log("-----------------------------------------------");

    console.log("Test 2 Task 2");
    var resultFunction = curryFunction(testFunctionSquare);
    console.log(resultFunction(3)(4) === testFunctionSquare(3,4) ? "Passed" : "Failed");
    console.log("-----------------------------------------------");

    console.log("Test 3 Task 2");
    var resultFunction = curryFunction(testFunctionCube);
    console.log(resultFunction(2)(2)(1) === testFunctionCube(2,2,1) ? "Passed" : "Failed");
    console.log("-----------------------------------------------");

})();
console.log("Task 2 finished");

console.log("Run Task 3");
(function () {
    console.log("Test 1 Task 3");
    var array = [1, 2, 3, 4];
    var initValue = 1;
    //function = (currentValue * currentValue) - previousValue * index;
    // first call (1, 1, 0, [1,2,3,4]) return 1 * 1 - 1 * 0 = 1
    // second call (1, 2, 1, [1,2,3,4]) return 2 * 2 - 1 * 1 = 3
    // third call (3, 3, 2, [1,2,3,4]) return 3 * 3 - 3 * 2 = 3
    // fours call (3, 4, 3, [1,2,3,4]) return 4 * 4 - 3 * 3 = 7
    // return must be 7;
    console.log(linearFoldFunction(array, foldingFunctionCallback, initValue) == 7 ? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 3 finished");

console.log("Run Task 4");
(function () {
    console.log("Test 1 Task 4");
    var initValue = 0;
    var array = linearUnfoldFunction(unfoldingFunctionCallback, initValue)
    var passed = true;
    for (var i = initValue; i < array.length; i++) {
        passed = passed && array[i] == i * i;
    }
    console.log(passed ? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 4 finished");

console.log("Run Task 5");
(function () {
    console.log("Test 1 Task 5");
    var initArray = [1, 2, 3, 4];
    var resultArray = mapFunction(mapFunctionCallback, initArray)
    var passed = resultArray.length === initArray.length;
    for (var i = initArray[0]; i < initArray.length; i++) {
        passed = passed && resultArray[i] === initArray[i] * initArray[i];
    }
    console.log(passed ? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 5 finished");


console.log("Run Task 6");
(function () {
    console.log("Test 1 Task 6");
    var initArray = [1, 2, 3, 4, 5 ,6 ,7,8];
    var resultArray = filterFunction(filterFunctionCallback, initArray)
    var passed = true;
    for (var i = 0; i < resultArray.length; i++) {
        passed = passed && resultArray[i] === i * 2 + 1;
    }
    console.log(passed ? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 6 finished");

console.log("Run Task 7");
(function () {
    console.log("Test 1 Task 7");
    var array = [1, 2, 3, 4, 235, 23, -100, 0, 0, 6];
    var initValue = 0;
    var avgFunctionCallback = function (previousValue, currentValue, index, array) {
        if (index == array.length - 1) {
            return (previousValue + currentValue) / array.length;
        }
        else {
            return previousValue + currentValue;
        }
    }
    console.log(linearFoldFunction(array, avgFunctionCallback, initValue) == 174 / 10? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 7 finished");

console.log("Run Task 8");
(function () {
    console.log("Test 1 Task 8");
    var randomGeneratorFunctionCallback = function (currentValue) {
        if (currentValue < 10) {
            return {
                state: currentValue + 1,
                element: Math.random()
            }
        }
        else return false;
    }
    var array = linearUnfoldFunction(randomGeneratorFunctionCallback,0)
    var initValue = 0;
    var sumFunctionCallback = function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    }
    linearFoldFunction(array, sumFunctionCallback, initValue);
    console.log("Passed");
    console.log("-----------------------------------------------");
})();
console.log("Task 8 finished");

console.log("Run Task 9");
(function () {
    console.log("Test 1 Task 10");
    var array = [1, 2, 3, 4, 5, 6, 3];
    
    console.log(firstFilterFunction(firstFilterFunctionCallback, array) === 3 ? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 9 finished");

console.log("Run Task 10");
(function () {
    console.log("Test 1 Task 10");
    var sumFunction = function () {
        var sum = 0;
        for (var key in arguments)
        {
            sum += arguments[key];
        }
        return sum;
    }
    var lazy = initLazyFunction(sumFunction, 1, 2, 3);
    console.log(lazy() === 6 ? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 10 finished");



console.log("Run Task 11");
(function () {
    console.log("Test 1 Task 11");
    var cachSavingObject = { memoizationCreatorFunction: memoizationCreatorFunction };
    //for test use cachSavingObject otherwize cache will save in global(window)
    var sqrFunction = function (arg) {
        return arg * arg;
    }
    var factorialFunction = function (arg) {
        function rec (arg) {
            if (arg > 1) {
                return arg * rec(arg - 1);
            }
            else {
                return 1;
            }
        };
        return rec(arg);
    }
    var improvedSqrFunction = cachSavingObject.memoizationCreatorFunction(sqrFunction);
    var improvedFactorialFunction = cachSavingObject.memoizationCreatorFunction(factorialFunction);
    console.log(99 * 99 === improvedSqrFunction(99) ? "Passed" : "Failed");
    console.log("-----------------------------------------------");
})();
console.log("Task 11 finished");



