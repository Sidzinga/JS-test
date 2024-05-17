

let loggedUser = localStorage.getItem("loggedUser")

let userData = JSON.parse(loggedUser)

console.log(userData)

$("#welcome").text(`Welcome ${userData.fisrtname}`)

$("#surname").text(` How may we help the ${userData.lastname} family`)

$("#email").text(` Would like us to send updates to ${userData.email}`)