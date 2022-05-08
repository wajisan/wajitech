const observerr = (e) => {
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true && entries[0].target != undefined){
            entries[0].target.classList.add('show');
        }
    }, { threshold: [1] });
    let elem = document.querySelector(".hide:not(.show)");
    if (elem != null) {
        observer.observe(elem);
    }
}

//export default {fireApp};
export default observerr;