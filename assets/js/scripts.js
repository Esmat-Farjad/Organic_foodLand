// self executing function
(function() {
    document.querySelector(".heading-content").classList.add("apply-animation-left");

})();
window.addEventListener('scroll', function(event) {
    let cardElement = document.querySelector(".card-section");
    let cardPosition = cardElement.getBoundingClientRect();
    let scroll_element = this.document.querySelector(".description-section");
    let position = scroll_element.getBoundingClientRect();
    // checking
    if(cardPosition.top >= 0 && cardPosition.bottom <= window.innerHeight) {
       document.querySelectorAll(".card").forEach(element => {
            element.classList.add("slide-up-animation");
       });
    }
    if(position.top >= 0 && position.bottom <= window.innerHeight){
        document.querySelector(".description-section").classList.add("slide-left-animation");
    }
});
