function handleOnLoad()
{
    //getting url
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor";
    //getting posts from url
    fetch(feedUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        //showing posts
        setFeed(json);
    }).catch(function(error){
        console.log(error);
    });
}

function setFeed(json)
{
    //getting where greets will go
    var venFeed = document.getElementById("feed");
    //starting html
    var html = "<ul>";
    //for each post..



    json.forEach(vendor => {
    html += `<div class = "post">`;
    html += `<h2>${vendor.vendorName}</h2>`;
    html += `<img src="${vendor.image}" width = "500" height = "300" onerror="this.src='https://m.media-amazon.com/images/I/71fTy0gwcrL._AC_SX425_.jpg'"></img>`;
    html += `<h3>Merch Type: ${vendor.merchType}</h3>`
    html += `<p>${vendor.description}</p>`;
    html += `</div>`;
});

    
//close unordered list
html += "</ul>";
//add html
venFeed.innerHTML = html;
}