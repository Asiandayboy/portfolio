const hamburgerIconSVG = document.querySelector(".hamburger-icon-svg")



function toggleNavbar() {
    const isNavbarToggled = hamburgerIconSVG.getAttribute("data-open") === "true"

    hamburgerIconSVG.setAttribute("data-open", !isNavbarToggled)
    hamburgerIconSVG.setAttribute("aria-expanded", !isNavbarToggled)
}


hamburgerIconSVG.addEventListener("click", toggleNavbar)




function showEmailForm() {
    const emailFormWrapper = document.querySelector(".email-form-wrapper")

    setTimeout(() => {
        if (emailFormWrapper.classList.contains("show-email-form")) {
            emailFormWrapper.scrollIntoView({ behavior: "smooth" })
        }
    }, 301)

    emailFormWrapper.classList.toggle("show-email-form")
}




const emailForm = document.getElementById("email-contact-form")

emailForm.addEventListener("submit", (e) => {
    e.preventDefault()

    emailjs.sendForm("service_nwlmgcd", "template_2vy37ok", emailForm).then(
        (response) => {
            alert("Email has been successfully sent.")
            emailForm.reset()
        }, 
        (error) => {
            alert("Failed to send email message. Try again. If this problem persists, please send your message through your email client instead.")
        })
})