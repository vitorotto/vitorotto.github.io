class MobileMenu {
    constructor(hamburgerButton, closeButton, mobileMenu, body) {
        this.hamburgerButton = document.querySelector(hamburgerButton)
        this.closeButton = document.querySelector(closeButton)
        this.mobileMenu = document.querySelector(mobileMenu)
        this.body = document.querySelector(body)
        
        // Adiciona o event listener do clique fora usando bind para manter o contexto
        document.addEventListener('click', this.handleOutsideClick.bind(this))
        document.addEventListener('click', this.scrollBlock.bind(this))
    }

    // Função que verifica se o clique foi fora do menu
    handleOutsideClick(event) {
        // Verifica se o menu está aberto (tem a classe flex)
        const isMenuOpen = this.mobileMenu.classList.contains('active')
        
        // Verifica se o clique NÃO foi no menu, no botão hamburguer ou no botão de fechar
        const clickedOutside = !this.mobileMenu.contains(event.target) && 
                             !this.hamburgerButton.contains(event.target) &&
                             !this.closeButton.contains(event.target)

        // Se o menu estiver aberto E o clique foi fora, fecha o menu
        if (isMenuOpen && clickedOutside) {
            this.mobileMenu.classList.remove('active')
            this.mobileMenu.classList.add('fix-hight-menu-out')
            setTimeout(() => {
                this.mobileMenu.classList.remove('fix-hight-menu-out')
            }, 400)
        }
    }

    // função para bloquear o scroll com o menu mobile aberto
    scrollBlock() {
        const isMenuOpen = this.mobileMenu.classList.contains('active')
        console.log('aberto')
        if (isMenuOpen) {
            this.body.classList.add('scroll-block')
        } else {
            this.body.classList.remove('scroll-block')
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
            this.mobileMenu.classList.add('fix-hight-menu-out')
            setTimeout(() => {
                this.mobileMenu.classList.remove('fix-hight-menu-out')
            }, 400)
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
    'body'
)
mobileMenu.init()