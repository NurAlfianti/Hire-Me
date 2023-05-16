$(".card").on("click", function () {
    $(".detail").addClass("active");
});

$(".close-detail").on("click", function () {
    $(".detail").removeClass("active")
});

$(".menu-bar").on("click", function () {
    $(".sidebar").addClass("active")
})

$(".logo").on("click", function () {
    $(".sidebar").removeClass("active")
});

const apply = document.querySelector(".btn-apply");

function ubahOpacityApply() {
    apply.style.opacity = "50%"
    alert("You Have Been Apply to this Job");
}

const save = document.querySelector(".btn-save");

function ubahOpacitySave() {
    save.style.opacity = "50%"
}

const applyed = document.querySelector(".btn-applyed");

function ubahOpacityApplyed() {
    applyed.style.opacity = "100%"
}

const saved = document.querySelector(".btn-saved");

function ubahOpacitySaved() {
    saved.style.opacity = "100%"
}

const filterButton = document.querySelector("#filter").children;
const item = document.querySelector(".wrapper").children;

for (let i = 0; i < filterButton.length; i++) {
    filterButton[i].addEventListener("click", function () {
        for (let j = 0; j < filterButton.length; j++) {
            filterButton[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < item.length; k++) {
            item[k].style.display = "none";
            if (target == item[k].getAttribute("data-id")) {
                item[k].style.display = "flex";
            }
            if (target == "All") {
                item[k].style.display = "flex";
            }
        }

    })
}