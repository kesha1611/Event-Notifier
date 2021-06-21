
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCV7Xcs7LxAUI2N7kh2JgmRInE-gh5KSgQ",
    authDomain: "event-1e4a0.firebaseapp.com",
    databaseURL: "https://event-1e4a0.firebaseio.com",
    projectId: "event-1e4a0",
    storageBucket: "event-1e4a0.appspot.com",
    messagingSenderId: "591299648424",
    appId: "1:591299648424:web:c38d2624c5df97b81a5b9d",
    measurementId: "G-ERR26KKDMP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function RegisterUser() {
   var email=document.getElementById('email').value;
   var password=document.getElementById('password').value;
   var fname=document.getElementById('fname').value;
   var lname=document.getElementById('lname').value;
   var phone=document.getElementById('phone').value;
   firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    // alert('User Register successfully');
    var id=firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+id).set({
     fisrtName:fname,
     lastName:lname,
     phone:phone,
    });

window.open("Login_student.html");


   }).catch(function(error){

    var errorcode=error.code;
    var errormsg=error.message;

   });

  }
  function LoginUser(){
   var email=document.getElementById('email').value;
   var password=document.getElementById('password').value;
   firebase.auth().signInWithEmailAndPassword(email,password).then(function(){


    var id=firebase.auth().currentUser.uid;
    window.location.replace("dashboard_student.html");
    localStorage.setItem('id',id);
    
   }).catch(function(error){

    var errorCode=error.code;
    var errorMsg=error.message;

   });
  }
