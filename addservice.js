var services = JSON.parse(localStorage.getItem("servicesList"));
if (services == null) {
    services = [];
}

function addService() {

    var name = document.getElementById("serviceName").value;
    var photo = document.getElementById("servicePhoto").value;
    var price = document.getElementById("servicePrice").value;
    var desc = document.getElementById("serviceDesc").value;

    if (name == "" || price == "" || desc == "") {
        alert("Please fill all fields");
        return;
    }

    var first = name.charAt(0);
    if (first >= '0' && first <= '9') {
        alert("Service name cannot start with a number");
        return;
    }

    var newService = new Object();
    newService.name = name;
    newService.photo = photo;
    newService.price = price;
    newService.desc = desc;

    services.push(newService);

    localStorage.setItem("servicesList", JSON.stringify(services));

    alert("Service added successfully!");

    document.getElementById("serviceName").value = "";
    document.getElementById("servicePhoto").value = "";
    document.getElementById("servicePrice").value = "";
    document.getElementById("serviceDesc").value = "";
}
