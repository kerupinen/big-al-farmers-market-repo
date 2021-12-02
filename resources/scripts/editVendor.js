function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/"+sessionStorage.getItem("loggedInVendor");
    if(document.getElementById("merchBox").value==''||document.getElementById("descBox").value==''||document.getElementById("nameBox").value=='')
        {
            window.alert("Please enter a value into each field");
        }
    else
    {
    fetch(feedUrl, {
        method: "PUT",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            venNum : sessionStorage.getItem("loggedInVendor"),
            vendorName : document.getElementById("nameBox").value,
            merchType : document.getElementById("merchBox").value,
            image : document.getElementById("imageBox").value,
            description : document.getElementById("descBox").value
        })

        
        }).then(function(vendor){
        window.alert("The feed had been edited!");
        window.location.href = "feedVendor.html";
        console.log(vendor);
        }).catch(function(error){
        console.log(error);
    });
    }

}
