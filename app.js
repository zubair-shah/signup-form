// ============function-onsignup==============
function onSignUp() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var user = {
        email:email.value,
        password:password.value
    }
    localStorage.setItem(("user"),JSON.stringify(user))

    console.log(user)
}