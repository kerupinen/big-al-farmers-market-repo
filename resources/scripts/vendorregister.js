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
            venNum : sessionStorage.getItem("loggedInVendor")
        })
    }).then(response => response.json())
    .then(function(vendor){
        if(vendor.RegisterSpot==0)
        {
            window.alert("You have been registered! Your Number is " +vendor.RegisterSpot);
        }
        else{
            window.alert("You have been registered! Your Number is "+vendor.RegisterSpot);
        }
        
        window.location.href = "feedVendor.html";
        console.log(json);
    }).catch(function(error){
        console.log(error);
        //"login not found"
        
    });

}



function handleOnLoad(){}