(function () {
  'use strict';

  const footerHost = document.getElementById('site-footer');
  if (!footerHost) return;

  fetch('partials/footer.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      footerHost.innerHTML = html;
      var joinLink = footerHost.querySelector('a[href="join.html"]');
      if (joinLink && /join\.html/.test(location.pathname)) {
        joinLink.classList.add('active');
      }
    })
    .catch(function () {
      footerHost.innerHTML = '<footer class="site-footer"><div class="container footer-bottom"><p>© 2025 USA Truck Connect</p></div></footer>';
    });
})();
