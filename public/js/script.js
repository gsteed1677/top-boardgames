
//login event listeners
const loginButton = $("#loginButton")
const loginForm = $(".loginForm")
const loginUsername = $("#loginUsernameInput");
const loginPassword = $("#loginPasswordInput");

loginForm.on("submit", event => {
  event.preventDefault();
  let username = loginUsername.val().trim();
  let password = loginPassword.val().trim();
  let loginObj = {
    username: username,
    password: password
  }
  $.ajax({
    method: "GET",
    url: "/user/login",
    data: loginObj
  }).then(() => {
    window.location.href = "/user";
  })

})

//sign up event listeners
const signUpEmail = $("#signUpEmail");
const signUpFirstname = $("#signUpFirstname");
const signUpLastname = $("#signUpLastname");
const signUpUsername = $("#signUpUsername");
const signUpPassword = $("#signUpPassword");