// self executing function
(function() {
    document.querySelector(".heading-content").classList.add("apply-animation");
    if(document.scrollingElement.scrollTop){
        document.querySelectorAll(".card").classList.add("apply-animation");
        console.log("scrolling event");
    }
})();
window.addEventListener('scroll', function(event) {
    this.document.querySelectorAll(".card").forEach(element => {
        element.classList.add("apply-animation");
    });
   });