function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Attendee/attendeeInfo";
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
            localStorage.setItem("loggedInAttendee",username);
            window.location.href = "feed.html";
            console.log(json);
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

