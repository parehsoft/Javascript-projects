
function HandleResponse (request) {
    alert(request + ", ready state: " + request.readyState + ", status: " + request.status  + ", response text: " + request.responseText);
    document.querySelector("#content").innerHTML = "<h2>Hello " + request.responseText + "!</h2>";
}

function UpdateContent (){
    $AjaxUtils.SendGetRequest("./data/name.txt", HandleResponse);
}

document.querySelector("button").onclick = UpdateContent;

