
let loggedUser = localStorage.getItem("loggedUser")

let userData = JSON.parse(loggedUser)

let savedUsers = JSON.parse(localStorage.getItem("users"))

// $("#firstname").val(userData.firstname)





$("#editfname").click(()=>{
    $("#newfname").show()
    $("#fnamedone").show()
$("#firstname").hide()
$("#editfname").hide()






  });


$("#fnamedone").click(()=>{

     $("#newfname").hide()
    $("#fnamedone").hide()
$("#firstname").show()
$("#editfname").show()



let firstname = $("#newfname").val()


let newUserInfo = {firstname:firstname,
    lastname:userData.lastname,
      email:userData.email,
    password:userData.password}

for(let i = 0;i<savedUsers.length;i++){

if(savedUsers[i].email === userData.email ){

savedUsers.splice(i,1, newUserInfo)


localStorage.setItem("users", JSON.stringify(savedUsers))

localStorage.setItem("loggedUser",JSON.stringify(newUserInfo))

location.reload()
}}})




$("#editlname").click(()=>{
    $("#newlname").show()
    $("#lnamedone").show()
$("#lastname").hide()
$("#editlname").hide()

  });

$("#lnamedone").click(()=>{

    $("#newlname").hide()
   $("#lnamedone").hide()
$("#lastname").show()
$("#editlname").show()
let lastname = $("#newlname").val()


let newUserInfo = {firstname:userData.firstname,
   lastname:lastname,
     email:userData.email,
   password:userData.password}

for(let i = 0;i<savedUsers.length;i++){

if(savedUsers[i].email === userData.email ){

savedUsers.splice(i,1, newUserInfo)


localStorage.setItem("users", JSON.stringify(savedUsers))
localStorage.setItem("loggedUser",JSON.stringify(newUserInfo))

location.reload()
}}})


$("#editemail").click(()=>{
    $("#newemail").show()
    $("#emaildone").show()
$("#e_mail").hide()
$("#editemail").hide()

  });

$("#emaildone").click(()=>{

    $("#newemail").hide()
   $("#emaildone").hide()
$("#e_mail").show()
$("#editemail").show()



let email = $("#newemail").val()


let newUserInfo = {firstname:userData.firstname,
   lastname:userData.lastname,
     email:email,
   password:userData.password}

for(let i = 0;i<savedUsers.length;i++){

if(savedUsers[i].email === userData.email ){

savedUsers.splice(i,1, newUserInfo)


localStorage.setItem("users", JSON.stringify(savedUsers))
localStorage.setItem("loggedUser",JSON.stringify(newUserInfo))

location.reload()
}

}


})




$("#editpassword").click(()=>{
    $("#newpassword").show()
    $("#passworddone").show()
$("#password").hide()
$("#editpassword").hide()

  });

$("#passworddone").click(()=>{

    $("#newpassword").hide()
   $("#passworddone").hide()
$("#password").show()
$("#editpassword").show()



let password = $("#newpassword").val()


let newUserInfo = {firstname:userData.firstname,
   lastname:userData.lastname,
     email:userData.email,
   password:password}

for(let i = 0;i<savedUsers.length;i++){

if(savedUsers[i].email === userData.email ){

savedUsers.splice(i,1, newUserInfo)


localStorage.setItem("users", JSON.stringify(savedUsers))
localStorage.setItem("loggedUser",JSON.stringify(newUserInfo))

location.reload()
}

}


})

console.log(userData)



$("#delete").click(()=>{
   


$("#deletewindow").show()



  });


  $("#continue").click(()=>{
    $("#deletewindow").hide()
  })


$("#deleteUser").click(()=>{


  for(let i = 0;i<savedUsers.length;i++){

    if(savedUsers[i].email === userData.email ){
    
    savedUsers.splice(i,1)
    
    
    localStorage.setItem("users", JSON.stringify(savedUsers))


    window.location = "index.html"
    }
    
    }

})

$(".newInfo").hide()

$(".done").hide()


$("#deletewindow").hide()


$("#firstname").text(`${userData.firstname}`)

$("#lastname").text(`${userData.lastname}`)

$("#e_mail").text(`${userData.email}`)


$("#password").text(`${userData.password}`)

$("#welcome").text(`Welcome ${userData.firstname}`)

$("#surname").text(` How may we help the ${userData.lastname} family`)

$("#email").text(` Would like us to send updates to ${userData.email}`)


