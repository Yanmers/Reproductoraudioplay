const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
    if (audio.pause || audio.endend) {
        playPause.querySelector(".pause-btn").classList
        playPause.querySelector(".play-btn").classList
        audio.play();
    } else {
        audio.pause();
        playPause.querySelector(".pause-btn").classList
        playPause.querySelector(".play-btn").classList
    }
});