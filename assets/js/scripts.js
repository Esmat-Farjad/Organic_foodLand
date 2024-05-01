// self executing function
(function() {
    document.querySelector(".heading-content").classList.add("apply-animation-left");

})();
window.addEventListener('scroll', function(event) {
    this.document.querySelectorAll(".card").forEach(element => {
        element.classList.add("slide-up-animation");
    });
    let scroll_element = this.document.querySelector(".description-section");
    let position = scroll_element.getBoundingClientRect();
    // checking
    if(position.top >= 0 && position.bottom <= window.innerHeight){
        document.getElementById("text-body").style.animation="fadeIn 2s ease-in-out 1";
    }
});
