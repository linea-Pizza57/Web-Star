//LISTENER THEME
document.getElementById("bakA").addEventListener("click", Def);
document.getElementById("bakB").addEventListener("click", GxyA);
document.getElementById("bakC").addEventListener("click", GxyB);

// APPEARANCE-ID
var wlapp = document.getElementById("appearance");
var SHD = document.getElementById("appA");
// APPEARANCE-SHOW-HIDE
SHD.addEventListener("click", appers);
// APPEARANCE-SHOW-HIDE
function appers() {
  if (wlapp.style.display === "block") {
    wlapp.style.display = "none";
  } else {
    wlapp.style.display = "block";
  }
}

// DEFAULT
function Def() {
  document.body.style.backgroundColor = "#000";
  document.body.style.backgroundImage =
    "url(../image/background/star1.webp)";
}

// GALAXY-VERSION-1
function GxyA() {
  document.body.style.backgroundColor = "#000";
  document.body.style.backgroundImage =
    "url(../image/background/star2.webp)";
}

// GALAXY-VERSION-2
function GxyB() {
  document.body.style.backgroundColor = "#000";
  document.body.style.backgroundImage =
    "url(../image/background/star3.webp)";
}

var ref = document.getElementById("refresh");

const WrF = window.addEventListener("load", () => {
  setTimeout(() => {
    ref.remove();
  }, 1000);
});

export { appers, Def, GxyA, GxyB, WrF };