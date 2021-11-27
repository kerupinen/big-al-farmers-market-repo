function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Admin/api";
    fetch(feedUrl, {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            username : document.getElementById(userBox),
            password : document.getElementById(passBox)
        })

        }).then(function(attendee){
        window.alert("You have been signed up!");
        window.location.href = "feedAttendee.html";
        console.log(json);
        }).catch(function(error){
        window.alert("A user with that username already exists!")
        console.log(error);
    });

}
