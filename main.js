import { makeConfetti } from './confetti.js';
import { showNotification, requestAndShowPermission } from './notification.js';
import {shakeAnimation} from './shake-animation.js';
import {sendAcceptanceEmail} from './email.js';
import { sendDenialEmail } from './deny.js';

const btn = document.getElementById("yes");
const btn2 = document.getElementById("no");

btn.addEventListener("click", () => {
   makeConfetti();
   sendAcceptanceEmail();

   btn.classList.add("pop");
   setTimeout(() => {
       btn.classList.remove("pop");
   }, 700);

    // Check notification permission and show notification
    let permission = Notification.permission;
    if (permission === "granted") { //not working
        showNotification();
    } else if (permission === "default") {
        requestAndShowPermission();
    } else {
        alert("Great! get ready");
    }
});

btn2.addEventListener("click", () => {
    shakeAnimation();
    sendDenialEmail();
});
