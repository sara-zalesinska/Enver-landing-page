import '../styles/main.scss';

import { setupCarousel } from './components/carousel';
import { setupVideoPlayer } from './components/videoplayer';
import { setupNavigation } from './components/navigation';

document.addEventListener('DOMContentLoaded', () => {
  setupCarousel();
  setupVideoPlayer();
  setupNavigation();
});
