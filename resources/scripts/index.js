function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/vendorInfo";
    fetch(feedUrl, {
        method: "GET",
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
            console.log(response);
            //window.location.href = "feed.html";
        }).catch(function(error){
            console.log(error);
        });
        
       //location.reload();
       




}

        


function handleOnLoad()
{

}
