// Primitives are passed by value:
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 5;
console.log("After b update:");
console.log("a: " + a);
console.log("b: " + b);

// Objects are passed by reference:
// (Under the hood is as value, but above the hood is as reference.)
var c = { x: 7 };
var d = c;
console.log(c);
console.log(d);
d.x = 5;
console.log("After d.x update:");
console.log(c);
console.log(d);

// Objects inside of Functions:
console.log("---- Objects inside of Functions: ---- (Passed by reference.)");
function ChangeObject(object) {
    console.log("Inside of ChangeObject function.");
    console.log("before:");
    console.log(object);
    object.x = 5;
    console.log("after:");
    console.log(object);
    console.log("OUTside of ChangeObject function.");
}

var value = { x: 7 };
console.log("Orig value:");
console.log(value);
ChangeObject(value);
console.log("After ChangeObject function:");
console.log(value);