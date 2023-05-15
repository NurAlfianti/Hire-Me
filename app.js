$(".card").on("click", function(){
    $(".detail").addClass("active");
});

$(".close-detail").on("click", function(){
    $(".detail").removeClass("active")
});

$(".menu-bar").on("click", function(){
    $(".sidebar").addClass("active")
})

$(".logo").on("click", function(){
    $(".sidebar").removeClass("active")
});

const apply = document.querySelector(".btn-apply");

function ubahOpacityApply(){
    apply.style.opacity = "50%"
}

const save = document.querySelector(".btn-save");

function ubahOpacitySave(){
    save.style.opacity = "50%"
}

const applyed = document.querySelector(".btn-applyed");

function ubahOpacityApplyed(){
    applyed.style.opacity = "100%"
}

const saved = document.querySelector(".btn-saved");

function ubahOpacitySaved(){
    saved.style.opacity = "100%"
}

