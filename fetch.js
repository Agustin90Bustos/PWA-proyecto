fetch ('https://reqres.in/api/users?page=2')
.then(Response => Response.json()) 
.then(respObj => {
     console.log(respObj);
     console.log(respObj.page);
     console.log(respObj.per_page);
}) 