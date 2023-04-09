const open = document.querySelector(".ham");
const close = document.querySelector(".close");


open.addEventListener("click", function(){
    document.querySelector(".display").classList.add("display-b");
    document.querySelector(".display-photo").classList.add("collapse");
    document.querySelector(".display-name").classList.add("collapse");
    document.querySelector(".nav-items").classList.add("collapse");
    document.querySelector(".close").classList.add("x-mark");
});

close.addEventListener("click", function(){
    document.querySelector(".display").classList.remove("display-b");
    document.querySelector(".display-photo").classList.remove("collapse");
    document.querySelector(".display-name").classList.remove("collapse");
    document.querySelector(".nav-items").classList.remove("collapse");
    document.querySelector(".close").classList.remove("x-mark");
});

