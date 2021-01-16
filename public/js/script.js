
//on click to get client api 
description.on("click", function (event) {

  let name = $(this).data('name');
  let queryUrl = "https://www.boardgameatlas.com/api/search?name=" + name + "&client_id=kyVOUd1oPF"
  $("#").empty();
  $.ajax({
    method: "GET",
    url: queryUrl
  }).then(data => {

    generateDescription(data)

  })
})

//on click event
$(document).on("click", event => {
  $("#").empty();
})


//sign up globals
const signUpEmail = $("#signUpEmail");
const signUpFirstname = $("#signUpFirstname");
const signUpLastname = $("#signUpLastname");
const signUpUsername = $("#signUpUsername");
const signUpPassword = $("#signUpPassword");
const signUpButton = $("#signUpBtn");
const signUpForm = $("#signUpForm");



let user = {
    email: signUpEmail.val().trim(),
    firstname: signUpFirstname.val().trim(),
    lastname: signUpLastname.val().trim(),
    username: signUpUsername.val().trim(),
    password: signUpPassword.val().trim(),
  };
  return user;


