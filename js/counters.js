(function () {
  'use strict';

  const slotsEl = document.getElementById('liveSlots');
  const signupsEl = document.getElementById('liveSignups');
  const countdownEl = document.getElementById('payoutCountdown');

  if (!slotsEl && !signupsEl && !countdownEl) return;

  let slots = parseInt(localStorage.getItem('utc_slots') || '5', 10);
  let signups = parseInt(localStorage.getItem('utc_signups') || '12', 10);

  function animateValue(el, newVal) {
    if (!el) return;
    el.textContent = newVal;
    el.classList.add('pulse');
    setTimeout(() => el.classList.remove('pulse'), 500);
  }

  function updateStats() {
    if (Math.random() > 0.6 && slots > 1) {
      slots--;
      localStorage.setItem('utc_slots', slots);
      animateValue(slotsEl, slots);
    }
    if (Math.random() > 0.5) {
      signups++;
      localStorage.setItem('utc_signups', signups);
      animateValue(signupsEl, signups);
    }
  }

  if (slotsEl) slotsEl.textContent = slots;
  if (signupsEl) signupsEl.textContent = signups;

  function resetDaily() {
    const today = new Date().toDateString();
    const lastReset = localStorage.getItem('utc_last_reset');
    if (lastReset !== today) {
      slots = 5;
      signups = Math.floor(Math.random() * 5) + 8;
      localStorage.setItem('utc_slots', slots);
      localStorage.setItem('utc_signups', signups);
      localStorage.setItem('utc_last_reset', today);
      if (slotsEl) slotsEl.textContent = slots;
      if (signupsEl) signupsEl.textContent = signups;
    }
  }

  resetDaily();
  setInterval(updateStats, 45000 + Math.random() * 45000);

  function updateCountdown() {
    if (!countdownEl) return;
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    countdownEl.textContent =
      String(h).padStart(2, '0') + ':' +
      String(m).padStart(2, '0') + ':' +
      String(s).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
