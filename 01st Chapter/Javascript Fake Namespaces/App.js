DoctorGreeter.sayHello(); // Invoking exposed property to window object "sayHello" of doctorGreeter.
JohnGreeter.sayHi(); // same in here.

// Imediately Invoked Function Expression
// IFFI
(function (name) {
    console.log("Hello " + name + "!!");
})("Coursera");