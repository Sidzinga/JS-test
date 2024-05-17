
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

makeChange.push(userInfo)
console.log(userInfo)

localStorage.setItem("users",JSON.stringify(makeChange))
window.location = "login.html";
}
) 