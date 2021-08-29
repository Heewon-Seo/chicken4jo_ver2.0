let radius = 240;
let autoRotate = true;
let rotateSpeed = -60;
let imgWidth = 120;
let imgHeight = 170;

setTimeout(init, 100);

let odrag = document.getElementById("drag-container");
let ospin = document.getElementById("spin-container");
let aImg = ospin.getElementsByTagName("img");
let aVid = ospin.getElementsByTagName("video");
let aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

let ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? "running" : "paused";
}

let sX,
    sY,
    nX,
    nY,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

if (autoRotate) {
  let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  ospin.style.animation = `${animationName} ${Math.abs(
      rotateSpeed
  )}s infinite linear`;
}

// 이벤트 설정
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  let sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    let nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

spinCon.onmouseover = function (e) {
  e = e || window.event;
  let d = e.wheelDelta || -e.detail;

  radius += d;

  if ((radius = -600)) {
    radius += d * -1;
    init(1);
  }

  init(1);
};
spinCon.onmouseout = function (e) {
  e = e || window.event;
  let d = e.wheelDelta || -e.detail;

  radius = -250;

  init(1);
};

const videoUrl = [ // 여기에 순서대로 url 넣어주면됨
  "https://raw.githubusercontent.com/chicken4zo/files/master/coda.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/mogadishu.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/hostage.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/spiderman.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/dreamingcats.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/eternals.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/freeguy.mp4"
]

function lightbox_open(num) { // 모달창 오픈
  const source = document.querySelector("#video-source");
  source.src = videoUrl[num]; // 배열에 있는 url > 소스에 넣어줌
  const videoId = document.querySelector("#video-player");
  const bgVideo = document.querySelector(".video-fluid");
  document.getElementById('video-container').style.visibility= 'visible';
  document.getElementById('video-container').style.opacity="1";
  document.getElementById('fade').style.visibility = 'visible';
  bgVideo.pause();
  videoId.load(); // 비디오 로드
  videoId.currentTime=0; // 처음부터 재생
  videoId.play();
}

function lightbox_close() { // 모달창 닫음
  const videoId = document.querySelector("#video-player");
  const bgVideo = document.querySelector(".video-fluid");
  document.getElementById('video-container').style.visibility = 'hidden';
  document.getElementById('video-container').style.opacity="0";
  document.getElementById('fade').style.visibility = 'hidden';
  videoId.pause();
  bgVideo.play();
}

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

