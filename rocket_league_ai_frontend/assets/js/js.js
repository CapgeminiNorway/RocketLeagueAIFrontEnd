var config = {
    apiKey: "AIzaSyAvtpZMLwOVUW3q3dT4nBmBWVW0PtULxoo",
    authDomain: "rlait-17c9d.firebaseapp.com",
    databaseURL: "https://rlait-17c9d.firebaseio.com",
    projectId: "rlait-17c9d",
    storageBucket: "rlait-17c9d.appspot.com",
    messagingSenderId: "331841630143"
};
firebase.initializeApp(config);

//jQuery code to show and hide modal boxes
$("#logInBtn").click(function() {
    $("#logInModal").modal("show")
});

$("#signUpBtn").click(function() {
    $("#signUpModal").modal("show")
});


//jQuery code to sign out and register users
$("#signOutBtn").click(function() {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
    }, function(error) {
        console.error('Sign Out Error', error);
    });
});

$("#signUpSaveBtn").click(function() {
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("signUpEmail").value, document.getElementById("signUpEmail").value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
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
            $("#signUpModal").modal("hide");
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


//Firebase Auth Check if user logged in    
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...

        $("#navProfile").css({ 'display': 'block' });
        $("#logInSignUpBtns").css({ 'display': 'none' })
        $("#signOutBtns").css({ 'display': 'block' });

        console.log("User: " + displayName + " signed In");
    } else {
        $("#navProfile").css({ 'display': 'none' });
        $("#logInSignUpBtns").css({ 'display': 'block' })
        $("#signOutBtns").css({ 'display': 'none' });

        console.log("No User Signed In");
    }
});

