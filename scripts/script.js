const navBtn  = document.querySelector("#nav-btn")
const navBtnArea = document.querySelector(".nav-btn-area")
const navContent = document.querySelector('.nav-content');
const navSidebar = document.querySelector('#nav-sidebar');
const content = document.querySelector('#content');
const contentHeadings = document.querySelectorAll('#content > h1');

const one_rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

navSidebar.style.transform = `translateX(-${navContent.offsetWidth+one_rem}px)`;
content.style.paddingLeft = `${navSidebar.offsetWidth}px`;

let inactive = true;
navBtnArea.addEventListener("mouseover", () => {
    const navContentWidth = navContent.offsetWidth;
    if (inactive) {
        navSidebar.style.transform = 'translateX(0)'; 
    } else {
        navSidebar.style.transform = `translateX(-${navContentWidth+one_rem}px)`; 
    }
    inactive = !inactive;
})
    
document.addEventListener('DOMContentLoaded', () => {
    content.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            content.scrollBy({
                left: event.deltaY*3,
                behavior: 'smooth'
            });
            event.preventDefault();
        }
    });
});

content.style.opacity = 1;
navSidebar.style.opacity = 1;