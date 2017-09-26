
function HandleResponse (request, isJson) {
    alert(request + ", is it Json?: " + isJson + ", ready state: " + request.readyState + ", status: " + request.status + ", response text: " + request.responseText);
    if (isJson == undefined) {
        isJson = true;
    }
    if (isJson == true) {
        var parsedJSON = JSON.parse(request.responseText);

        var message = parsedJSON.firstName + " " + parsedJSON.lastName + " ";
        if (parsedJSON.likesChineseFood == true) {
            message += "likes chinese food ";
        }
        else {
            message += "doesn't like chinese food ";
        }
        message += "abd uses " + parsedJSON.numberOfDisplays + " displays for coding.";

        document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
    }
    else {
        document.querySelector("#content").innerHTML = "<h2>Hello " + request.responseText + "!</h2>";
    }
}

function UpdateContent (){
    $AjaxUtils.SendGetRequest("./data/name.json", HandleResponse, true);
}

document.querySelector("button").onclick = UpdateContent;

