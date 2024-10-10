const hamburgerIconSVG = document.querySelector(".hamburger-icon-svg")



function toggleNavbar() {
    const isNavbarToggled = hamburgerIconSVG.getAttribute("data-open") === "true"

    hamburgerIconSVG.setAttribute("data-open", !isNavbarToggled)
    hamburgerIconSVG.setAttribute("aria-expanded", !isNavbarToggled)
}


hamburgerIconSVG.addEventListener("click", toggleNavbar)