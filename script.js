let btn=document.querySelector(".btn");
let code=document.querySelector(".hexcode");
let bgcolor=document.querySelector(".main");
let s="0123456789abcdef";
btn.addEventListener('click',function(){
    let ans="#";
    for(let i=0;i<6;i++){
        let idx=Math.floor(Math.random()*15);
        ans+=s[idx];
    }
    code.textContent=ans;
    bgcolor.style.backgroundColor=ans;
});