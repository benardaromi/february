//using emailjs apis

import {showNotification} from './notification.js';

(function(){
    emailjs.init("XJ_MqJdEWumwCeSPU");
 })();

export function sendDenialEmail() {
    const toName = "aromi";  
    const fromName = "kb";      
    const message = "Amezua io story";  

    emailjs.send("contact_service", "contact_form", {
        to_email: "aromibenard@gmail.com",
        to_name: toName,
        from_name: fromName,
        message: message,
    })
    .then(
        function(response) {
            console.log("Response sent:", response.status, response.text);
            showNotification("Email sent successfully!");
        },
        function(error) {
            console.error("Error sending email:", error);
            alert("Hmm..that didnt quite work");
        }
    );
}
