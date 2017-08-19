// Javascript closures

function makeMultiplier(multiplier) {
    // like var multiplier = 2;
    return (
        function (x) { // This is just fuction value, it's not called, so it doesn't get "this" variable and reference to outer execution context, it's just simply returned to the caller. Yet, it knows the value of "multiply" variable. -> look the asignment to variable "doubleAll" .
            return multiplier * x;
        }
           ); // end return of function makeMultiplier
}

var doubleAll = makeMultiplier(2); // Now when "function (x)" gets returned to the caller, so "doubleAll" variable is now equal to "function (x)". And on the next line we actually execute "doubleAll", so "function (x)" is now finaly being executed, that means it gets it execution environment.
console.log(doubleAll(10)); // But how it knows what the multiplier variable is, as makeMultiplier function is no longer in execution stack, it's done, it was executed before and it returned "function (x)" to variable "doubleAll" on line before. It's because of Javascript closures.
// Javascript preserved it's outer lexical environment. So "multiplier" variable is still sitting in memory outside of lexical scope of "function (x)".
/*That's how closures work.*/