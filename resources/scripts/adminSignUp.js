function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Admin/adminPost";
    fetch(feedUrl, {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            username : document.getElementById("userBox"),
            password : document.getElementById("passBox")
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
