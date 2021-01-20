$(document).ready(function () {

// const hide = $("#hide")
// hide.attr("class", "hide")
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


function generateDescription(data) {
  console.log(data)
  let gameImg = $("<img>").attr("src", data.games[0].image_url)
  let newDiv = $("<div class='gameDesInfo'>");
  let descriptionDiv = $("<div>")
  let newH6 = $("<h6>");
  let imgSrc = $(".imgSrc")
  let gameRules = $(".ruleLink")
  let cardTime = $(".cardTime")

  cardTime.append(newH6, data.games[0].max_playtime)
  gameRules.attr("href", data.games[0].rules_url)
//   gameRules.append(gameRulesLink)
  imgSrc.append(gameImg)
  newDiv.append(descriptionDiv);
  descriptionDiv.append(newH6, data.games[0].description_preview);
  $("#infoDiv").append(newDiv);
}
$("#infoDiv").empty();
generateDescription(data)
  })
})


// const description = $(".descriptionLink")

// description.on("click", function (event) {

// })


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

