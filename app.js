function change() {
  const body = document.querySelector("body");
  const checkbox = document.querySelector("#light-dark").checked;
const content = document.querySelector(".content");
const videos = document.querySelector(".videos");
const navbar = document.querySelector(".navbar");
const details = document.querySelector(".details")
const btn = document.querySelector(".btn")
const bell = document.querySelector(".bell")
  if (checkbox) {
    //  this is cool state
    // body.style.backgroundColor = "black";
    // body.classList.toggle("dark");
    body.classList.add("dark");
    body.classList.remove("light");
    content.classList.add("dark");
    content.classList.remove("light");
    videos.classList.add("dark");
    videos.classList.remove("light");
    navbar.classList.add("dark");
    navbar.classList.remove("light");
    details.classList.add("dark");
    details.classList.remove("light");
    bell.classList.add("dark");
    bell.classList.remove("light");
    btn.classList.add("dark");
    btn.classList.remove("light");
  } else {
    //  this is not so cool state
    // body.style.backgroundColor = "white";
    // body.classList.toggle("light");
    body.classList.add("light");
    body.classList.remove("dark");
    content.classList.add("light");
    content.classList.remove("dark");
    videos.classList.add("light");
    videos.classList.remove("dark");
    navbar.classList.add("light");
    navbar.classList.remove("dark");
    details.classList.add("light");
    details.classList.remove("dark");
    bell.classList.add("light");
    bell.classList.remove("dark");
    btn.classList.add("light");
    btn.classList.remove("dark");
    
  }
}
