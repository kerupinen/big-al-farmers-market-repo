function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/vendorPost";
    if(document.getElementById("userBox").value==''||document.getElementById("passBox").value==''||document.getElementById("merchBox").value==''||document.getElementById("descBox").value=='')
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
            registerSpot : 0,
            username : document.getElementById("userBox").value,
            password : document.getElementById("passBox").value,
            merchType : document.getElementById("merchBox").value,
            images : document.getElementById("imageBox").value,
            description : document.getElementById("descBox").value
        })

        
        }).then(function(vendor){
        window.alert("You have been signed up!");
        window.location.href = "index.html";
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