const show = document.querySelector(".show");
const pass = document.querySelector(".pass");

show.addEventListener("click",()=>{
    if(show.checked){
        pass.setAttribute("type","text");
    }else{
        pass.setAttribute("type","password");
    }
})