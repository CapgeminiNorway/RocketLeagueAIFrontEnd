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


//Firebase Auth Check if user logged in    
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.  
        mainUser = user;
        document.getElementById("navProfile").style.display = 'block';
        document.getElementById("logInBtn").style.display = 'none';
        document.getElementById("signOutBtn").style.display = 'block';
    } else {
        document.getElementById("navProfile").style.display = 'none';
        document.getElementById("logInBtn").style.display = 'block';
        document.getElementById("signOutBtn").style.display = 'none';
    }
    $("#navBar").show();
});

//jQuery code to show and hide modal boxes
$("#logInBtn").click(function() {
    $("#logInModal").modal("show");
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

            $("#logInModal").modal("hide");

            return false;
        },
        uiShown: function() {
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: window.location.href,
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
    var avatarFile = document.getElementById('avatarUpload').files[0];

    var url = "https://rlaitfunctions.azurewebsites.net/api/newUser?code=YN1TD1aUouEiBeu13CO2GEBrRq4ptE8mnFaCkbMQY9X8kA7eibBfmg==&PID=" + PID + "&username=" + username + "&email=" + email + "&avatar=avatar_" + avatar + "." + avatarFile.name.split('.').pop();

    $("#loader").modal("show");


    firebase.auth().currentUser.getIdToken( /* forceRefresh */ true).then(function(idToken) {
        $.ajax({
            url: url,
            method: 'POST',
            headers: { "Authorization": 'Bearer ' + idToken },
            success: function(data) {
                $.ajax({
                    async: true,
                    url: "https://rlaitsas.azurewebsites.net/api/SASTokenGenerator?code=aG3zfIypmcp1tc8VRv2JvDrlbBc6CAcAAC0DukMRaAmuBttaN3x5Mw==",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    processData: false,
                    data: "{\"ContainerName\": \"rlait\"}",
                    success: function(result) {
                        const account = {
                            name: "rlaitimagesandcode",
                            sas: result
                        };

                        const blobUri = 'https://' + account.name + '.blob.core.windows.net';
                        const blobService = AzureStorage.Blob.createBlobServiceWithSas(blobUri, account.sas);

                        //AvatarFile
                        const fileA = document.getElementById('avatarUpload').files[0];
                        var extension1 = fileA.name.split('.').pop();
                        blobService.createBlockBlobFromBrowserFile('rlait', "avatar_" + mainUser.uid + "." + extension1, fileA, (error, result) => {
                            if (error) {
                                console.log(error);
                            } else {
                                return;
                            }
                        });

                        //CodeFile
                        const fileB = document.getElementById('codeUpload').files[0];
                        var extension = fileB.name.split('.').pop();;
                        blobService.createBlockBlobFromBrowserFile('rlait', "code_" + mainUser.uid + "." + extension, fileB, (error, result) => {
                            if (error) {
                                console.log(error);
                            } else {
                                return;
                            }
                        });

                        $("#loader").modal("hide");
                        $("#errorTxt").html("Your AI has been uploaded and will be added to the tournament roster");
                        $("#headerTxt").html("Upload was successful");
                        $("#errorModal").modal("show");
                    }
                });


            },
            error: function(error) {
                $("#loader").modal("hide");
                $("#errorTxt").html(error);
                $("#errorModal").modal("show");
            }
        });
    }).catch(function(error) {
        $("#loader").modal("hide");
        $("#errorTxt").html(error);
        $("#errorModal").modal("show");
    });
});

function getUpcomingMatchInfo(increment) {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rlaitfunctions.azurewebsites.net/api/getUpcomingMatchInfo",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Postman-Token": "7c011b71-dada-42da-821e-0ed562bb84a8"
        },
        "processData": false,
        "data": "{\"increment\": \"" + increment + "\"}"
    }

    $.ajax(settings).done(function(response) {
        data = JSON.parse(response);


        //P1
        $("#uindexP1Avatar").attr("src", "https://rlaitimagesandcode.blob.core.windows.net/rlait/" + data[4].name);

        $("#uindexPlayer1TotalMatches").html(parseInt(data[1].count));
        $("#uindexPlayer1TotalWins").html(parseInt(data[2].count));
        $("#uindexPlayer1WinningPercentage").html((parseInt(data[1].count) == 0 ? 0 : (parseInt(data[2].count) / parseInt(data[1].count))).toFixed(2));

        //P2
        $("#uindexP2Avatar").attr("src", "https://rlaitimagesandcode.blob.core.windows.net/rlait/" + data[9].name);
        $("#uindexPlayer2TotalMatches").html(parseInt(data[6].count));
        $("#uindexPlayer2TotalWins").html(parseInt(data[7].count));
        $("#uindexPlayer2WinningPercentage").html((parseInt(data[6].count) == 0 ? 0 : (parseInt(data[7].count) / parseInt(data[6].count))).toFixed(2));

        //Names
        $("#ucurrentMatchNames").html(data[3].name + " VS " + data[8].name);
        $("#gameInfoModal").modal("show")
    });
   ;
}