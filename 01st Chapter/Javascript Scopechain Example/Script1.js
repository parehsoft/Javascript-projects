/*  
    x=2 will be desplayed.
    Because function B is defined in the Global Scope and not within A and thus,
    B's reference to outer environment is reference to Global Scope and not scope of function A,
    hence x from Global Scobe is desplayed and not x from A's scope.

    Same as with variable message.
*/
var x = 2;
var message = "in global";

console.log("global: message = " + message);

function TextB() {
    console.log("b (B is defined inside Global Scope.): message = " + message);
}

function TextA() {
    var message = "inside a";
    console.log("a: message = " + message);

    function TexTC() {
        console.log("c (C is defined inside A.): message = " + message);
    }

    TextB();
    TexTC();
}

function B() {
    console.log(x);
}

function A() {
    var x = 5;
    B();
}

TextA();
A();
