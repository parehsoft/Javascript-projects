/*
    Js has 7 build in types. 1 object and 6 primitives.
    Primitive type represents a single immutable value. JS has 6 primitives.
        -> boolean (true, false)
        -> undefined (undefined) - Was declared, but never set to any value.
        -> null (null)
        -> number (-) - Always represented under the hood as doubleprecision 64bit floating point.
                      - JS doesn't have an integer type. Integer is just a subset of double.
        -> string (-) - Single '', or double "" quotes can be used. Both are 100% legal.
        -> symbol (-) - New and not fully supported yet.
    Object in JS is collection of name:value pairs.
*/

var x;
console.log(x);

if (x == undefined) {
    console.log("x is undefined.");
}

x = 5;
if (x == undefined) {
    console.log("x is undefined.");
}
else {
    console.log("x has been defined.");
}

console.log(y); // Error: Variable y is not defined. That is different as undefined. In this case, y was never declared. Undefined means, it was declared, but no value was ever assigned to it.
