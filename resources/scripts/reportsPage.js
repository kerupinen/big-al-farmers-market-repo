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

    const attendeesCountUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Attendee/report";
    fetch(attendeesCountUrl).then(response => response.json())
    .then(function(attendees){
        console.log(attendees);
        //showing posts
        displayAttendeeCount(attendees);
    }).catch(function(error){
        console.log(error);
    });

    const vendorsCountUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor/report";
    fetch(vendorsCountUrl).then(response => response.json())
    .then(function(vendors){
        console.log(vendors);
        displayVendorCount(vendors);
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

function displayAttendeeCount(attendees)
{
          var newTable = document.getElementById("attendeeCountTable");
          var htmls = "<table><tr><th>Attendee Count</th></tr>";
          //attendees.forEach(attendees => {
           htmls+=`<tr><td>${attendees}</td></tr>`;
      
          //});
          htmls+="</table>";
          newTable.innerHTML = htmls;

}
function displayVendorCount(vendorss)
{
          var newTable = document.getElementById("vendorCountTable");
          var htmls = "<table><tr><th>Vendor Count</th></tr>";
           htmls+=`<tr><td>${vendorss}</td></tr>`;
          htmls+="</table>";
          newTable.innerHTML = htmls;

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
