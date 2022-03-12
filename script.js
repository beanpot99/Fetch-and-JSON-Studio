window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
    })
    .then(function(json){
        //let astroInfo = response.json();//changes info into json object
        let container= document.getElementById('container');
        let astronauts='';
    
        for(const element of json){
            astronauts+= 
            `
                <div class='astronauts'>
                    <div class='bio'>
                        <h3>${element.firstName}  ${element.lastName} </h3>
                        <ul>
                            <li>Hours in space: ${element.hoursInSpace}</li>
                            <li id='activeStatus'>Active: ${element.active}</li>
                            <li>Skills: ${element.skills}</li>
                        </ul>
                    </div>
                    <img class='avatar' src='${element.picture}'>
                </div>
            `
           

           
        }
        container.innerHTML=astronauts
     
    })
    return astroInfo;
})