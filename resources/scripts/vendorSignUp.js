function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/vendorPost";
    if(document.getElementById("userBox").value==''||document.getElementById("passBox").value=='')
        {
            window.alert("Please enter a value into each field");
        }
    else
    {
    fetch(feedUrl, {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            username : document.getElementById("userBox").value,
            password : document.getElementById("passBox").value,
            registerSpot : 0,
            merchType : document.getElementById("merchBox").value,
            images : document.getElementById("imageBox").value,
            desc : document.getElementById("descBox").value
        })

        
        }).then(function(vendor){
        window.alert("You have been signed up!");
        window.location.href = "vendorlogin.html";
        console.log(vendor);
        }).catch(function(error){
        window.onerror = function()
        {
        window.alert("A user with that username already exists!");
        return true;
        }
        console.log(error);
    });
    }

}
