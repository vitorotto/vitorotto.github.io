class MobileMenu {
    constructor(hamburgerButton, closeButton, mobileMenu) {
        this.hamburgerButton = document.querySelector(hamburgerButton)
        this.closeButton = document.querySelector(closeButton)
        this.mobileMenu = document.querySelector(mobileMenu)
        
        // Adiciona o event listener do clique fora usando bind para manter o contexto
        document.addEventListener('click', this.handleOutsideClick.bind(this))
    }

    // Função que verifica se o clique foi fora do menu
    handleOutsideClick(event) {
        // Verifica se o menu está aberto (tem a classe flex)
        const isMenuOpen = this.mobileMenu.classList.contains('flex')
        
        // Verifica se o clique NÃO foi no menu, no botão hamburguer ou no botão de fechar
        const clickedOutside = !this.mobileMenu.contains(event.target) && 
                             !this.hamburgerButton.contains(event.target) &&
                             !this.closeButton.contains(event.target)

        // Se o menu estiver aberto E o clique foi fora, fecha o menu
        if (isMenuOpen && clickedOutside) {
            this.mobileMenu.classList.remove('flex')
        }
    }

    openMenu() {
        this.hamburgerButton.addEventListener('click', () => {
            this.mobileMenu.classList.add('active')
        })
    }

    closeMenu() {
        this.closeButton.addEventListener('click', () => {
            this.mobileMenu.classList.remove('active')
        })
    }

    init() {
        this.openMenu()
        this.closeMenu()
    }
}

const mobileMenu = new MobileMenu(
    '#hamburgerButton',
    '#closeButton',
    '#mobileMenu',
)
mobileMenu.init()