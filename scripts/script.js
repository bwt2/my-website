const navBtn  = document.querySelector("#nav-btn")
const navBtnArea = document.querySelector(".nav-btn-area")
const navContent = document.querySelector('.nav-content');
const navSidebar = document.querySelector('#nav-sidebar');
const content = document.querySelector('#content');
const contentHeadings = document.querySelectorAll('#content > h1');

const one_rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

navSidebar.style.transform = `translateX(-${navContent.offsetWidth+one_rem}px)`;
content.style.paddingLeft = `${navSidebar.offsetWidth}px`;
navBtn.style.transform = 'rotate(-90deg)';


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
        const selector = "#" + targetId + " .text-box";

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

        document.addEventListener('mousemove', navOnMouseMove);
        document.addEventListener('mouseup', navOnMouseUp);
    });
});

function navOnMouseUp() {
    isDragging = false;
    if (activeTextBox) {
        activeTextBox.style.borderColor = mainColor;
        activeTextBox.style.transition = "border-color ease-in 0.5s";
        activeTextBox = null;
    }

    document.removeEventListener('mousemove', navOnMouseMove);
    document.removeEventListener('mouseup', navOnMouseUp);
}

function navOnMouseMove(e) {
    if (!isDragging || !activeTextBox) return;

    const section = activeTextBox.closest('section');
    const sectionRect = section.getBoundingClientRect();

    const newLeft = e.clientX - offsetX - sectionRect.x;
    const newTop = e.clientY - offsetY - sectionRect.y;
    console.log(e.clientX, offsetX, sectionRect.x);

    activeTextBox.style.transform = `translate(${newLeft}px, ${newTop}px)`;
}

// copy contact to clipboard
let copyText;
const contactTextBox = document.querySelector("#contact > .text-box");
contactTextBox.addEventListener("mousedown", () => {
    copyText = contactTextBox.textContent.trim().split(/[ ,]+/)[1];
    navigator.clipboard.writeText(copyText);
})

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

// project detail
const projectTrackItems = document.querySelectorAll("#projects > .project-track > .project-track-item");
const projectDisplay = document.querySelector("#projects > .display > .project-display");
let activeProjectTrackItem = null;
let imagePath;

projectTrackItems.forEach(projectTrackItem => {
    projectTrackItem.addEventListener('mouseenter', projectMouseEnter);
    projectTrackItem.addEventListener('mouseleave', projectMouseLeave);
});

function projectMouseEnter(e) {
    const hoveredItem = e.target;
    imagePath = hoveredItem.getAttribute('src');
    projectDisplay.src = imagePath;
    projectDisplay.classList.add('no-border');
}

function projectMouseLeave() {
    projectDisplay.src = "";
    projectDisplay.classList.remove('no-border'); 
}

// init animations
content.style.opacity = 1;
navSidebar.style.opacity = 1;