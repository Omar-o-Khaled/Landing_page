let layersIcon=document.querySelector(".icon");
let slider=document.querySelector(".slider");
let colseSlide=document.querySelector("#colseSlide");
let signUp=document.querySelector("#signUp");
let popupForm=document.querySelector(".popupForm");
let closeForm=document.querySelector("#closeForm");
let formBox=document.querySelector(".formBox");

layersIcon.addEventListener("click",sliderShow)
colseSlide.addEventListener("click",sliderRemove)
signUp.addEventListener("click",showForm)
closeForm.addEventListener("click",removeForm)
popupForm.addEventListener("click",removeForm)
formBox.addEventListener("click",stopPropegationForm)



function sliderShow(){
    slider.style.width="230px"
}
function sliderRemove(){
    slider.style.width="0"
}
function showForm(){
    popupForm.classList.add("show")
}
function removeForm(ele){
    ele.target.closest(".popupForm").classList.remove("show")
}
function stopPropegationForm(ele){
    ele.stopPropagation()
}