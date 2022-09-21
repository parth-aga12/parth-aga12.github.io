
const abtBtn = document.getElementById("abt-btn")
const aboutMe = document.querySelector(".abt-head")
const prvcoopBtn = document.getElementById("prvcoop-btn")
const previousCoop = document.querySelector(".prvcoop-head")
const submitBtn = document.getElementById("submit-btn")
const contactmeBtn = document.getElementById("contactme-btn")
const contactMe = document.querySelector(".contact-head")
const photosBtn = document.getElementById("photos-btn")
const photoS = document.querySelector(".photos-head")
const resumeBtn = document.querySelector(".resume-btn")
const githubBtn = document.querySelector(".github-btn")
const linkedinBtn = document.querySelector(".linkedin-btn")

abtBtn.addEventListener("click", function() {
    console.log("click")
    aboutMe.scrollIntoView({behavior:"smooth"});
});

prvcoopBtn.addEventListener("click", function() {
    console.log("click")
    previousCoop.scrollIntoView({behavior:"smooth"});
});

contactmeBtn.addEventListener("click", function() {
    console.log("click")
    contactMe.scrollIntoView({behavior:"smooth"});
});

photosBtn.addEventListener("click", function() {
    console.log("click")
    photoS.scrollIntoView({behavior:"smooth"});
});

resumeBtn.addEventListener("click", function() {
    console.log("click")
    window.open("https://parth-aga12.github.io/Parth Agarwal Resume.pdf");
});

githubBtn.addEventListener("click", function() {
    console.log("click")
    window.open("https://github.com/parth-aga12");
});

linkedinBtn.addEventListener("click", function() {
    console.log("click")
    window.open("https://www.linkedin.com/in/parthag1202/");
});