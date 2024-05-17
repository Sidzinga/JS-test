 
 
 
 
 

 
  
 $("#form").submit( function(e){

    e.preventDefault()

  let email = $("#email").val();
  let password = $("#password").val();
  
  
  let saved = JSON.parse(localStorage.getItem('users'))

// console.log(saved)

  for(let i = 0;i<saved.length; i++){

if(saved[i].email.toLowerCase()  === email.toLowerCase() ){

    if(saved[i].password === password){

localStorage.setItem("loggedUser", JSON.stringify(saved[i]))
window.location = "dashboard.html";

    }

else {
    alert("Incorrect password!!")
}

}

  }

  }
  )
// console.log(userData + "outside")


//  $("#welcome").text(`Welcome ${userData.fisrtname}`)

//   $("#surname").text(` How may we help the ${userData.lastname} family`)

//   $("#email").text(` Would like us to send updates to ${userData.email}`)