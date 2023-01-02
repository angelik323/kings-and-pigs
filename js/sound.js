const loadSound = function (source) {
    const sound = document.createElement("audio");
    sound.src = source;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none"; // <-- oculto
    document.body.appendChild(sound);
    return sound;
};

const $buttonPlay = document.querySelector("#btnPlay"),
    $buttonPause = document.querySelector("#btnPause"),
    $buttonRestarting = document.querySelector("#btnRestarting");
// El sonido que podemos reproducir o pausar
const sound = loadSound("sonido.flac");
$buttonPlay.onclick = () => {
    sound.play();
};
$buttonPause.onclick = () => {
    sound.pause();
};
$buttonRestarting.onclick = () => {
    sound.currentTime = 0;
};