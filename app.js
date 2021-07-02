// ============function-onsignup==============
function onSignUp() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var message = document.getElementById("login-success")

    var user = {
        email:email.value,
        password:password.value
    }
    var users = JSON.parse(localStorage.getItem("users")) || [];

    localStorage.setItem(("user"),JSON.stringify(user))

    var userIdx = users.findIndex(function (val) {
      return val.email.toLowerCase() === users.email.toLowerCase()
    });

    console.log(users)


if (userIdx === -1) {
    users.push(user)

    localStorage.setItem("users", JSON.stringify(users))
  location.href = "login.html"
}
else{
 message.innerHTML = email + " Use in another account"
}


setTimeout(() => {
  message.innerHTML = "";
},2000);

}
