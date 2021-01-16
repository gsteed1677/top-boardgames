
//on click to get client api 
$("#searchApi").on("click", function (event) {

  let name = $(this).data('name');
  let queryUrl = "https://www.boardgameatlas.com/api/search?name=" + name + "&client_id=kyVOUd1oPF"

  $.ajax({
    method: "GET",
    url: queryUrl
  }).then(data => {

    callGame(data)

  })
})

function callGame(data) {
  let newDiv = $("<div class='gameSearch'>");
  let descriptionDiv = $("<div>")
  let newH6 = $("<h6>");
  newH6.text("Description: ")
  newDiv.append(descriptionDiv);
  descriptionDiv.append(newH6, data.games[0].description_preview);
  $("#infoDiv").append(newDiv);
}


// //sign up globals
// const signUpEmail = $("#signUpEmail");
// const signUpFirstname = $("#signUpFirstname");
// const signUpLastname = $("#signUpLastname");
// const signUpUsername = $("#signUpUsername");
// const signUpPassword = $("#signUpPassword");
// const signUpButton = $("#signUpBtn");
// const signUpForm = $("#signUpForm");



// let user = {
//     email: signUpEmail.val().trim(),
//     firstname: signUpFirstname.val().trim(),
//     lastname: signUpLastname.val().trim(),
//     username: signUpUsername.val().trim(),
//     password: signUpPassword.val().trim(),
//   };
//   return user;


