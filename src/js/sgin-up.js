// ID
var sgi = document.getElementById("form1");
var log = document.getElementById("form2");

// LOGIN
function login() {
  if (log.style.display === "none") {
    // LOGIN-STYLE
    log.style.display = "flex";
    // SGIN-UP-STYLE
    sgi.style.display = "none";
  } else {
    // LOGIN-STYLE
    log.style.display = "none";
    // SGIN-UP-STYLE
    sgi.style.display = "flex";
  }
}

// SGIN-UP
function sginup() {
  if (sgi.style.display === "none") {
    // SGIN-UP-STYLE
    sgi.style.display = "flex";
    // LOGIN-STYLE
    log.style.display = "none";
  } else {
    // SGIN-UP-STYLE
    sgi.style.display = "none";
    // LOGIN-STYLE
    log.style.display = "flex";
  }
}