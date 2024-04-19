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
    "url(../src/assets/image/background/star1.webp)";
}

// GALAXY-VERSION-1
function GxyA() {
  document.body.style.backgroundColor = "#000";
  document.body.style.backgroundImage =
    "url(../src/assets/image/background/star2.webp)";
}

// GALAXY-VERSION-2
function GxyB() {
  document.body.style.backgroundColor = "#000";
  document.body.style.backgroundImage =
    "url(../src/assets/image/background/star3.webp)";
}

// ID LEFT-RIGHT
var a11 = document.getElementById("a11");
var a22 = document.getElementById("a2");

// ONCLICK LEFT-RIGHT
a11.addEventListener("click", LEFt);
a22.addEventListener("click", RIGHt);

// ID SECTION-PAGE
var PaGA = document.getElementById("page1");
var PaGB = document.getElementById("page2");

// RIGHT
function RIGHt() {
  if ((a22.style.cursor = "pointer")) {
    PaGA.style.display = "none";
    PaGB.style.display = "block";

    a11.style.cursor = "pointer";
    a11.style.background = "#000000b3";
    a11.style.color = "white";

    a22.style.cursor = "not-allowed";
    a22.style.color = "#ffffff7a";
    a22.style.background = "#121212b5";
  } else {
    PaGA.style.display = "block";
    PaGB.style.display = "none";

    a22.style.cursor = "pointer";
    a22.style.background = "#000000b3";
    a22.style.color = "white";

    a11.style.cursor = "not-allowed";
    a11.style.color = "#ffffff7a";
    a11.style.background = "#121212b5";
  }
}
// LEFT
function LEFt() {
  if ((a11.style.cursor = "pointer")) {
    PaGA.style.display = "block";
    PaGB.style.display = "none";

    a22.style.cursor = "pointer";
    a22.style.background = "#000000b3";
    a22.style.color = "white";

    a11.style.cursor = "not-allowed";
    a11.style.color = "#ffffff7a";
    a11.style.background = "#121212b5";
  } else {
    PaGA.style.display = "none";
    PaGB.style.display = "block";

    a22.style.cursor = "not-allowed";
    a22.style.color = "#ffffff7a";
    a22.style.background = "#121212b5";

    a11.style.cursor = "pointer";
    a11.style.background = "#000000b3";
    a11.style.color = "white";
  }
}

// FOOTHER-ID
var Play = document.getElementById("ply");
var Stop = document.getElementById("stp");
var Loop = document.getElementById("lop");
var Back = document.getElementById("bck");
var Next = document.getElementById("nxt");
var RAndom = document.getElementById("rnd");
var range = document.getElementById("movtm");
var TimeA = document.getElementById("timerstart");
var TimeB = document.getElementById("timerend");

// RAP-ID
var Rp1 = document.getElementById("R1");
var Rp11 = document.getElementById("R11");
//
var playR = document.getElementsByClassName("mus-ply");

//*****EVENTLISTENER-ICON******//
Rp1.addEventListener("click", Rap1);
Rp11.addEventListener("click", Rap11);
//
Loop.addEventListener("click", LOOP);

// Rap-1
const Iconic = new Audio(
  "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/45/d3/25/45d325ef-6dc9-38d4-27f2-b9772fc6886a/mzaf_14867276433473339137.plus.aac.ep.m4a"
);

// SONG-ONE
function Rap1() {
  Iconic.play();
  //
  Rp1.style.visibility = "hidden";
  Rp11.style.visibility = "visible";
  //
  Play.style.display = "none";
  Stop.style.display = "flex";
}

function Rap11() {
  Iconic.pause();
  //
  Rp11.style.visibility = "hidden";
  Rp1.style.visibility = "visible";
  //
  Play.style.display = "flex";
  Stop.style.display = "none";
}

if (Iconic.play) {
  setInterval(() => {
    const Strt = (range.value = Iconic.currentTime);
    const ment = Math.floor(Strt / 60);
    const secnt = Math.floor(Strt % 60);
    if (secnt < 10) {
      TimeA.innerHTML = ment + ":" + "0" + secnt;
    } else {
      TimeA.innerHTML = ment + ":" + secnt;
    }
    //
    const mentb = Math.floor(Iconic.seekable.end(0) / 60);
    const secntb = Math.floor(Iconic.seekable.end(0) % 60);
    if (secntb < 10) {
      TimeB.innerHTML = mentb + ":" + "0" + secntb;
    } else {
      TimeB.innerHTML = mentb + ":" + secntb;
    }
  }, 300);
}

range.onchange = () => {
  Iconic.play();
  Iconic.currentTime = range.value;
  //
  Rp1.style.visibility = "hidden";
  Rp11.style.visibility = "visible";
  //
  Stop.style.display = "flex";
  Play.style.display = "none";
};

for (let M = 0; M < playR.length; M++) {
  if (Iconic.play) {
    playR[5].style.backgroundColor = "var(--white-700)";
    playR[5].style.color = "var(--white-400)";
    //
    playR[2].style.color = "var(--white-400)";
    //
    playR[0].style.color = "var(--white-400)";
    //
    playR[M].style.color = "var(--white-700)";
    playR[M].style.cursor = "pointer";
    //
    Stop.style.color = "var(--white-400)";
    Stop.style.cursor = "pointer";
  }
}

// LOOP
function LOOP() {
  if ((Iconic.loop === true)) {
    Iconic.loop = false;
    Loop.style.color = "var(--white-700)";
  } else {
    Iconic.loop = true;
    Loop.style.color = "var(--white-500)";
  }
}

// SEARCH-FIND
$(document).ready(function () {
  $("#page2").hide();

  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();

    $("#main3 .carIconicA").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

var ref = document.getElementById("refresh");

window.addEventListener("load", () => {
  setTimeout(() => {
    ref.remove();
  }, 3000);
});
