
// function changePanel(){
//   const signUpButton = document.getElementById("signUp");
//   const signInButton = document.getElementById("signIn");
//   const container = document.getElementById("container");
  
//   signUpButton.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
//   });
  
//   signInButton.addEventListener("click", () => {
//     container.classList.remove("right-panel-active");
//   });
// }


//=============if input is empty ==========
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
    var name = document.getElementById("name")
    var phone = document.getElementById("phone")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var message = document.getElementById("login-success")

    var user = {
        name:name.value,
       phone:phone.value,
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
        container.classList.remove("right-panel-active");
      
    },2000);
    localStorage.setItem("users", JSON.stringify(users))
   
  
}
else{
 message.innerHTML = user.email + " Use in another account"
 
}

}

//===============function-onlogin==============

function onLogin() {
  var name = document.getElementById("name")
  var phone = document.getElementById("phone")
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
  return false;
}

setTimeout(()=>{
  message.innerHTML = "";
  // container.classList.add("right-panel-active");
  location.href = "index.html"
},
2000
  );


}
//===============function-getCurrentUser==============
function getCurrentUser() {
  var detial = document.getElementById("detial");
  let fullName = document.getElementById("FullName")
  let phoneNumber = document.getElementById("PhoneNumber")
  let email = document.getElementById("Email")
  var user = JSON.parse(localStorage.getItem("user"));
  detial.innerHTML = "Welcome" + "\n" +user.name;
  fullName.innerHTML = "Full Name" + "\n" +user.name;
  phoneNumber.innerHTML = "Phone" + "\n" +user.phone;
  email.innerHTML = "Email" + "\n" +user.email;
}

// ============todo-list=============

 var display = document.getElementById("display")

function todo(){
// ------------------taking-input-from-users-------------------
  var title = document.getElementById("titleInput");
  var discription = document.getElementById("discriptionInput");
  // -------------------creating-div-element------------------
  var divColumn = document.createElement('div');
  divColumn.setAttribute("class","col-md-4") ;
  display.appendChild(divColumn);

  // -------------------creating-div-element------------------
  var divCard = document.createElement('div');
  divCard.className = "mt-35px card-deck";
  divColumn.appendChild(divCard);

// -------------------creating-div-element------------------
  var card = document.createElement('div');
  card.setAttribute("class","card") ;
  divCard.appendChild(card);
//  -------------------inserting-img-into-div-element------------------------
   var cardImage = document.createElement('img');
   cardImage.setAttribute("src","https://media.istockphoto.com/photos/check-off-a-todo-list-with-a-black-pen-picture-id1212554542?k=6&m=1212554542&s=612x612&w=0&h=dAEORdxXuwjVzkuSvnqNfZaCD1mNq9dupvQzqyKooh8=")
   cardImage.className = "card-img-top";
  card.appendChild(cardImage);
// -------------------------card-body-for-text-------------------
   var cardBody = document.createElement('div');
   cardBody.className = "card-body";
   card.appendChild(cardBody);

  // ----------------------title-heading-----------------------
  var heading = document.createElement('h5');
  heading.setAttribute("class","card-title");
  cardBody.appendChild(heading);
     //--------------------heading-get-------------
     var heading = document.querySelector(".card-title")
     var headingtext = document.createTextNode(title.value);  
     heading.appendChild(headingtext);
// ---------------------------------discription-text-----------------------
  var text = document.createElement('p');
  text.setAttribute("class","card-text");
  cardBody.appendChild(text);

     //--------------------discription-get-------------
   var discriptionhead = document.querySelector(".card-text")
   var descripText = document.createTextNode(discription.value);  
   discriptionhead.appendChild(descripText);

   //created delet button
var delBtn = document.createElement("button")
var textBtn = document.createTextNode("DELET")
delBtn.appendChild(textBtn)
card.appendChild(delBtn)
delBtn.setAttribute("id","delet")
delBtn.className = "btn btn-danger "
delBtn.setAttribute("onclick","deletitem(this)")


//created edit button

// var editBtn = document.createElement("button")
// var textBtn = document.createTextNode("EDIT")
// editBtn.appendChild(textBtn)
// carDeck.appendChild(editBtn)
// editBtn.setAttribute("id","edit")
// editBtn.setAttribute("onclick","edititem(this)")

  display.appendChild(divColumn)
  // ----------------------after-creating-1-div-input-value-remove--------------------
  title.value = ""
  discription.value = ""

}
// ---------------------------delet-value---------------------
function deletitem(e){
  e.parentNode.remove()
}
// ----------------------------edit-value----------------------------
// function edititem(e){
    
//   var val = e.parentNode.firstChild.nodeValue   //is se hame value mil gai jo likha tha
//   var  editValue = prompt("enter your edit value",val)
//   e.parentNode.firstChild.nodeValue = editValue 

// }

function deletall(){
  list.innerHTML=""
}
// ===============function-logout=======================
function onLogout() {
  var message = document.getElementById("message");
  localStorage.removeItem("user");
  message.innerHTML = "Good Bye.!";
  // clear state
  setTimeout(() => {
    message.innerHTML = "";
    location.href = "signup.html"
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