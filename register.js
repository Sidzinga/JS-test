
$("#form").submit( function(e){

  e.preventDefault()

  let firstname = $("#firstname").val();
  
let lastname = $("#lastname").val();
let email = $("#email").val();
let password = $("#password").val();


let saved = localStorage.getItem('users')
let makeChange = JSON.parse(saved)


console.log(typeof saved)
console.log(makeChange)

let userInfo = {firstname:firstname,
  lastname:lastname,
    email:email,
  password:password}


if(makeChange == null){
  makeChange = []
}


console.log(userInfo)

for(let i = 0;i<makeChange.length;i++){


  if(makeChange[i].email === email && makeChange[i].email !== null){

alert("User already exists!! Please Login")


setInterval(()=>{
  console.log("redirect")
  window.location = "login.html"} , 1000)
}
}

makeChange.push(userInfo)

localStorage.setItem("users",JSON.stringify(makeChange))
setInterval(()=>{
  console.log("redirect")
  window.location = "login.html"} , 1000)
}
) 


$("#login").click(function (e) { 
  e.preventDefault();
  window.location = "login.html"
});