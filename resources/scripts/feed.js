function handleOnLoad()
{
    //getting url
    const feedUrl = "https://bigal-farmer-app.herokuapp.com/api/Vendor";
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
    html += "<li>"+vendor.merchType+"</li>"; 
});

    
//close unordered list
html += "</ul>";
//add html
venFeed.innerHTML = html;
}