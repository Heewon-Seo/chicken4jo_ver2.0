const spinCon = document.querySelector(".audio-section");
const audioBox = document.querySelector("#spin-container");
const player = document.querySelector(".song-list");
const next = document.querySelector("#next");
const audioList = [
    "https://raw.githubusercontent.com/chicken4zo/files/master/audio1.mp3",
    "https://raw.githubusercontent.com/chicken4zo/files/master/audio2.mp3",
    "https://raw.githubusercontent.com/chicken4zo/files/master/audio3.mp3",
    "https://raw.githubusercontent.com/chicken4zo/files/master/audio4.mp3",
    "https://raw.githubusercontent.com/chicken4zo/files/master/audio5.mp3",
    "https://raw.githubusercontent.com/chicken4zo/files/master/audio6.mp3",
    "https://raw.githubusercontent.com/chicken4zo/files/master/audio7.mp3",
    "https://raw.githubusercontent.com/chicken4zo/files/master/audio8.mp3"
]

const artList = [
    "https://raw.githubusercontent.com/chicken4zo/files/master/album1.jpg",
    "https://raw.githubusercontent.com/chicken4zo/files/master/album2.png",
    "https://raw.githubusercontent.com/chicken4zo/files/master/album3.jpg",
    "https://raw.githubusercontent.com/chicken4zo/files/master/album4.jpg",
    "https://raw.githubusercontent.com/chicken4zo/files/master/album5.png",
    "https://raw.githubusercontent.com/chicken4zo/files/master/album6.png",
    "https://raw.githubusercontent.com/chicken4zo/files/master/album7.png",
    "https://raw.githubusercontent.com/chicken4zo/files/master/album8.jpg"
]

const textList = [
    "이무진 - 신호등",
    "아이유 - Celebrity",
    "D-Hack - OHAYO MY NIGHT",
    "Justin Bieber - Peaches",
    "슬기로운 의사생활 - 슈퍼스타",
    "에스파 - Next Level",
    "방탄소년단 - Butter",
    "AKMU - NAKKA"
]

let box;
let currentAudio = new Audio();
const albumArt = document.querySelector("#album-art");
const audioSrc = document.querySelector("#audio-source");
let songNum = 0;

audioBox.addEventListener("click", (e) => {
    audioPause();
    const img = e.target.className; // audio1
    const num = img.charAt(5);
    songNum = num-1;
    const albumArt = document.querySelector("#album-art");
    const audioSrc = document.querySelector("#audio-source");
    const playIcon = document.querySelector(".play-button");
    const songTitle = document.querySelector("#song-title");
    albumArt.src = artList[num-1];
    audioSrc.src = audioList[num-1];
    songTitle.textContent = textList[num-1];
    const audio = new Audio(`${audioList[num-1]}`);
    box = document.querySelector(".audio-box");
    box.style.visibility="visible";
    box.style.opacity="1";
    audio.play();
    currentAudio = audio;
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    currentAudio.play();
});

player.addEventListener("click",(e) => {
    audioPause();
    const img = e.target.id; // audio1
    const num = img.charAt(5);
    songNum = num-1;
    const albumArt = document.querySelector("#album-art");
    const audioSrc = document.querySelector("#audio-source");
    const playIcon = document.querySelector(".play-button");
    const songTitle = document.querySelector("#song-title");
    albumArt.src = artList[num-1];
    audioSrc.src = audioList[num-1];
    songTitle.textContent = textList[num-1];
    const audio = new Audio(`${audioList[num-1]}`);
    box = document.querySelector(".audio-box");
    box.style.visibility="visible";
    audio.play();
    currentAudio = audio;
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    currentAudio.play();
});

const audioPlayPause = () => {
    const playIcon = document.querySelector(".play-button");
    if(!currentAudio.paused) {
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        currentAudio.pause();
    } else {
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
        currentAudio.play();
    }
}

const audioPause = () => {
    currentAudio.pause();
};

const audioNext = () => {
    audioPause();
    if (songNum===7) {
        songNum=0;
    } else {
        songNum++;
    }
    albumArt.src = artList[songNum];
    const audio = new Audio(`${audioList[songNum]}`);
    const songTitle = document.querySelector("#song-title");
    songTitle.textContent = textList[songNum];
    audio.play();
    currentAudio = audio;
    const playIcon = document.querySelector(".play-button");
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
}

const audioPrevious = () => {
    audioPause();
    if (songNum===0) {
        songNum = 7;
    } else {
        songNum = songNum-1;
    }
    albumArt.src = artList[songNum];
    const audio = new Audio(`${audioList[songNum]}`);
    const songTitle = document.querySelector("#song-title");
    songTitle.textContent = textList[songNum];
    audio.play();
    currentAudio = audio;
    const playIcon = document.querySelector(".play-button");
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    }

function closeAudio () {
    audioPause();
    box.style.visibility = "hidden";
    box.style.opacity = "0";
}

