function handleOnLoad()
{
    //getting url
   const vendorsUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor";
    //getting posts from url
    fetch(vendorsUrl).then(response => response.json())
    .then(function(vendors){
        console.log(vendors);
        //showing posts
        displayTable(vendors);
    }).catch(function(error){
        console.log(error);
    });
    

    const attendeesUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Attendee";
    fetch(attendeesUrl).then(response => response.json())
    .then(function(attendees){
        console.log(attendees);
        //showing posts
        displayAttendee(attendees);
    }).catch(function(error){
        console.log(error);
    });
}


function displayTable(vendors)
{
          var dataTable = document.getElementById("vendorTable");
          var html = "<table><tr><th>Vendor Id</th><th>Vendor Registered Spot</th><th>Vendor name</th><th>Merchandise Type</th></tr>";
          vendors.forEach(vendors => {
           html+=`<tr><td>${vendors.venNum} </td><td>${vendors.registerSpot}</td><td>${vendors.vendorName}</td><td>${vendors.merchType}</td></tr>`;
      
          });
          html+="</table>";
          dataTable.innerHTML = html;
}

function displayAttendee(attendees)
{
          var newTable = document.getElementById("attendeeTable");
          var htmls = "<table><tr><th>Attendee Id</th><th>Attendee Registered Spot</th><th>Attendee Last Name</th><th>Attendee First Name</th></tr>";
          attendees.forEach(attendees => {
           htmls+=`<tr><td>${attendees.attendeeNum} </td><td>${attendees.registrationNum}</td><td>${attendees.lastName}</td><td>${attendees.firstName}</td></tr>`;
      
          });
          htmls+="</table>";
          newTable.innerHTML = htmls;

}

function handleOnSubmit()
{
    sessionStorage.removeItem("loggedInAdmin");
    window.location.href= "feed.html";
}
