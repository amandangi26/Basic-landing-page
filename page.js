let pop=document.querySelector(".pop-up");
let join=document.querySelector("#join");
let cut=document.querySelector(".cut");
let main=document.querySelector("main");
let sign=document.querySelector("#sign")


join.addEventListener("click",(e)=>{
    e.stopPropagation();
    pop.style.display="block";
    pop.style.scale="1.1";
    main.style.filter="blur(20px)";
  
    op();

});
sign.addEventListener("click",(e)=>{
    e.stopPropagation();
    pop.style.display="block";
    pop.style.scale="1.1";
    main.style.filter="blur(20px)";
  
    op();

});

cut.addEventListener("click",()=>{
    pop.style.display="none";
    main.style.filter="blur(0)"
    
})

function op (){
    main.addEventListener("click",()=>{
        pop.style.display="none";
        main.style.filter="blur(0)"
    });
};