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
            merchType : document.getElementById("merchBox").value,
            images : document.getElementById("imageBox").value,
            desc : document.getElementById("descBox").value,
            venName : document.getElementById("nameBox").value
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
