
function redirectAttendee() {
    if (sessionStorage.getItem("loggedInVendor") !== null) {
        window.location.href = "attendeeregistration.html";
    } else {
        window.location.href = "attendeelogin.html";
    }
}

function redirectVendor() {
    if (sessionStorage.getItem("loggedInAttendee") !== null) {
        window.location.href = "vendorregistration.html";
    } else {
        window.location.href = "vendorlogin.html";
    }
}

function handleOnLoad(){}