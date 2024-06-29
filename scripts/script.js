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
        navBtn.style.transform = 'rotate(90deg)';
    } else {
        navSidebar.style.transform = `translateX(-${navContentWidth+one_rem}px)`;
        navBtn.style.transform = 'rotate(-90deg)'; 
    }
    inactive = !inactive;
})
    
content.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        content.scrollBy({
            left: event.deltaY*3,
            behavior: 'smooth'
        });
        event.preventDefault();
    }
});

// fix anchor link offset
document.querySelectorAll('#nav-sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Calculate the offset position including some padding
        const offsetPosition = targetSection.offsetLeft - navSidebar.offsetWidth - one_rem; 

        // Smoothly scroll to the offset position
        content.scrollTo({
            left: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// moving textboxes
const aboutBox = document.querySelector('#about-me > .text-box');
const aboutMeSection = document.querySelector('#about-me');
let isDragging = false;
let offsetX, offsetY;

aboutBox.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const aboutBoxRect = aboutBox.getBoundingClientRect();

    isDragging = true;

    // offset of mouse cursor in About Me section
    offsetX = e.clientX - aboutBoxRect.x;
    offsetY = e.clientY - aboutBoxRect.y;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

function onMouseMove(e) {
    if (!isDragging) return;
    const aboutMeRect = aboutMeSection.getBoundingClientRect();

    const mouseX = e.clientX - aboutMeRect.x;
    const mouseY = e.clientY - aboutMeRect.y;
    
    const newX = mouseX - offsetX;
    const newY = mouseY - offsetY - 2*one_rem; // from border radius and padding

    aboutBox.style.transform = `translate(${newX}px, ${newY}px)`;
}

content.style.opacity = 1;
navSidebar.style.opacity = 1;