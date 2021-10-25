var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  if (window.scrollY>500) {
    document.getElementById("floating-contact").style.opacity = "100";
    } else {
      document.getElementById("floating-contact").style.opacity = "0";
    }
    console.log(window.scrollY);
  prevScrollpos = currentScrollPos;
  
} 



function notYet() {
  alert("Sorry, this section is not finished yet");
}

function foldSection(clicked_id) {
  var element = document.getElementById(clicked_id);
  element.classList.toggle("fold-text-box");
}

