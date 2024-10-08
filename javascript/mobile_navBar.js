class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s `)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }

    handleOutsideClick(event) {
        if (!event.target.closest(".menu") && !event.target.closest(".mobile-menu")) {
            if (this.navList.classList.contains(this.activeClass)) {
                this.navList.classList.remove(this.activeClass);
                this.mobileMenu.classList.remove(this.activeClass);
                this.animateLinks();
            }
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
        document.addEventListener("click", this.handleOutsideClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu",
    ".menu li",
)

mobileNavbar.init()