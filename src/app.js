import lozad from 'lozad';
import { 
    watchViewport, 
    getViewportState
} from 'tornis';
import sal from 'sal.js';

sal({
    threshold: 0.2,
    rootMargin: "0% 70%",
});

const state = getViewportState();
const updateValues = ({
    size, scroll
}) => {
    if (scroll.changed) {
        let progressState = Math.round((scroll.top / (document.body.scrollHeight - size.y)) * 100);
        let progressBar = document.getElementById("progressBar");
        progressBar.style.transform = "translateX(" + (-(100 - progressState)) + '%)';
    }
};
watchViewport(updateValues);

(function() {
    const observer = lozad('.lozad', {
        load: function(el) {
            el.src = el.dataset.src;
            el.onload = function() {
                el.classList.remove('opacity-0');
                el.nextElementSibling.classList.add('opacity-0');
            }
        },
        rootMargin: '10px 0px', // syntax similar to that of CSS Margin
        threshold: 0.1 // ratio of element convergence
    });
    observer.observe();
    const lozadImage = document.querySelector('.lozad');
    // ... trigger the load of a image before it appears on the viewport
    observer.triggerLoad(lozadImage);
})();

var header = document.getElementById('header');
var body = document.getElementById('pageBody');
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        if (body.getAttribute("style")==""){
            header.classList.remove('-translate-y-full', '-mt-24');
        } else {
            header.classList.add('-translate-y-full', '-mt-24');
        } 
    });    
});
observer.observe(body, { attributes : true, attributeFilter : ['style'] });

function toggleClass(el, className){
    el.classList.toggle(className);
}

window.onload = function(){ 
    
    let body = document.getElementsByTagName('body')[0];
    let menuToggle = document.getElementById('menu-toggle');
    let menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function(event) {
        toggleClass(menu, 'hidden');
        toggleClass(menuToggle, 'opened');
        event.stopPropagation();
    });
    body.addEventListener('click', function(event){
        if (menuToggle.classList.contains("opened")) {
            menu.classList.add("hidden")
            menuToggle.classList.remove("opened")
        }
    });
};