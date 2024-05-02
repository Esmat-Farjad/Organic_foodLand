// self executing function
(function() {
    document.querySelector(".heading-content").classList.add("apply-animation-left");

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
