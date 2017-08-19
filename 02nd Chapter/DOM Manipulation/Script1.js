/** DOM Manipulation */

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

// Unobstrusive event binding
document.querySelector("button").onclick = SayHello;