var output = "";
var services = JSON.parse(localStorage.getItem("servicesList"));

if (services == null || services.length == 0) {
    output = "<p>No added services.</p>";
} else {
    for (var i = 0; i < services.length; i++) {
        output += "<div>";
        output += "<h4>" + services[i].name + "</h4>";
        output += "<p>Price: " + services[i].price + " SAR</p>";
        output += "<p>" + services[i].desc + "</p>";
        output += "<hr>";
        output += "</div>";
    }
}

document.getElementById("addedServices").innerHTML = output;