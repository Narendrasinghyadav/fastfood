var h4 = document.querySelector("h4")
var sitescreen = document.querySelector(".site-btn")
flage=0
h4.addEventListener("click",function(){
if(flage==0){
    h4.innerHTML=`<i class="ri-close-fill"></i>`
    sitescreen.style.right="0px"
    flage=1
}else{
   
    h4.innerHTML=`<i class="ri-menu-fill"></i>`
    sitescreen.style.right="-200px"
    flage=0
}

})