(function () {
  'use strict';

  const wizard = document.getElementById('setupWizard');
  if (!wizard) return;

  const panels = wizard.querySelectorAll('.wizard-panel');
  const stepBtns = wizard.querySelectorAll('.wizard-step-btn');
  const progressBar = document.getElementById('wizardProgress');
  const prevBtn = document.getElementById('wizardPrev');
  const nextBtn = document.getElementById('wizardNext');
  const completed = new Set();
  let current = 0;

  function updateUI() {
    panels.forEach((p, i) => p.classList.toggle('active', i === current));
    stepBtns.forEach((b, i) => {
      b.classList.toggle('active', i === current);
      b.classList.toggle('completed', completed.has(i));
    });
    const pct = ((current + 1) / panels.length) * 100;
    if (progressBar) progressBar.style.width = pct + '%';

    if (prevBtn) prevBtn.style.visibility = current === 0 ? 'hidden' : 'visible';

    if (nextBtn) {
      if (current === panels.length - 1) {
        nextBtn.textContent = 'Claim $40 Reward →';
        nextBtn.classList.add('highlight');
        nextBtn.onclick = () => { window.location.href = 'join.html'; };
      } else {
        nextBtn.textContent = 'Next Step →';
        nextBtn.classList.remove('highlight');
        nextBtn.onclick = goNext;
      }
    }
  }

  function goNext() {
    const check = panels[current].querySelector('.wizard-complete-check input');
    if (check && !check.checked) {
      check.parentElement.style.animation = 'pulseValue 0.3s ease';
      setTimeout(() => { check.parentElement.style.animation = ''; }, 300);
      return;
    }
    completed.add(current);
    if (current < panels.length - 1) {
      current++;
      updateUI();
    }
  }

  function goPrev() {
    if (current > 0) {
      current--;
      updateUI();
    }
  }

  stepBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      current = i;
      updateUI();
    });
  });

  wizard.querySelectorAll('.wizard-complete-check input').forEach(input => {
    input.addEventListener('change', function () {
      const idx = parseInt(this.dataset.step, 10);
      if (this.checked) completed.add(idx);
      else completed.delete(idx);
      updateUI();
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  if (nextBtn) nextBtn.addEventListener('click', goNext);

  updateUI();
})();
