var firebaseConfig = {
    apiKey: "AIzaSyDVVydgsbcb1IjJ3vEKQdLTYMOSqU16NhQ",
    authDomain: "quiz-app-41139.firebaseapp.com",
    databaseURL: "https://quiz-app-41139-default-rtdb.firebaseio.com",
    projectId: "quiz-app-41139",
    storageBucket: "quiz-app-41139.firebasestorage.app",
    messagingSenderId: "1050480600738",
    appId: "1:1050480600738:web:2648f34f55b6f7e9ee59fb"
  };

  var app =firebase.initializeApp(firebaseConfig);

function signup() {

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    console.log(name.value);
    console.log(password.value)
    console.log(email.value)

    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

}






function Login() {

    var email = document.getElementById("Loginemail")
    var password = document.getElementById("Loginpassword")
    console.log(Loginemail.value)
    console.log(Loginpassword.value)


    firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            window.location.href = "quiz.html"
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}