let mode = document.getElementById("mode");
let body = document.getElementById("body");
let favicon = document.getElementById("favicon");

mode.addEventListener("click",function(e){
    changeTheme();
})

function changeTheme(){
    let mode = document.getElementById("mode");
    let body = document.getElementById("body");

    mode.classList.toggle("change");

    if(body.className == "dark"){
        body.className = "light";
        favicon.href = "./favicon/light.png"
    }else{
        body.className = "dark";
        favicon.href = "./favicon/dark.png"
    }
}