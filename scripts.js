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

const objeto={
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
}
console.log('============================\ntesteando esta shit\n=============================');
console.log('valores del objeto en cuestion => '+ Object.values(objeto).length);
console.log('============================\nFin test\n=============================');

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



function createTableUser(){

    let oldSon=document.getElementById('contentSon');
    if(oldSon!=null){oldSon.remove();}

    let newTable=document.createElement('table');
    let content=document.getElementById('dynamicContnet');
    let tableFather=document.createElement('div');
    tableFather.id='contentSon';

    newTable.className='table table-dark table-striped';
    newTable.id='dataTable';
    newTable.innerHTML=`
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Website</th>
        <th scope="col">Company</th>
      </tr>
    </thead>
    `
    apiInteraction('GET','https://jsonplaceholder.typicode.com/users',null)
    .then((response)=>{
      newTable.appendChild(fillTable(response));
      console.log('anduvo el show users');
      tableFather.appendChild(newTable);
      content.appendChild(tableFather);
    })
    .catch((reason)=>{
    console.log(Error(reason));
    })  
    
}

function fillTable(data){
  let tableContent=document.createElement('tbody');
  data.forEach(user => {
    tableContent.innerHTML+=`
    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.website}</td>
      <td>${user.company.name}</td>
      </tr> 
    `
  });
  return tableContent;
}

function newUserInterface(){
    let oldSon=document.getElementById('contentSon');
    if(oldSon!=null){oldSon.remove();}

    let content=document.getElementById('dynamicContnet');
    let div=document.createElement('div');
    div.id='contentSon';
    div.className='createUserDiv';
    div.innerHTML=`
    <br>
    <h2>User Creation Menu</h2>
    <br>
    <div class="input-group">
    <span class="input-group-text" onclick="addEmployee()" >Insert User</span>
    <textarea id="userInput" class="form-control" aria-label="With textarea" placeholder="JSON style user"></textarea>
    </div>
    `
    content.appendChild(div);
}

function addEmployee(){
  let data=document.getElementById('userInput').value;
  apiInteraction('POST','https://jsonplaceholder.typicode.com/users',data)
  .then((response)=>{
    console.log(response);
  })
  .catch((reason)=>{
  console.log(Error(reason));
  })  
}

function putOrPatchInterface(){
    let oldSon=document.getElementById('contentSon');
    if(oldSon!=null){oldSon.remove();}

    let content=document.getElementById('dynamicContnet');
    let div=document.createElement('div');
    div.id='contentSon';
    div.className='createUserDiv';
    div.innerHTML=`
    <br>
    <h2>User Modification Menu</h2>
    <br>
    <div class="input-group">
    <span class="input-group-text" onclick="modifyUser()" >Apply Change</span>
    <textarea id="userInput" class="form-control" aria-label="With textarea" placeholder="JSON style user"></textarea>
    </div>
    `
    content.appendChild(div);
}

function modifyUser(){
    
    let data=document.getElementById('userInput').value;
    let obj=JSON.parse(data);
    let url='https://jsonplaceholder.typicode.com/users/'+obj.id;
    console.log(Object.values(obj).length);
    if(Object.values(JSON.parse(data)).length<8){
      apiInteraction('PATCH',url,data)
      .then((response)=>{
      console.log('hizo patch');
      console.log(response);
      })
      .catch((reason)=>{
      console.log(Error(reason));
      })  
    }else{
      apiInteraction('PUT',url,data)
      .then((response)=>{
      console.log(response);
      console.log('hizo put');
      })
      .catch((reason)=>{
      console.log(Error(reason));
      }) 
    }
}

function showEmployeeData(){
    let oldSon=document.getElementById('contentSon');
    if(oldSon!=null){oldSon.remove();}
    let userId=document.getElementById('userIDSearch').value;

    let content=document.getElementById('dynamicContnet');
    let div=document.createElement('div');
    div.id='contentSon';
    div.className='userInfoDiv';
    div.innerHTML=`
    <br>
    <h2>User Details</h2>
    <br>
    `
    div.appendChild(showUserPost(userId));
    div.appendChild(showUserAlbums(userId));
    content.appendChild(div);

}

function showUserPost(userID){
    let postTable=document.createElement('table');
    console.log('user id =>'+ userID)
    let url='https://jsonplaceholder.typicode.com/users/'+userID+'/posts'
    postTable.className='table table-dark table-striped';
    postTable.innerHTML=`
    <thead>
      <tr>
        <th scope="col">POST ID</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
      </tr>
    </thead>
    `
    apiInteraction('GET',url,null)
    .then((response)=>{
      postTable.appendChild(fillPostTable(response));
      console.log('anduvo el show post del user');
    })
    .catch((reason)=>{
    console.log(Error(reason));
    }) 
    
    return postTable;
}

function fillPostTable(data){
  let tableContent=document.createElement('tbody');
  data.forEach(post => {
    tableContent.innerHTML+=`
    <tr>
      <th scope="row">${post.id}</th>
      <td>${post.title}</td>
      <td>${post.body}</td>
      </tr> 
    `
  });
  return tableContent;
}

function showUserAlbums(userID){
    let url='https://jsonplaceholder.typicode.com/users/'+userID+'/albums'
    let albumTable=document.createElement('table');
    albumTable.className='table table-dark table-striped';
    albumTable.innerHTML=`
    <thead>
      <tr>
        <th scope="col">ALBUM ID</th>
        <th scope="col">Title</th>
      </tr>
    </thead>
    `
    apiInteraction('GET',url,null)
    .then((response)=>{
      albumTable.appendChild(fillAlbumsTable(response));
      console.log('anduvo el show albums del user');
    })
    .catch((reason)=>{
    console.log(Error(reason));
    }) 
    
    return albumTable;
}

function fillAlbumsTable(data){
  let tableContent=document.createElement('tbody');
  data.forEach(album => {
    tableContent.innerHTML+=`
    <tr>
      <th scope="row">${album.id}</th>
      <td>${album.title}</td>
      </tr> 
    `
  });
  return tableContent;
}