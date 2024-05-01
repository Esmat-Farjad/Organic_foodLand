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
        document.getElementById("card").style.animation="fadeIn 2s ease-in-out 1";
    }
    if(position.top >= 0 && position.bottom <= window.innerHeight){
        document.getElementById("text-body").style.animation="fadeIn 2s ease-in-out 1";
    }
});
