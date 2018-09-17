var avatar;
var config = {
    apiKey: "AIzaSyAvtpZMLwOVUW3q3dT4nBmBWVW0PtULxoo",
    authDomain: "rlait-17c9d.firebaseapp.com",
    databaseURL: "https://rlait-17c9d.firebaseio.com",
    projectId: "rlait-17c9d",
    storageBucket: "rlait-17c9d.appspot.com",
    messagingSenderId: "331841630143"
};
firebase.initializeApp(config);

var mainUser;
var username;
var email;
var uid;

var account = {
    name: "rlaitback9112",
    sas: getSAS()
};

const blobUri = 'https://' + account.name + '.blob.core.windows.net';
const blobService = AzureStorage.Blob.createBlobServiceWithSas(blobUri, account.sas);

//Firebase Auth Check if user logged in    
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.  
        mainUser = user;
        email = user.email;
        uid = user.uid;

        document.getElementById("navProfile").style.display = 'block';
        document.getElementById("logInBtn").style.display = 'none';
        document.getElementById("signOutBtn").style.display = 'block';

        console.log("UID: " + email + " signed In");
        console.log("email: " + uid + " signed In");
    } else {
        document.getElementById("navProfile").style.display = 'none';
        document.getElementById("logInBtn").style.display = 'block';
        document.getElementById("signOutBtn").style.display = 'none';

        console.log("No User Signed In");
    }
});



//jQuery code to show and hide modal boxes
$("#logInBtn").click(function() {
    $("#logInModal").modal("show")
});

//jQuery code to sign out and register users
$("#signOutBtn").click(function() {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
    }, function(error) {
        console.error('Sign Out Error', error);
    });
});

//Firebase Auth UI Flow
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        }, firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
    ]
});

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            $("#logInModal").modal("hide");

            return false;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};


$("#submitBtn").click(function() {
    var PID = mainUser.uid;
    var username = $("#username").val();
    var email = mainUser.email;
    var code = $("#codeFile").val();
    var avatar = "avatar_" + PID + ".jpeg";// document.getElementById('fileinput').files[0];

 

    var url = "https://rlait-back.azurewebsites.net/api/newUser?code=LB8ZV1aP7CglkKsnNCg3OctCexAHRbKLb0sNS8xkKlgj4d47aWK4gg==&PID=" + PID + "&username=" + username + "&email=" + email + "&avatar= " + avatar + "&ELO=0&matchesPlayed=0";

    $.ajax({ url: url, success: function(result) {} });
});


