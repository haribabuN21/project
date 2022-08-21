function fetchdata(){
    fetch("https://api.openbrewerydb.org/breweries")
    .then(Response => {
        if(!Response.ok){
            throw Error("ERROR");
        }
        return Response.json();
    }).then(data =>{
    const html = data.map(user => {
        return `
     

        <div class="shop" id="flex">

        <h4>Name: ${user.name} </h4>
        <p> Type: ${user.brewery_type}<p>
        <p> address : ${user.address_2}<p>
        <p> website : ${user.website_url}<p>
        <p> phone : ${user.phone}<p>
        
        </div>
        `
    }).join("")
    





      document.querySelector('#app').insertAdjacentHTML('afterbegin',html);
    }).catch(error =>{
        console.log(error);
    });
}

fetchdata();



let names = function searchName(){
    fetch("https://api.openbrewerydb.org/breweries")
    .then(Response => {
        if(!Response.ok){
            throw Error("ERROR");
        }
        return Response.json();
    }).then(data =>{
    const html = data.map(user => {
        return `
     

        <div class="shop">

        <h4>Name: ${user.name} </h4>
       
         </div>
        `
    }).join("")
    





      document.querySelector('#app').insertAdjacentHTML('afterbegin',html);
    }).catch(error =>{
        console.log(error);
    });
}

let type = function searchType(){
    fetch("https://api.openbrewerydb.org/breweries")
    .then(Response => {
        if(!Response.ok){
            throw Error("ERROR");
        }
        return Response.json();
    }).then(data =>{
    const html = data.map(user => {
        return `
     

        <div class="shop">

        <p>Name: ${user.brewery_type} </p>
       
         </div>
        `
    }).join("")
    





      document.querySelector('#app').insertAdjacentHTML('afterbegin',html);
    }).catch(error =>{
        console.log(error);
    });
}

let addres = function searchType(){
    fetch("https://api.openbrewerydb.org/breweries")
    .then(Response => {
        if(!Response.ok){
            throw Error("ERROR");
        }
        return Response.json();
    }).then(data =>{
    const html = data.map(user => {
        return `
     

        <div class="shop">

        <p>Name: ${user.address_2} </p>
       
         </div>
        `
    }).join("")
    





      document.querySelector('#app').insertAdjacentHTML('afterbegin',html);
    }).catch(error =>{
        console.log(error);
    });
};


let phone = function searchPhone(){
    fetch("https://api.openbrewerydb.org/breweries")
    .then(Response => {
        if(!Response.ok){
            throw Error("ERROR");
        }
        return Response.json();
    }).then(data =>{
    const html = data.map(user => {
        return `
     

        <div class="shop">

        <p>Name: ${user.phone} </p>
       
         </div>
        `
    }).join("")
    





      document.querySelector('#app').insertAdjacentHTML('afterbegin',html);
    }).catch(error =>{
        console.log(error);
    });


