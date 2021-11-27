function handleOnLoad()
{
    //getting url
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor";
    //getting posts from url
    fetch(feedUrl).then(response => response.json())
    .then(function(vendors){
        console.log(vendors);
        //showing posts
        displayTable(vendors);
    }).catch(function(error){
        console.log(error);
    });
}


function displayTable(vendors)
{
     //var dataTable = document.getElementById("dataTable");
          var html = "<table><tr><th>Vendor Id</th><th>Vendor Registered Spot</th><th>Vendor name</th><th>Merchandise Type</th></tr>";
          vendors.forEach(vendor => {
           html+=`<tr><td>${vendors.venNum}</td><td>${vendors.RegisterSpot}</td><td>${vendors.venName}</td><td>${vendors.merchType}</td></tr>`;
      
          });
          html+="</table>";
          dataTable.innerHTML = html;
}
