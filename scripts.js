function apiInteraction(HTTPMethod,url,body){
    return new Promise((resolve,reject)=>{
        var request=new XMLHttpRequest();
        request.open(HTTPMethod,url);
        request.responseType='json';
        request.onload=()=>{
            if(request.status==200 || request.status==201){
                resolve(request.response);
            }else{
                reject(`ERROR: ${request.status}`);
            }
        }
        if(HTTPMethod=='POST' || HTTPMethod=='PUT' || HTTPMethod=='PATCH'){
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(body);
        }else{
            request.send();
        }
    })
}

apiInteraction('GET','https://jsonplaceholder.typicode.com/users',null)
.then((response)=>{
    console.log(response);
})
.catch((reason)=>{
    console.log(Error(reason));
})

apiInteraction('POST','https://jsonplaceholder.typicode.com/users',JSON.stringify(  {
    "id": 11,
    "name": "Mantovano Mateo",
    "username": "manto.mateo",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }))
.then((response)=>{
    console.log(response);
})
.catch((reason)=>{
    console.log(Error(reason));
})


apiInteraction('PATCH','https://jsonplaceholder.typicode.com/users/1',JSON.stringify({
    "email": "mantovanomateo@gmail.com" 
  }))
  .then((response)=>{
    console.log(response);
})
.catch((reason)=>{
    console.log(Error(reason));
})


apiInteraction('PUT','https://jsonplaceholder.typicode.com/users/2',JSON.stringify({
    "id": 11,
    "name": "este esta puteado",
    "username": "manto.mateo",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }))
  .then((response)=>{
    console.log(response);
})
.catch((reason)=>{
    console.log(Error(reason));
})

apiInteraction('DELETE','https://jsonplaceholder.typicode.com/users/6',null)
.then((response)=>{
    //esto devuelve vacio cuando lo elimina correctamente
    console.log(response);
})
.catch((reason)=>{
    console.log(Error(reason));
})

apiInteraction('GET','https://jsonplaceholder.typicode.com/users/1',null)
.then((response)=>{
  console.log('=========================\nUSER DATA');
  console.log(response);
})
.catch((reason)=>{
  console.log(Error(reason));
})

apiInteraction('GET','https://jsonplaceholder.typicode.com/users/1/albums',null)
.then((response)=>{
  console.log('=========================\nUSER ALBUMS');
  console.log(response);
})
.catch((reason)=>{
  console.log(Error(reason));
})

apiInteraction('GET','https://jsonplaceholder.typicode.com/users/1/posts',null)
.then((response)=>{
  console.log('=========================\nUSER POSTS');
  console.log(response);
})
.catch((reason)=>{
  console.log(Error(reason));
})

