var memoizationCreatorFunction = function (func) {
    var me = this;
    if(!me.cache){
        me.cache = [];
    }
    var index = me.cache.length;
    //use array element for each call cause functions can be anonymous (without names for key value)
    me.cache.push({});
    var returnFunction = function  (arg) {
        if (!me.cache[index][arg]) {
            me.cache[index][arg] = func(arg);
        }
        return me.cache[index][arg];
    };
    return returnFunction;
}