
/**
 * Function to submit the login form
 */
function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/vendorInfo";
    const userName = document.getElementById("userBox").value;
    const password = document.getElementById("passBox").value;
    fetch(feedUrl, {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            
            username : userName,
            password : password

        })
    }).then(function(json){
        sessionStorage.setItem("loggedInVendor", json.VenNum);
        window.location.href = "feed.html";
    }).catch(function(error){
        console.log(error);
        //"login not found"
        window.alert("The entered username and password were not found, please try again");
    });
}

function handleOnLoad(){}
