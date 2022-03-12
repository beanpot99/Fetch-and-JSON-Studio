window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
    })
    .then(function(json){
        //let astroInfo = response.json();//changes info into json object
        let container= document.getElementById('container');
        let activeStatus='';
        let astronauts='';
        let astroCount=1;
        let astronautCount=document.getElementById('astronautCount');
        function sortFunc(obj){
            return obj.sort((a, b) => b-a)
        }
        for(const element of json){
            astronauts+= 
            `
                <div class='astronauts'>
                    <div class='bio'>
                        <h3>${element.firstName}  ${element.lastName} </h3>
                        <img class='avatar' src='${element.picture}'>
                        <ul>
                            <li>Hours in space: ${element.hoursInSpace}</li>
                            <li id='activeStatus'>Active: ${element.active}</li>
                            <li>Skills: ${element.skills}</li>
                        </ul>
                    </div>
                    
                </div>
                <h6>Astronaut Count: ${astroCount} </h6>
            `
            astroCount+=1;
            if(element.active=true){
                activeStatus=document.getElementById('activeStatus');
                astronauts+=`<style>
                #activeStatus{
                    color:green;
                }
                </style>`
            }else if(element.active===false){
                `<style>
                #activeStatus{
                    color:red;
                }
                </style>`
            }
        }
        container.innerHTML=astronauts;
        //astronautCount.innerHTML=`<h2>Astronaut Count: ${astroCount} </h2>`
    })
    return astroInfo;
})