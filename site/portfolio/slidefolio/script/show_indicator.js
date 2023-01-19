let indicator = document.getElementById("indicator");

setTimeout(function(e){
    indicator.style.display = "block";
    indicator.style.transform = `translate(-${50}%,0%)`;
},1000)