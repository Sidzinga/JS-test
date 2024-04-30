

function newUser(){
    let firstname = $("#firstname").val();
let lastname = $("#lastname").val();
let email = $("#email").val();
let userInfo = JSON.stringify({fisrtname:firstname,
    lastname:lastname,
    email:email})
// console.log(fisrtname)

localStorage.setItem("users",userInfo)

let saved = localStorage.getItem("users")
// console.log(saved)
// window.location = "dashboard.html";
}