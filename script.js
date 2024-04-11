function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdown = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}
window.onclick = function (event1) {
  if (!event1.target.matches(".dropbtn1")) {
    var dropdown = document.getElementsByClassName("dropdown-content1");
    var l;
    for (l = 0; l < dropdown.length; l++) {
      var openDropdown = dropdown[l];
      if (openDropdown.classList.contains("show1")) {
        openDropdown.classList.remove("show1");
      }
    }
  }
};
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}
window.onclick = function (event2) {
  if (!event2.target.matches(".dropbtn2")) {
    var dropdown = document.getElementsByClassName("dropdown-content2");
    var b;
    for (b = 0; b < dropdown.length; b++) {
      var openDropdown = dropdown[b];
      if (openDropdown.classList.contains("show2")) {
        openDropdown.classList.remove("show2");
      }
    }
  }
};
document.querySelector(".menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("menu-active");
});
