const observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("slide-up-animation");
        observer.unobserve(entry.target);
    });
});
document.querySelectorAll(".section-holder").forEach(e => {
    observer.observe(e)
});
document.querySelector(".main-heading").classList.add("zoom-animation");