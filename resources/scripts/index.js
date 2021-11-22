function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/vendorInfo";
    fetch(feedUrl, {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            
            username : document.getElementById("userBox").value,
            password : document.getElementById("passBox").value

        })

        }).then(function(response){
            return response.json();
    
            //window.location.href = "feed.html";

        }).then(function(json){
            console.log(json);
        }).catch(function(error){
            console.log(error);
        });
        
       //location.reload();
       




}

        


function handleOnLoad()
{

}
