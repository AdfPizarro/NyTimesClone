const footerSectionHeaders = document.querySelectorAll("footer .footer-links-section h4");

footerSectionHeaders.forEach(function (item) {
    item.addEventListener("click", function () {
        const ul = this.parentNode.querySelector("ul");
        if (ul.classList.contains("shown"))
            ul.classList.remove("shown");
        else
            ul.classList.add("shown");
    });
});