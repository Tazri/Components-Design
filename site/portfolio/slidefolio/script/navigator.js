// get all slides
let allIndicator = document.querySelectorAll(".indicator ul li")

// get home
let home = document.getElementById("home");



let down = 0;
let up = 0;
let isCtrlPressed = false;
let isShiftPressed = false;


// scrolling
document.addEventListener("wheel",function(e){
    if(e.deltaY > 0){
        down += e.deltaY;
    }else{
        up += -1 *e.deltaY;
    }

    if(down > 100){
        nextSlide();
        down = 0;
        up = 0;
    }else if(up > 100){
        prevSlide();
        up = 0;
        down = 0;
    }
})

// left and down arrow
document.addEventListener("keyup",function(e){
    if(e.key == "ArrowRight" || e.key == "ArrowDown"){
        nextSlide();
    }else if(e.key == "ArrowLeft" || e.key =="ArrowUp"){
        prevSlide();
    }

    if(e.key == "Control"){
        isCtrlPressed = false;
    }

    if(e.key == "Shift"){
        isShiftPressed = false;
    }
})

// pressing ctrl and shift
document.addEventListener("keydown",function(e){
    if(e.key == "Control"){
        isCtrlPressed = true;
    }

    if(e.key == "Shift"){
        isShiftPressed = true;
    }
})


// changing dark mode when press a key
document.addEventListener("keypress",function(e){
    if(isCtrlPressed && isShiftPressed && e.key == "L"){
        changeTheme(); // it implement in mode_changer.js file
    }

    if(isCtrlPressed && isShiftPressed){
        if(e.key == "#"){
            home.classList.toggle("loader_on_1");
        }else if(e.key == "$"){
            home.classList.toggle("loader_on_2");
        }else if(e.key == "%"){
            home.classList.toggle("loader_on_3");
        }
    }

    console.log(e.key,e.keyCode);
})


// go next slide
function nextSlide(){
    for(let i = 0; i < allIndicator.length-1;i++){
        let indicator = allIndicator[i];
        
        if(indicator.classList.contains("active")){
            allIndicator[i+1].click();
            break;
        }
    }
}

// go previous slide
function prevSlide(){
    for(let i = 1; i < allIndicator.length;i++){
        let indicator = allIndicator[i];
        
        if(indicator.classList.contains("active")){
            allIndicator[i-1].click();
            break;
        }
    }
}
