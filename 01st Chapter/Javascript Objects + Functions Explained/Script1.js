var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favouriteColor: "blue"
    },
    "stock of company": 110
};

console.log(facebook);
console.log(facebook["stock of company"]);

function multiply(x, y) {
    return x * y;
}
multiply.version = "v1.0.0";
console.log(multiply.toString());
console.log(multiply.version);

/*
    Functions are special types of objects. I can pass them arround, passing them as arguments, return them as a result, set properties on them.
*/

// Function factory
function MakeMultiplier(multiplier) {
    function MyFunc(x) {
        return multiplier * x;
    };
    return MyFunc;
};

var MultiplyBy3 = MakeMultiplier(3);
console.log(MultiplyBy3(10));

// Passing functions as arguments
function DoOperationOn(x, operation) {
    return operation(x);
};

console.log(DoOperationOn(5, MultiplyBy3));
