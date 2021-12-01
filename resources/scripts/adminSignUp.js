function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Admin/adminPost";
    if(document.getElementById("userBox").value==''||document.getElementById("passBox").value=='')
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
            username : document.getElementById("userBox").value,
            password : document.getElementById("passBox").value
        })

        
        }).then(function(attendee){
        window.alert("You have been signed up!");
        window.location.href = "adminlogin.html";
        console.log(attendee);
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
