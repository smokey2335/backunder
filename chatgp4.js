if(typeof under !== "undefined" && under !== null) {
  if(typeof cta !== "undefined" && cta !== null) {
    window.addEventListener('blur', function() {
      var target = document.querySelector('.' + cta);
      if (target) {
        const linkHref = target.href;
        window.open(linkHref, '_blank');
        top.location.replace(under);
      }
    });
  } else {
    window.addEventListener('blur', function() {
      var target = document.querySelector('a');
      if (target) {
        const linkHref = target.href;
        window.open(linkHref, '_blank');
        top.location.replace(under);
      }
    });
  }
}

if(typeof back !== "undefined" && back !== null) {
  !(function() {
    var t;
    try {
      const URL = window.location.href.split(/[#]/)[0];
      for (t = 0; 10 > t; ++t) history.pushState({}, '', URL + '#');
      onpopstate = function(event) {
        event.state && top.location.replace(back);
      };
    } catch (o) {
      console.log(o);
    }
  })();
}
