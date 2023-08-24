import '../styles/main.scss';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    breakpoints: {
        768: {
            // slidesPerView: 3,
            // spaceBetween: 20,

        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
  });



  const hamburgerBtn = document.querySelector('.hamburger');
  const closeNavBtn = document.querySelector('.close-menu');
  const navigation = document.querySelector('.nav');

  function openNav() {
    navigation.style.visibility = "visible"
    closeNavBtn.style.visibility = "visible"
    hamburgerBtn.visibility = "hidden"
  }

  function closeNav() {
    navigation.style.visibility = "hidden"
    closeNavBtn.style.visibility = "hidden"
    hamburgerBtn.style.visibility = "visible"
  }

  hamburgerBtn.addEventListener('click',openNav);
  closeNavBtn.addEventListener('click', closeNav);





  const video = document.querySelector('.video-section__video')
  const videoShadow = document.querySelector('.video-section__video-shadow')
  const videoWrapper = document.querySelector('.video-section__video-wrapper')
  const videoPlayBtn = document.querySelector('.video-section__video-play-btn')
  const controlsPanel = document.querySelector('.controls')
  const togglePlayBtn = document.querySelector('.controls__toggle-play-btn')
  const skipBtns = document.querySelectorAll('[data-skip]')
  const ranges = document.querySelectorAll('.controls__slider')
  const progressBarFilled = document.querySelector('.controls__progress--filled')
  const progressBar = document.querySelector('.controls__progress')
  const videoTime = document.querySelector('.controls__current-video-time')
  const volumeOnIcon = document.querySelector('.fa-volume-high')
  const volumeOffIcon = document.querySelector('.fa-volume-xmark')



function togglePlay() {
  if (video.paused) {
    video.play()
    videoShadow.style.visibility = "hidden"
    videoPlayBtn.style.display = "none"
    togglePlayBtn.textContent = "||"
    
  } else {
    video.pause()
    videoShadow.style.visibility = "visible"
    videoPlayBtn.style.display = "block"
    togglePlayBtn.textContent = "►"
  }
}

 function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
 }

 function handleRange() {
  video[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
 }


 function handleProgress() {
  const timePercentage = (video.currentTime / video.duration) * 100 
  progressBarFilled.style.flexBasis = `${timePercentage}%`
 }


function handleProgressManual(e) {
  
  const progressTime = (e.offsetX / progressBar.offsetWidth) * video.duration
  video.currentTime = progressTime
}

// const lol = video.currentTime

function convertTime(num) {
//  let hours = Math.floor(num/3600);
 let minutes = getFormatedTimeNum(Math.floor(num/60));
 let seconds = getFormatedTimeNum(Math.round(num % 60));
  return minutes + ":" + seconds
}

function updateVideoTime() {
  videoTime.textContent =  convertTime(video.currentTime);
}

function getFormatedTimeNum(time) {
  if(time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function turnOffVolume() {
    video.volume = 0;
    volumeOffIcon.style.display = "block"
    volumeOnIcon.style.display = "none"
}

function turnOnVolume() {
  video.volume = 1;
  volumeOffIcon.style.display = "none"
  volumeOnIcon.style.display = "block"
}

videoShadow.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay)
videoPlayBtn.addEventListener('click', togglePlay)
togglePlayBtn.addEventListener('click', togglePlay)
skipBtns.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRange))
video.addEventListener('timeupdate', handleProgress)
progressBar.addEventListener('click', handleProgressManual)
video.addEventListener('timeupdate', updateVideoTime)
volumeOnIcon.addEventListener('click', turnOffVolume)
volumeOffIcon.addEventListener('click', turnOnVolume)