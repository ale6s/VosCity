
//register
var btnregister = document.getElementById("btnregister");
var emailRegister = document.getElementById("user-email");
var pwsRegister = document.getElementById("user-pass");
var pws_rep = document.getElementById("user-repeatpass");
var error_reg = document.getElementById("error-reg");


btnregister.addEventListener('click', e => {
  if (pwsRegister.value == pws_rep.value) {
    firebase.auth().createUserWithEmailAndPassword(emailRegister.value, pws_rep.value).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
      // ...
    });

    //if true then it will auto login
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        document.getElementById("login_div").style.display = "none";
        window.location.replace("user.html");
        document.getElementById("user_div").style.display = "block";

        var user = firebase.auth().currentUser;
      }
    });

  } else {
    error_reg.innerHTML = "Passwords do not match. Try again"
  }
});


//login
function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
  //if true then it will auto login
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      document.getElementById("login_div").style.display = "none";
      window.location.replace("user.html");
      document.getElementById("user_div").style.display = "block";

      var user = firebase.auth().currentUser;
    } else {
      // No user is signed in.
      document.getElementById("login_div").style.display = "block";

    }
  });
}


//logout user
function logout() {
  firebase.auth().signOut();
  window.location.replace("login.html");

}


//reset password
function resetpws() {
  var resetEmail = document.getElementById("resetEmail").value;

  if (resetEmail != "") {
    firebase.auth().sendPasswordResetEmail(resetEmail).then(function(){
      document.getElementById("error_reset").innerHTML = "Check your email, Email to reset your password has been sent."
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode)
      console.log(errorMessage)
      alert("Message: " + errorMessage)
    })
  } else {
    document.getElementById("error_reset").innerHTML = "Write a correct email!"
  }
}





