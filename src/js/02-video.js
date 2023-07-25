import Vimeo from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

function onPlay(evt){
    localStorage.setItem("videoplayer-current-time", JSON.stringify(evt.seconds));
};

player.on('play', function() {
    // iframe.ontimeupdate();
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

// if (localStorage.currentTime){
//     iframe.currentTime = localStorage.currentTime
// };
// iframe.addEventListener('timeupdate', () => localStorage.currentTime = iframe.currentTime);
// console.log(localStorage.currentTime);
// //запись в локалку с временем
// localStorage.setItem('videoplayer-current-time', JSON.stringify());