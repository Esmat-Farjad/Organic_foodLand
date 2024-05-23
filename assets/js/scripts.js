// self executing function
(function() {
    try{
        document.querySelector(".heading-content").classList.add("apply-animation-left");
        document.querySelector(".nav-items").classList.add("d-none");
        document.querySelector(".close-icon").classList.add("d-none");
    } catch(error){
        console.log("some element did not exist !");
    }
   
})();
window.addEventListener('scroll', function(event) {
   try{
    let location = document.querySelector(".location");
    let location_position = location.getBoundingClientRect();
    let scroll_element = this.document.querySelector(".description-section");
    let position = scroll_element.getBoundingClientRect();
    // checking
    if(position.top >= 0 && position.bottom <= window.innerHeight){
        document.querySelector(".description-section").classList.add("slide-left-animation");
    }
    if(location_position.top >= 0 && location_position.bottom <= window.innerHeight){
        document.querySelector("iframe").classList.add("slide-left-animation");
        document.querySelector(".contact-form").classList.add("slide-right-animation");
    }
   }catch(error){
    console.log("something went wrong");
   }
});
const openMenu = document.querySelector(".open-icon").addEventListener("click", function(){
    let menuhHolder = document.querySelector(".nav-items");
    let closeMenu = document.querySelector(".close-icon");
    if(menuhHolder.classList.contains("d-none") && closeMenu.classList.contains("d-none"))
    {
        menuhHolder.classList.remove("d-none");
        menuhHolder.classList.add("active-block");
        closeMenu.classList.remove("d-none");
        closeMenu.classList.add("active");
        document.querySelector(".open-icon").classList.add("d-none");
        
    }
});
const closeMenu = document.querySelector(".close-icon").addEventListener("click", function(){
    let menuhHolder = document.querySelector(".nav-items");
    let openMenu = document.querySelector(".open-icon");
    
    if(menuhHolder.classList.contains("active-block") && openMenu.classList.contains("d-none"))
    {
        menuhHolder.classList.remove("active-block");
        menuhHolder.classList.add("d-none");
        openMenu.classList.remove("d-none");
        openMenu.classList.add("active");
        document.querySelector(".close-icon").classList.add("d-none");
        
    }
});
document.querySelector("#account").addEventListener("click", function(){
    let chevron_icon = document.querySelector("#chevron");
    if(chevron_icon.classList.contains("fa-chevron-down")){
        chevron_icon.classList.remove("fa-chevron-down");
        chevron_icon.classList.add("fa-chevron-up");
        document.getElementById("sub-menu").style.display = "inline-block";
    } else{
        chevron_icon.classList.remove("fa-chevron-up");
        chevron_icon.classList.add("fa-chevron-down");
        document.getElementById("sub-menu").style.display = "none";

    }
});
// sign in 
try{
    document.querySelector(".eye-icon").addEventListener("click", function(){
        let icon = document.querySelector("#show-hide");
        let pass_input = document.querySelector("#password");
        if(pass_input.type === "password"){
            pass_input.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }else {
            pass_input.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });
} catch(error){
    console.log("something went wrong");
}
// document.getElementById("spinner").innerHTML = '<i class="fa-solid fa-rotate fa-spin"></i>';
// async function getData() {
//     try{
//         const data = await fetch("https://jsonplaceholder.typicode.com/todos/",{method: 'GET'});
//         const result = await data.json();
//         console.log(result);
//         document.getElementById("spinner").innerHTML = result[0].title;
//     } catch(error) {
//         console.log(error);
//     }
// }