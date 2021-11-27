function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Attendee/aInfo";
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
    }).then(response => response.json())
    .then(function(data){
        sessionStorage.setItem("loggedInAttendee",data.attendeeNum);
        window.location.href = "feedAttendee.html";
    }).catch(function(error){
        console.log(error);
        //"login not found"
        window.alert("The entered username and password were not found, please try again");
    });
}

function handleOnLoad(){}

