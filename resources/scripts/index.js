function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/vendorInfo";
    const userName = document.getElementById("userBox").value;
    const password = document.getElementById("passBox").value;
    fetch(feedUrl, {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            
            username : userName,
            password : password

        })

        // }).then(function(response){
        //     return response.json();
    
            

        }).then(function(json){
            sessionStorage.setItem("loggedInVendor", userName);
            console.log(json);
            console.log(sessionStorage);
            window.location.href = "feed.html";
        }).catch(function(error){
            console.log(error);
            //"login not found"
            window.alert("The entered username and password were not found, please try again");
        });
        
       //location.reload();
       




}

        


function handleOnLoad()
{

}
