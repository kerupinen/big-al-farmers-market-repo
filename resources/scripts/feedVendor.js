function handleOnSubmit()
{
    sessionStorage.removeItem("loggedInVendor");
    window.location.href= "feed.html";
}

function handleOnLoad()
{
    //getting url
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor";
    //getting posts from url
    fetch(feedUrl).then(response => response.json())
    .then(function(vendors){
        console.log(vendors);
        //showing posts
        setFeed(vendors);
    }).catch(function(error){
        console.log(error);
    });
}

function setFeed(vendors)
{
    //getting where greets will go
    var venFeed = document.getElementById("feed");
    //starting html
    var html = "<ul>";
    //for each post..



    vendors.forEach(vendor => {
    html += `<div class = "post">`;
    html += `<h2>${vendor.vendorName}</h2>`;
    html += `<h3>Spot Number: ${vendor.registerSpot}</h3>`
    html += `<img src="${vendor.image}" width = "500" height = "300" onerror="this.src='https://m.media-amazon.com/images/I/71fTy0gwcrL._AC_SX425_.jpg'"></img>`;
    html += `<h4>Merchandise: ${vendor.merchType}</h4>`
    html += `<p>${vendor.description}</p>`;
    html += `</div>`;
});

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


    
//close unordered list
html += "</ul>";
//add html
venFeed.innerHTML = html;
}


