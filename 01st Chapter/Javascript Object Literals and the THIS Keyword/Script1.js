/** Object literal and "this" keyworkd. */
var literalCircle = { // This the same as in previous lecture -> this equals to new Object(); , thus "this"  keyword is refering to the object which got created.
    radius: 10,

    GetArea: function () {
        console.log(this);
        var self = this;

        console.log("Function within function \"bug\": \"this\" is not pointing to the newly created object but to outside environment: ");
        var increaseRadius = function () {
            this.radius = 20;
        };

        increaseRadius();
        console.log(this.radius);
        console.log(window.radius);
        console.log("Radius was not increased to 20. Instead, window.radius was created with value of 20.");
        console.log(Math.PI * Math.pow(this.radius, 2));

        console.log("The way arround this is to define self pointer which equals to this at the begining: var self = this; :");
        var increaseRadiusWithSelf = function () {
            self.radius = 20;
        }

        increaseRadiusWithSelf();
        console.log("Now the area is computed with radius with changed value to 20:");
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.GetArea());