// get the all slide
let slides = document.getElementById("slides");
let allSlide = document.querySelectorAll(".slide");

for(let i =0; i < allSlide.length;i++){
    let slide = allSlide[i];
    
    slide.style.transform = `translate(${i*100}%,0%)`;
}

// ready the slide
// get all indicator li
let allBtn = document.querySelectorAll(".indicator ul li");
let activateBtn = allBtn[0];

// all btn with id
let allBtnWithId = [];

for(let i = 0; i < allBtn.length;i++){
    allBtnWithId.push({
        btnObject : allBtn[i],
        id : i
    })
}

// add event listener on all btn
allBtnWithId.forEach(function(btn){
    btn.btnObject.addEventListener("click",function(e){
        // get the button
        let clickButton = allBtn[btn.id];

        // if clicked and activate class is not equal 
        if(activateBtn != clickButton){
            // remove all active class first
            removeAllActiveClassButton();
            
            // active current button
            clickButton.className = "active";
            activateBtn = clickButton;

            // change the slide
            let translatePx = btn.id*100 == 0 ? 0 : btn.id*100;
            slides.style.transform = `translate(-${translatePx}%,0%)`;
        }
    })

})


// remove all active class function
function removeAllActiveClassButton(){
    allBtn.forEach(function(btn){
        btn.className = "";
    })
}