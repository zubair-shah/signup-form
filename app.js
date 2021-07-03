



// =============if input is empty ==========
// function empty() {
  
//   if (email.value == "" || password.value == "") {
//       alert("Enter a Valid email and  password");
//       return false;
  
//   }
//   else{
//     return true;
//   }
// }




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


    var userIdx = users.findIndex(function (val) {
      return val.email.toLowerCase() === user.email.toLowerCase()
    });

    console.log(userIdx)



   
if (userIdx === -1) {
    message.innerHTML = " signup successful"
    users.push(user)
    setTimeout(() => {
      message.innerHTML = "";
      location.href = "login.html"
    },4000);
    localStorage.setItem("users", JSON.stringify(users))
   
  
}
else{
 message.innerHTML = user.email + " Use in another account"
 
}

}


//===============function-onlogin==============

function onLogin() {
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var message = document.getElementById("message")
  

var user = {
  email:email.value,
  password:password.value
}

var users = JSON.parse(localStorage.getItem("users"))

var currentUser = users.find(function (val) {
  return val.email.toLowerCase() === user.email.toLowerCase() && val.password.toLowerCase() === user.password.toLowerCase() 
})
if (currentUser) {
  localStorage.setItem("user", JSON.stringify(currentUser))
 message.innerHTML = "successfully Login"
 
}
else{
  message.innerHTML = "Invalid cridential"
}

setTimeout(()=>{
  message.innerHTML = "";
  location.href = "index.html"
},
2000
  );


}
function getCurrentUser() {
  var detail = document.getElementById("detail");
  var user = JSON.parse(localStorage.getItem("user"));
  detail.innerHTML = "Loggedin as " + user.email.split("@")[0];
}

function onLogout() {
  var message = document.getElementById("message");
  localStorage.removeItem("user");
  message.innerHTML = "Good Bye.!";
  // clear state
  setTimeout(() => {
    message.innerHTML = "";
    location.href = "login.html";
  }, 3000);

}





// $(document).ready(function () {
//   $("#sidebar").mCustomScrollbar({
//       theme: "minimal"
//   });

//   $('#sidebarCollapse').on('click', function () {
//       $('#sidebar, #content').toggleClass('active');
//       $('.collapse.in').toggleClass('in');
//       $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//   });
// });