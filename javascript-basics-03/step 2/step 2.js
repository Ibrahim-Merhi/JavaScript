const show = document.querySelector("#show");
const hide = document.querySelector("#hide");
const text1 = document.querySelector("p");

const change = (id)=>{
    if(id == "show"){
        text1.style.display = 'block';
    }
    if(id == "hide"){
        text1.style.display = 'none';
    }
};


show.addEventListener("click", ()=>{change("show");});
hide.addEventListener("click", ()=>{change("hide");});