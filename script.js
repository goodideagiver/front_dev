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
  prevScrollpos = currentScrollPos;
  
} 

function notYet() {
  alert("Sorry, this section is not finished yet");
}

function foldSection(clicked_id) {
  var element = document.getElementById(clicked_id);
  element.classList.toggle("fold-text-box");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}