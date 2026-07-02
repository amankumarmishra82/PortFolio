const dashboardImages =
    document.querySelectorAll(".dashboard-card img");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeImageModal");

dashboardImages.forEach(image => {

    image.addEventListener("click", () => {

        imageModal.style.display = "flex";

        modalImage.src = image.src;

    });

});

closeModal.addEventListener("click", () => {

    imageModal.style.display = "none";

});

imageModal.addEventListener("click", e => {

    if (e.target === imageModal) {

        imageModal.style.display = "none";

    }

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
        "reading-progress").style.width =
        progress + "%";

});

let icon = "";

if (project.datasetType === "csv") {

    icon = "📄";

}
else if (project.datasetType === "excel") {

    icon = "📊";

}
else if (project.datasetType === "sql") {

    icon = "🗄";

}

datasetContainer.innerHTML = `

<a
href="../assets/datasets/${project.datasetFile}"
download
class="download-btn">

${icon} Download Dataset

</a>

`;

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
    threshold:0.15
});

revealElements.forEach(section=>{

    section.classList.add(
    "hidden-section"
    );

    revealObserver.observe(section);

});


