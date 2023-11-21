const video = document.querySelector('.video-section__video');
const videoShadow = document.querySelector('.video-section__video-shadow');
const videoPlayBtn = document.querySelector('.video-section__video-play-btn');
const togglePlayBtn = document.querySelector('.controls__toggle-play-btn');
const skipBtns = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.controls__slider');
const progressBarFilled = document.querySelector('.controls__progress--filled');
const progressBar = document.querySelector('.controls__progress');
const videoTime = document.querySelector('.controls__current-video-time');
const volumeOnIcon = document.querySelector('.fa-volume-high');
const volumeOffIcon = document.querySelector('.fa-volume-xmark');

const setupVideoPlayer = () => {
  function togglePlay() {
    if (video.paused) {
      video.play();
      videoShadow.style.visibility = 'hidden';
      videoPlayBtn.style.display = 'none';
      togglePlayBtn.textContent = '||';
    } else {
      video.pause();
      videoShadow.style.visibility = 'visible';
      videoPlayBtn.style.display = 'block';
      togglePlayBtn.textContent = '►';
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
    const timePercentage = (video.currentTime / video.duration) * 100;
    progressBarFilled.style.flexBasis = `${timePercentage}%`;
  }

  function handleProgressManual(e) {
    const progressTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = progressTime;
  }

  function convertTime(num) {
    //  let hours = Math.floor(num/3600);
    let minutes = getFormatedTimeNum(Math.floor(num / 60));
    let seconds = getFormatedTimeNum(Math.round(num % 60));
    return minutes + ':' + seconds;
  }

  function updateVideoTime() {
    videoTime.textContent = convertTime(video.currentTime);
  }

  function getFormatedTimeNum(time) {
    if (time < 10) {
      return '0' + time;
    } else {
      return time;
    }
  }

  function turnOffVolume() {
    video.volume = 0;
    volumeOffIcon.style.display = 'block';
    volumeOnIcon.style.display = 'none';
  }

  function turnOnVolume() {
    video.volume = 1;
    volumeOffIcon.style.display = 'none';
    volumeOnIcon.style.display = 'block';
  }

  videoShadow.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);
  videoPlayBtn.addEventListener('click', togglePlay);
  togglePlayBtn.addEventListener('click', togglePlay);
  skipBtns.forEach((button) => button.addEventListener('click', skip));
  ranges.forEach((range) => range.addEventListener('change', handleRange));
  video.addEventListener('timeupdate', handleProgress);
  progressBar.addEventListener('click', handleProgressManual);
  video.addEventListener('timeupdate', updateVideoTime);
  volumeOnIcon.addEventListener('click', turnOffVolume);
  volumeOffIcon.addEventListener('click', turnOnVolume);
};

export { setupVideoPlayer };
