function handleOnLoad(){}

function registerAttendee()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Attendee/attendeeRegister";
    fetch(feedUrl, {
        method: "POST",
        headers: 
        {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            attendeeNum : sessionStorage.getItem("loggedInAttendee")
        })
    }).then(response => response.json())
    .then(function(attendee){
        if(attendee.registrationNum!=0)
        {
            window.alert("You have been registered! Your Number is " +attendee.registrationNum);
        }
        else{
            //window.alert("You were already signed up! Your Number is "+attendee.registrationNum);
        }
        
        window.location.href = "feedAttendee.html";
        console.log(json);
    }).catch(function(error){
        console.log(error);
    });

}