const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const texts = [

    "Data Analyst",

    "SQL & Python Enthusiast",

    "Power BI Dashboard Developer",

    "Business Intelligence Analyst",

    "Turning Data Into Insights"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {
        setTimeout(type, 100);
    }

})();


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }
    });

});

const sections =
    document.querySelectorAll("section");

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);
});

const container =
    document.getElementById("projects-container");

let allProjects = [];

fetch("data/projects.json")
    .then(res => res.json())
    .then(data => {

        allProjects = data;

        displayProjects(data);
    });

function displayProjects(projects) {

    container.innerHTML = "";

    projects.forEach(project => {

        container.innerHTML += `

        <div class="project-card">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <a
            href="${project.page}"
            class="view-project">

                View Details →

            </a>

        </div>

        `;

    });


    attachModalEvents();
}

const filterBtns =
    document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document
            .querySelector(".filter-btn.active")
            .classList.remove("active");

        btn.classList.add("active");

        const category =
            btn.dataset.filter;

        if (category === "all") {

            displayProjects(allProjects);

        } else {

            const filtered =
                allProjects.filter(project =>
                    project.category === category);

            displayProjects(filtered);
        }

    });

});

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const value =
        searchInput.value.toLowerCase();

    const filtered =
        allProjects.filter(project =>

            project.title
                .toLowerCase()
                .includes(value)

        );

    displayProjects(filtered);

});


const galleryImages =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const closeLightbox =
    document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;
    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";
    }

});


const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", e => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    contactForm.reset();

});

const themeBtn =
    document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById(
        "progress-bar").style.width =
        progress + "%";

});

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });

});

window.addEventListener("load", () => {

    document.getElementById("loader")
        .style.display = "none";

});

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target =
            +counter.dataset.target;

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target;
        }

    };

    update();

});

const certificateButtons =
    document.querySelectorAll(".view-certificate");

certificateButtons.forEach(button => {

    button.addEventListener("click", () => {

        const certificatePath =
            button.dataset.certificate;

        window.open(certificatePath, "_blank");

    });

});

const experienceButtons =
    document.querySelectorAll(".view-experience");

experienceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const file =
            button.dataset.file;

        window.open(file, "_blank");

    });

});

// animation 
const revealElements =
document.querySelectorAll("section");

const revealObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "show-section"
            );

        }

    });

},{
    threshold:0.35
});

revealElements.forEach(section=>{

    section.classList.add(
    "hidden-section"
    );

    revealObserver.observe(section);

});

// 
document.addEventListener(
"mousemove",
(e)=>{

    const blobs =
    document.querySelectorAll(
    ".floating-bg span"
    );

    blobs.forEach((blob,index)=>{

        const speed =
        (index+1)*0.005;

        const x =
        (window.innerWidth/2-e.clientX)
        *speed;

        const y =
        (window.innerHeight/2-e.clientY)
        *speed;

        blob.style.transform =
        `translate(${x}px,${y}px)`;

    });

}); 