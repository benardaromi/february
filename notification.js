export function showNotification() {
    if (document.visibilityState === "visible") {
        return;
    }

    var title = "Confirmed!";
    var icon = "./images/confirmed.png";
    var body = "Alright, Get ready!";

    var notification = new Notification(title, { body, icon });
    notification.onclick = () => {
        notification.close();
        window.parent.focus();
    }
}

export function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            showNotification();
        }
    });
}
