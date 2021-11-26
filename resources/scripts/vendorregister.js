function registerVendor()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/vendorRegister";
    fetch(feedUrl, {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            vendorName : document.getElementById("userBox").value
        })
    }).then(function(json){
        //spot between 1-30 that has not already been taken
        if(RegisterSpot == 0)
        {
            //new int
            //check()
            RegisterSpot = 1;
        }
        else{
            window.alert("You have already registered!");
        }
        
        window.location.href = "feed.html";
        console.log(json);
    }).catch(function(error){
        console.log(error);
        //"login not found"
        
    });

}



function handleOnLoad(){}