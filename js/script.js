const menuBtnMain = document.getElementById("menu-btn-main");
// const menuBtnSidebar = document.getElementById("menu-btn-sidebar");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");
menuBtnMain.addEventListener("click", toggleSidebar);
mainContent.addEventListener("click", closeSidebar);


function toggleSidebar() {
    sidebar.classList.toggle("active-nav");
    mainContent.classList.toggle("active-main-content");
    document.querySelector(".animated-icon").classList.toggle("open")
  }

function closeSidebar() {
    sidebar.removeClass("active-nav");
    mainContent.removeClass("active-main-content");
    document.querySelector(".animated-icon").classList.toggle("open")
}

// When the user scrolls down 20px from the top of the document, show the "move to top" button
window.onscroll = function () {
    scrollFunction()
    document.getElementById("navbar").classList.add("background")
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    changeNavbarBackground();
}

$(".navbar-toggler").click(function(){
  $(".animated-icon").toggleClass("open");
});

function changeNavbarBackground () {
    document.getElementById("navbar").classList.remove("background")
}

