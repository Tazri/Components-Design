let allService = document.querySelectorAll(".service");
let className = "lineup";

allService.forEach(function(service){
    service.addEventListener("mouseenter",function(e){
        service.classList.add(className);
    })

    service.addEventListener("mouseleave",function(e){
        service.classList.remove(className);
    })
})