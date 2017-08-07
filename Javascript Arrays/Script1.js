/** Arrays are just objects in Javascript. */
var array = new Array();
array[0] = "Me";
array[1] = 2;
array[2] = function (name) { console.log("Hello " + name); };
array[3] = { course: "HTML, CSS and JS" };

console.log(array);
console.log(array[2]);
array[2]("me, me, me!");
array[2](array[0]);
array[2](array[3].course);

console.log();

// Short hand array notation:
var names = ["Me 0", "Me 1", "Me 2"];
// danger
names[99] = "Me 100";
// looping over whole array
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}
// looping over properties of the array
for (var name in names) {
    console.log("Hello " + names[name]);
}

console.log();

// object literal
var myObject = {
    name: "Me",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};
// looping over properties of the object
for (var property in myObject) {
    console.log(property + "::" + myObject[property]);
}