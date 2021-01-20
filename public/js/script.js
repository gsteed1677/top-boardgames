$(document).ready(function () {
//on click to get client api 
$("#searchClick").on("click", function (event) {

  let name = $("#apiInput").val();
  let queryUrl = "https://api.boardgameatlas.com/api/search?name=" + name + "&client_id=kyVOUd1oPF"

  $.ajax({
    method: "GET",
    url: queryUrl
  }).then(data => {
    console.log(data)
    $("#gameName").text(name)
   

  })
})


const description = $(".descriptionLink")

function generateDescription(data) {
  console.log(data)
  let newDiv = $("<div class='gameDesInfo'>");
  let descriptionDiv = $("<div>")
  let newH6 = $("<h5>");
  newH6.text("Description: ")
  newDiv.append(descriptionDiv);
  descriptionDiv.append(newH6, data.games[0].description_preview);
  $("#infoDiv").append(newDiv);
}

description.on("click", function (event) {

  let name = $("#apiInput").val();;
  let queryUrl = "https://api.boardgameatlas.com/api/search?name=" + name + "&client_id=nmzLLgP0nr"
  $("#infoDiv").empty();
  $.ajax({
    method: "GET",
    url: queryUrl
  }).then(data => {

    generateDescription(data)

  })
})



$("#signClick").on("click", function (event) {

//sign up globals
const signUpEmail = $("#signUpEmail");
const signUpFirstname = $("#signUpFirstname");
const signUpLastname = $("#signUpLastname");
const signUpUsername = $("#signUpUsername");
const signUpPassword = $("#signUpPassword");



let user = {

    email: signUpEmail.val().trim(),
    firstname: signUpFirstname.val().trim(),
    lastname: signUpLastname.val().trim(),
    username: signUpUsername.val().trim(),
    password: signUpPassword.val().trim(),
  };

  $.ajax({
    method: "POST",
    url: "/user",
    data: user
  }).then(data => {
    console.log(data)
    //div needs to be created in user.handlebars
    $("#").text(user)
    

  })
})

})

