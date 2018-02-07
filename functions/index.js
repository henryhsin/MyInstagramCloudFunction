const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! Hsin!");
});

exports.sendPushNotification = functions.https.onRequest((req, res) => {
    res.send('Attemp to push notification!!!');

    // This registration token comes from the client FCM SDKs.
    var fcmTocken = "fcADyUadmTo:APA91bHez-ZoaAqR-xRsUSpGCM-1pJ9xyfTpJ2liy2ozqg2QlNAc8oZeWrvlBs_zxcPWfgutzK_WFsHEcGMGzyhKQ1dIsWKOeUAM7ckMx4KvKqbubToSgE2VmvJy7ZbNyype-yRNWuPp";

    // This registration token comes from the client FCM SDKs.

    // See the "Defining the message payload" section below for details
    // on how to define a message payload.
    var payload = {
        notification: {
            title: 'push title here...',
            body: 'push body here...'
        },
        data: {
            score: "850",
            time: "2:45"
        }
    };

    // Send a message to the device corresponding to the provided
    // registration token.
    admin.messaging().sendToDevice(fcmTocken, payload)
        .then(function (response) {
            // See the MessagingDevicesResponse reference documentation for
            // the contents of response.
            console.log("Successfully sent message:", response);
        })
        .catch(function (error) {
            console.log("Error sending message:", error);
        });
});


