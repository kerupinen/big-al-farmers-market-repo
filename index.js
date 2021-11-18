function handleOnSubmit()
{
    const feedUrl = "https://big-als-farmers-market-backend.herokuapp.com/api/Vendor";
    fetch(peopleUrl).then(function(response){
        return response.json();
    }).then(function(json){
        json.forEach(vendor =>{
            if(vendor.id = document.getElementById("idBox"))
            {
                if(vendor.username = document.getElementById("userBox"))
                {
                    if(vendor.password=document.getElementById("passBox"))
                    {
                        href = "practice.html";
                
                    }
                }
            }
        })


        

    }).catch(function(error){
        console.log(error);
    });
}

function handleOnLoad()
{
    
}
