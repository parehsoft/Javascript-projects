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

// Function factory
