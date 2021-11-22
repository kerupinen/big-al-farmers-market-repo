function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Admin/adminInfo";
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
    
            

        }).then(function(json){
            localStorage.setItem("loggedInAdmin",json);
            window.location.href = "feed.html";
            console.log(json);
        }).catch(function(error){
            console.log(error);
            //"login not found"
        });
        
       //location.reload();
       




}