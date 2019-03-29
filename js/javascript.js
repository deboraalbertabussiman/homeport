function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  window.onscroll = function() {scrollFunction()};
  function scrollFunction(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
      document.getElementById("topo").style.top = "calc(100% - 64px)";
    }
    else{
      document.getElementById("topo").style.top = "150%";
    }
  }