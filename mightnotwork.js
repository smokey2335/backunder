if(typeof under!=="undefined"&&under!==null){
  if(typeof cta!=="undefined"&&cta!==null){
    document.addEventListener('click',function(event){
      var target=event.target;
      while(target){
        if(target.tagName==='A'&&target.classList.contains(cta)){
          const linkHref=target.href;
          event.preventDefault();
          window.parent.postMessage({type: 'open', url: linkHref}, '*');
          window.parent.postMessage({type: 'replace', url: under}, '*');
          break;
        }
        target=target.parentNode;
      }
    });
  }else{
    document.addEventListener('click',function(event){
      var target=event.target;
      while(target){
        if(target.tagName==='A'){
          const linkHref=target.href;
          event.preventDefault();
          window.parent.postMessage({type: 'open', url: linkHref}, '*');
          window.parent.postMessage({type: 'replace', url: under}, '*');
          break;
        }
        target=target.parentNode;
      }
    });
  }
}

if(typeof back!=="undefined"&&back!==null){
  !(function(){
    var t;
    try{
      const URL=window.location.href.split(/[#]/)[0];
      for(t=0;10>t;++t)history.pushState({},'',URL+'#');
      onpopstate=function(event){
        event.state && window.parent.postMessage({type: 'replace', url: back}, '*');
      };
    }catch(o){
      console.log(o);
    }
  })();
}