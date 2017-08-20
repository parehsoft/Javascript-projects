/** DOM Manipulation, Unobstrusive event binding, "event" argument */

// This could be wrapped also inside of event handler of "DOMObjectLoaded".
function SayHello(event) {
    
    var name = document.getElementById("nameInput").value;
    var message = "<h2>Hello " + name + "!</h2>";
    
    document.getElementById("content").innerHTML = message;

    if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " -- This text was added!!";
        document.querySelector("#title").textContent = title;
    }

    this.textContent = "Said it!"; // "This" pointer will point to the element which executed this (SayHello) function.
}

function ShowCoordinates(event) {
    if (event.shiftKey === true) {
        console.log("x: " + event.clientX);
        console.log("y: " + event.clientY);
    }
}

// Unobstrusive event binding
document.querySelector("button").onclick   = SayHello;
document.querySelector("body").onmousemove = ShowCoordinates;