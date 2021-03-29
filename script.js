var i = 0;
function toggle() {
  if (i == 0) {
    document.getElementById("sidebar").style.width = "5rem";
    i++;

    var x = document.querySelectorAll(".hide");
    var y;
    for (y = 0; y < x.length; y++) {
      x[y].style.display = "none";
    }
    var c = document.querySelectorAll(".menu-options");
    var d;
    for (d = 0; d < c.length; d++) {
      c[d].style.padding = "1rem 0rem";
      c[d].style.textAlign = "center";
    }

    var e = document.querySelectorAll(".menu-options > img");
    var f;
    for (f = 0; f < e.length; f++) {
      e[f].style.margin = "0px";
    }

    var a = document.querySelectorAll(".menu-options > span");
    var b;
    for (b = 0; b < a.length; b++) {
      a[b].className += " show";
    }
  } else {
    document.getElementById("sidebar").style.width = "17rem";
    i--;

    var x = document.querySelectorAll(".hide");
    var y;
    for (y = 0; y < x.length; y++) {
      x[y].style.display = "block";
    }

    var c = document.querySelectorAll(".menu-options");
    var d;
    for (d = 0; d < c.length; d++) {
      c[d].style.padding = "0.65rem 1.5rem";
      c[d].style.textAlign = "initial";
    }

    var e = document.querySelectorAll(".menu-options > img");
    var f;
    for (f = 0; f < e.length; f++) {
      e[f].style.marginRight = "1.5rem";
    }

    var a = document.querySelectorAll(".menu-options > span");
    var b;
    for (b = 0; b < a.length; b++) {
      a[b].className = " ";
    }
  }
}
let r = 0;
function xyz() {
  if (r == 0) {
    document.getElementById("search").style.display = "block";
    r++;
  } else {
    document.getElementById("search").style.display = "none";
    r--;
  }
}
function searchBox() {
  if (screen.width <= 570) {
    xyz();
  }
}
