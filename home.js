const nav=document.querySelector(".menu")
nav.addEventListener("click",menuNav);

function menuNav(){
    if(nav){
       nav.classList.add("active")
       console.log("clicked")
    }else{
        nav.classList.remove("active")
    }
}

const close=document.querySelector(".close")
close.addEventListener("click",menuNa);

function menuNa(){
    if(close){
        close.classList.toggle("active")
    }
}