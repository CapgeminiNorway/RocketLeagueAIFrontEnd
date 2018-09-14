
var config = {
    apiKey: "AIzaSyAvtpZMLwOVUW3q3dT4nBmBWVW0PtULxoo",
    authDomain: "rlait-17c9d.firebaseapp.com",
    databaseURL: "https://rlait-17c9d.firebaseio.com",
    projectId: "rlait-17c9d",
    storageBucket: "rlait-17c9d.appspot.com",
    messagingSenderId: "331841630143"
};
firebase.initializeApp(config);


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

        
        document.getElementById("navProfile").style.display ='block' ;
        document.getElementById("logInBtn").style.display = 'none';
        document.getElementById("signOutBtn").style.display = 'block';
        console.log("User: " + displayName + " signed In");
    } else {
        document.getElementById("navProfile").style.display = 'none';
        document.getElementById("logInBtn").style.display ='block';
        document.getElementById("signOutBtn").style.display = 'none' ;

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

window.onload= getLeaderBoard;

function getLeaderBoard(){
    var json;  
    $.getJSON('https://rlait-back.azurewebsites.net/api/getLeaderBoard?code=aaa0qYLt5HNgsfOPA2fK/Pi08pwvXeAsvprZx8oa9gnNwAwYyAOy4Q==', function(data) {
    	json = data

    	for(var i = 0; i < json.length; i++){
    		$("#index" + i).html(json[i].userName); 
			$("#index" + i + "Score").html(json[i].count); 
    	}
    	
    });

    
    $(document).ready(function(){
        console.log("YES");

        var iframe = document.createElement('iframe');
        iframe.style.display = "block";
        iframe.src = "https://player.twitch.tv/?channel=capgemini_rocketleagueai";
        iframe.frameborder="<frameborder>";
        iframe.scrolling="<scrolling>";
        iframe.allowfullscreen="<allowfullscreen>"; 
        iframe.id="twtich";
        iframe.className="embed-responsive-item";
        document.getElementById("twitchContainer").className = "embed-responsive embed-responsive-16by9";
        document.getElementById("twitchContainer").appendChild(iframe);});
}