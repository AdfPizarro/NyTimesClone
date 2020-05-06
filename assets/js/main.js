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

const nav = document.querySelector(".nav-container");
const navFix = document.querySelector(".nav-min-container");

addEventListener("scroll", function(){
  if (this.scrollY>1000){
    navFix.classList.remove("hide")
    nav.classList.add("hide");
  }else{
    nav.classList.remove("hide")
    navFix.classList.add("hide");
  }
})
