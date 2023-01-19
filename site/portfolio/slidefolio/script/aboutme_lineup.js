let aboutMeText = document.getElementById("aboutmetext");
let aboutLine = document.getElementById("aboutline")


aboutMeText.addEventListener("mouseenter",function(e){
    aboutLine.classList.add("lineup");
})

aboutMeText.addEventListener("mouseleave",function(e){
    aboutLine.classList.remove("lineup");
})