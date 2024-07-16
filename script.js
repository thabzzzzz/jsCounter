document.addEventListener("DOMContentLoaded", () => {
    console.log("testing");

    const add = document.querySelector(".add");
    const minus = document.querySelector(".minus");
    var counter =document.querySelector(".count");
    var number= counter.innerHTML;

    add.onclick=function(){
       number++;
       counter.innerHTML=number;
    };

    minus.onclick=function(){
        number--;
        counter.innerHTML=number; 
    }
  });