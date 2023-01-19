let allSkill = document.querySelectorAll(".skill");

allSkill.forEach(function(skill){
    skill.addEventListener("mouseenter",function(e){
        skill.classList.add("lineup");
    })

    skill.addEventListener("mouseleave",function(e){
        skill.classList.remove("lineup");
    })
});