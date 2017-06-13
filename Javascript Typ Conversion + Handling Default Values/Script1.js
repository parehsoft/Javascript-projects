var x = "4", y = 4;

// *** Regular Equality
console.log("Regular Equality:");
if (x == y) { // Type conversion will occur.
    console.log("String x = \"4\" is equal to numeric y = 4 .");
}
else {
    console.log("String x = \"4\" is NOT equal to numeric y = 4 .");
}

// *** Strict Equality
console.log("Strict Equality:");
if (x === y) { // Type conversion will NOT occur.
    console.log("String x = \"4\" is equal to numeric y = 4 .");
}
else {
    console.log("String x = \"4\" is NOT equal to numeric y = 4 .");
}

// *** If statement, all examples of false
console.log("If statement with all examples of false:");
if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute.");
}
else {
    console.log("All false.");
}

// *** If statement, all examples of true
console.log("If statement with all examples of true:");
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true.");
}

// ********* Default Values
function OrderChickenWith(sideDish) {
    sideDish = sideDish || "whatever"; // Default value in Js. Undefined is false in Js. Thus or statement continue for it's search for true and won't take the first part of if statement (sideDish), becuse is undefined and thus false. It will return true string "whatever".
                                       // Default value in Js. If sideDish is defined, than true is found and it will return it becuse or statement is true if any true exists in it, so it will stop and return the first true.
    console.log("Chicken with " + sideDish + ".");
}

OrderChickenWith("rice");
OrderChickenWith();