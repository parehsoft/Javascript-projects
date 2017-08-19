// Fake Namespaces

(function (window) {
    var JohnGreeter = {};

    var greeting = "Hi "; // Now it is inside as private variable.
    JohnGreeter.name = "John";
    JohnGreeter.sayHi = function () { console.log(greeting + JohnGreeter.name); } // Exposed to outside like publiic variable / property.

    window.JohnGreeter = JohnGreeter; // Exposing outside (putting into window object) internal DoctorGreeter object. It will be accesible from outside.

})(window);