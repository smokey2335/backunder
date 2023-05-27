if (typeof under !== "undefined" && under !== null) {
  if (typeof cta !== "undefined" && cta !== null) {
    document.addEventListener('click', function(event) {
      var target = event.target;
      while (target) {
        if (target.tagName === 'A' && target.classList.contains(cta)) {
          const linkHref = target.href;
          event.preventDefault();
          window.top.open(linkHref, '_blank');
          setTimeout(function() {
            window.top.location.replace(under);
          }, 100);
          break;
        }
        target = target.parentNode;
      }
    });
  } else {
    document.addEventListener('click', function(event) {
      var target = event.target;
      while (target) {
        if (target.tagName === 'A') {
          const linkHref = target.href;
          event.preventDefault();
          window.top.open(linkHref, '_blank');
          setTimeout(function() {
            window.top.location.replace(under);
          }, 100);
          break;
        }
        target = target.parentNode;
      }
    });
  }
}

if (typeof back !== "undefined" && back !== null) {
  var backButton = document.createElement('button');
  backButton.innerHTML = 'Go Back';
  backButton.addEventListener('click', function() {
    window.top.location.replace(back);
  });
  document.body.appendChild(backButton);
}
