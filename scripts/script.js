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
        const selector = "#" + targetId + " .moveable";

        const targetSection = document.querySelector(selector);
    
        // Calculate the offset position
        const offsetPosition =  targetSection.getBoundingClientRect().x 
            + content.scrollLeft
            - navSidebar.offsetWidth 
            - one_rem;

        // Smoothly scroll to the offset position
        content.scrollTo({
            left: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// moving textboxes
const textBoxes = document.querySelectorAll('.moveable');
const sections = document.querySelectorAll('section');
let isDragging = false;
let offsetX, offsetY;
let mainColor = "#2cb67d";
let activatedColor = "#6effc3";
let activeTextBox = null;

textBoxes.forEach(textBox => {
    textBox.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const textBoxRect = textBox.getBoundingClientRect();
        
        textBox.style.transition = null;
        textBox.style.borderColor = activatedColor;
        
        isDragging = true;
        activeTextBox = textBox;

        // Offset of mouse cursor in the section
        offsetX = e.clientX - textBoxRect.left;
        offsetY = e.clientY - textBoxRect.top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});

function onMouseUp() {
    isDragging = false;
    if (activeTextBox) {
        activeTextBox.style.borderColor = mainColor;
        activeTextBox.style.transition = "border-color ease-in 0.5s";
        activeTextBox = null;
    }

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

function onMouseMove(e) {
    if (!isDragging || !activeTextBox) return;

    const section = activeTextBox.closest('section');
    const sectionRect = section.getBoundingClientRect();

    const newLeft = e.clientX - offsetX - sectionRect.x;
    const newTop = e.clientY - offsetY - sectionRect.y;

    activeTextBox.style.transform = `translate(${newLeft}px, ${newTop}px)`;
    console.log(activeTextBox.getBoundingClientRect());
}

// load project images
const imageTrack = document.querySelector("#projects > .project-track");
const gitUrl = "images/projects/";
const imagePaths = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
] // image source https://www.pexels.com/

function loadImages(){
    for (let i = 0; i < 2; i++) { // Loop twice for seamless scrolling
        for (let imagePath of imagePaths) {
            const currImage = document.createElement("img");
            currImage.draggable = false;
            currImage.src = gitUrl + imagePath;
            currImage.classList.add("project-track-item");
            imageTrack.appendChild(currImage);
        }
    }
}

loadImages();

content.style.opacity = 1;
navSidebar.style.opacity = 1;