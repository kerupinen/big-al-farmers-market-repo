function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Attendee/attendeePost";
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
            registrationNum : 0,
            username : document.getElementById("userBox").value,
            password : document.getElementById("passBox").value,
            firstName : document.getElementById("firstBox").value,
            lastName : document.getElementById("lastBox").value
        })

        
        }).then(function(attendee){
        window.alert("You have been signed up!");
        window.location.href = "attendeelogin.html";
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
