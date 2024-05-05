// self executing function
(function() {
    document.querySelector(".heading-content").classList.add("apply-animation-left");
  document.querySelector(".nav-items").classList.add("d-none");
  document.querySelector(".close-icon").classList.add("d-none");

})();
window.addEventListener('scroll', function(event) {
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

