const firebaseConfig = {
    apiKey: "AIzaSyDGnOJfa0lY2BS6GBuG2UDCgMJ_AOTNIys",
    authDomain: "social-website-2fec7.firebaseapp.com",
    databaseURL: "https://social-website-2fec7-default-rtdb.firebaseio.com",
    projectId: "social-website-2fec7",
    storageBucket: "social-website-2fec7.appspot.com",
    messagingSenderId: "828451297660",
    appId: "1:828451297660:web:3ff0819bca60e81b8c6cf9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
