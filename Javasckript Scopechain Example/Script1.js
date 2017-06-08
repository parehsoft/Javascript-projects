// JavaScript source code
var x = 2;

function B() {
    console.log(x);
}

function A() {
    var x = 5;
    B();
}

A();

/*  
    x=2 will be desplayed.
    Because function B is defined in the Global Scope and not within A and thus,
    B's reference to outer environment is reference to Global Scope and not scope of function A,
    hence x from Global Scobe is desplayed and not x from A's scope.
*/