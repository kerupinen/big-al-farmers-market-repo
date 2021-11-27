
function redirectAttendee() {
    if (sessionStorage.getItem("loggedInAttendee") !== null) {
        window.location.href = "attendeeregistration.html";
        window.alert("Please log in before registering");
    } else {
        window.location.href = "attendeelogin.html";
    }
}

function redirectVendor() {
    if (sessionStorage.getItem("loggedInVendor") !== null) {
        window.location.href = "vendorregistration.html";
        window.alert("Please log in before registering");
    } else {
        window.location.href = "index.html";
    }
}

function handleOnLoad(){}