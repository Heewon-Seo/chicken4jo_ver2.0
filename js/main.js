

const videoUrl = [ // 여기에 순서대로 url 넣어주면됨
  "https://raw.githubusercontent.com/chicken4zo/files/master/coda.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/mogadishu.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/hostage.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/spiderman.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/dreamingcats.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/eternals.mp4",
  "https://raw.githubusercontent.com/chicken4zo/files/master/freeguy.mp4"
]
const videoContainer = document.querySelectorAll(".carousel-item");
const closeButton = document.querySelector("#close");

for(let i = 0 ; i < videoContainer.length ; i++) {
  videoContainer[i].addEventListener("click", function (){
    const source = document.querySelector("#video-source");
    const videoId = document.querySelector("#video-player");
    const bgVideo = document.querySelector(".video-fluid");
    source.src = videoUrl[i]; // 배열에 있는 url > 소스에 넣어줌
    document.getElementById('video-container').style.visibility= 'visible';
    document.getElementById('video-container').style.opacity="1";
    document.getElementById('fade').style.visibility = 'visible';
    bgVideo.pause();
    videoId.load(); // 비디오 로드
    videoId.currentTime=0; // 처음부터 재생
    videoId.play();
  });
}

closeButton.addEventListener("click",function () { // 모달창 닫음
  const videoId = document.querySelector("#video-player");
  const bgVideo = document.querySelector(".video-fluid");
  document.getElementById('video-container').style.visibility = 'hidden';
  document.getElementById('video-container').style.opacity="0";
  document.getElementById('fade').style.visibility = 'hidden';
  videoId.pause();
  bgVideo.play();
})

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

