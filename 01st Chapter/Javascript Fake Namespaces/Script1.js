// Fake Namespaces

(function (window) {
    var DoctorGreeter = {};

    var greeting = "Hello "; // Now it is inside as private variable.
    DoctorGreeter.name = "Doctor";
    DoctorGreeter.sayHello = function () { console.log(greeting + DoctorGreeter.name); } // Exposed to outside like publiic variable / property.

    window.DoctorGreeter = DoctorGreeter; // Exposing outside (putting into window object) internal DoctorGreeter object. It will be accesible from outside.

})(window);