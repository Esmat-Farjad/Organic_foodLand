// self executing function
(function() {
    document.querySelector(".heading-content").classList.add("apply-animation-left");
})();
window.addEventListener('scroll', function(event) {
    this.document.querySelectorAll(".card").forEach(element => {
        element.classList.add("slide-up-animation");
    });
    this.document.querySelector(".description-section").classList.add("slide-up-animation");
   });