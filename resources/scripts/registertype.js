
function redirectAttendee() {
    if (sessionStorage.getItem("loggedInAttendee") !== null) {
        window.alert("Please log in before registering");
        window.location.href = "attendeeregistration.html";
    } else {
        window.location.href = "attendeelogin.html";
    }
}

function redirectVendor() {
    if (sessionStorage.getItem("loggedInVendor") !== null) {
        window.alert("Please log in before registering");
        window.location.href = "vendorregistration.html";
    } else {
        window.location.href = "index.html";
    }
}

function handleOnLoad(){}