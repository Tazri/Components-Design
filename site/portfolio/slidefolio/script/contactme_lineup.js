let allSocialIcon = document.querySelectorAll(".socialicon");

allSocialIcon.forEach(function(icon){
    icon.addEventListener("mouseenter",function(e){
        icon.classList.add("lineup");
    })

    icon.addEventListener("mouseleave",function(e){
        icon.classList.remove("lineup");
    })
})