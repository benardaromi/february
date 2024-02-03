export function shakeAnimation() {
    const noButton = document.getElementById("no");

    // Add the "shake" class to initiate the animation
    noButton.classList.add("shake");

    // Remove the "shake" class after the animation duration
    setTimeout(() => {
        noButton.classList.remove("shake");
    }, 500); // Adjust the duration (in milliseconds) based on your animation length
}
