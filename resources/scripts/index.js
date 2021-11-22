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
            //reshowing all the posts including newest one
            //handleOnLoad();
        }).catch(function(error){
            console.log(error);
        });
        
       //location.reload();
       window.location.href = "feed.html";




}

        


function handleOnLoad()
{

}
