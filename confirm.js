if(typeof under !== "undefined" && under !== null){
  if(typeof cta !== "undefined" && cta !== null){
    document.addEventListener('click', function(event){
      var target = event.target;
      while(target){
        if(target.tagName === 'A' && target.classList.contains(cta)){
          const linkHref = target.href;
          event.preventDefault();
          const confirmed = window.confirm("Are you sure you want to open this link in a new tab?");
          if (confirmed) {
            window.open(linkHref,'_blank');
            window.location.replace(under);
          }
          break;
        }
        target = target.parentNode;
      }
    });
  } else {
    document.addEventListener('click', function(event){
      var target = event.target;
      while(target){
        if(target.tagName === 'A'){
          const linkHref = target.href;
          event.preventDefault();
          const confirmed = window.confirm("Are you sure you want to open this link in a new tab?");
          if (confirmed) {
            window.open(linkHref,'_blank');
            window.location.replace(under);
          }
          break;
        }
        target = target.parentNode;
      }
    });
  }
}
if(typeof back !== "undefined" && back !== null){
  !(function(){
    var t;
    try{
      const URL = window.location.href.split(/[#]/)[0];
      for(t = 0; t < 10; ++t) {
        history.pushState({}, '', URL + '#');
      }
      onpopstate = function(event){
        const confirmed = window.confirm("Are you sure you want to leave this page?");
        if (confirmed) {
          event.state && location.replace(back);
        }
      };
    } catch(o){
      console.log(o);
    }
  })();
}
