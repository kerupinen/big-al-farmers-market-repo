function handleOnEdit(id)
{

    const feedurl ="https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/"+document.getElementById("venIdBox");

    fetch(feedUrl, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        //update post body to be what was in edit box
        body: JSON.stringify({
            
            VenNum : document.getElementById("venIdBox").value,
            MerchType : document.getElementById("merchBox").value,
            VenName : document.getElementById("venNameBox").value,
            Image : document.getElementById("imageBox").value,
            Description : document.getElementById("descBox").value
        })
    }).then(function(response){
        

        

        window.location.href = "feed.html";
        
    
        }).catch(function(error){
        console.log(error);
        });

    
}