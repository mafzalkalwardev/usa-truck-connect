(function () {
  'use strict';

  const container = document.getElementById('walkthrough');
  if (!container) return;

  const slides = container.querySelectorAll('.walkthrough-slide');
  const dots = container.querySelectorAll('.walkthrough-dot');
  const pauseBtn = document.getElementById('walkthroughPause');
  const playBtn = document.getElementById('walkthroughPlay');
  let current = 0;
  let playing = true;
  let interval;

  const labels = [
    'Create Google Workspace account',
    'Add Google Voice add-on',
    'Select USA phone number',
    'Submit verification',
    'Receive $40 payout'
  ];

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function startAutoPlay() {
    playing = true;
    if (pauseBtn) pauseBtn.style.display = 'inline-block';
    if (playBtn) playBtn.style.display = 'none';
    interval = setInterval(nextSlide, 4000);
  }

  function stopAutoPlay() {
    playing = false;
    clearInterval(interval);
    if (pauseBtn) pauseBtn.style.display = 'none';
    if (playBtn) playBtn.style.display = 'inline-block';
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      showSlide(i);
    });
  });

  if (pauseBtn) pauseBtn.addEventListener('click', stopAutoPlay);
  if (playBtn) playBtn.addEventListener('click', startAutoPlay);

  showSlide(0);
  startAutoPlay();
})();
