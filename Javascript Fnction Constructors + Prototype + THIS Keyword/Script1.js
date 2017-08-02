/* THIS pointer refernce enviroment, where the function was called. */
console.log("Testing \"this\"...");
function Test() {
    console.log(this);
    this.myName = "John";
}

Test();
console.log(window.myName);
console.log("----------------------------");

/* Function Constructors*/ // Function constructors need to be without the return value.
console.log("Function Consturctors");
function FuncConstrCircle(radius) {
    console.log(this);
    this.radius = radius;
}
/* Prototype definition needs to be outside of the function constructor, because the function constructor is executed every single time when the new keyworkd is called. Otherwise it will overwrite the memory where the prototype method is stored, so it is wasted processing power. */
FuncConstrCircle.prototype.GetArea = function () { return Math.PI * Math.pow(this.radius, 2); } // Creating prototype. This code is shared through the all of the objects created by FuncConstrCircle. It is the same piece of memory and thus saving space.

var myCircle = new FuncConstrCircle(10); // ( new Object(); ) Functioned invoked together with the "new" keyword tell to javascript engine to make "this" point to the object itself, which was just created.
console.log(myCircle);
console.log(myCircle.GetArea());

var myOtherCircle = new FuncConstrCircle(20);
console.log(myOtherCircle);
console.log(myOtherCircle.GetArea());