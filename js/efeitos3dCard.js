const card = document.querySelector('.card-body')

// Efeito de rotação
card.addEventListener('mousemove', (e) => {
    let cardInnerHeight = card.clientHeight
    let cardInnerWidth = card.clientWidth

    // console.log('Inner Height: ' + cardInnerHeight)
    // console.log('Inner Width: ' + cardInnerWidth)

    let rect = card.getBoundingClientRect();
    let cardXposition = e.clientX - rect.left
    let cardYposition = e.clientY - rect.top

    // console.log('Card X Position: ' + cardXposition)
    // console.log('Card Y Position: ' + cardYposition)

    // Variaveis para customizar a animação
    let velocidadeRotacao = 25 // Define se roda mais ou menos
    
    let xCustom = 2.5
    let yCustom = 1.25

    let x = (cardInnerHeight / xCustom - cardXposition) / velocidadeRotacao
    let y = (cardInnerWidth / yCustom - cardYposition) /velocidadeRotacao

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
})

// Efeito 3d
const cardFigure = card.querySelector('.card-figure')
const cardName = card.querySelector('.card-name')
const cardDescription = card.querySelector('.card-description')
const cardMedia = card.querySelector('.card-media')

// Adicionando
card.addEventListener('mousemove', () => {
    cardFigure.style.transform = 'translate3d(0, 0, 150px)'
    cardName.style.transform = 'translate3d(0, 0, 180px)'
    cardDescription.style.transform = 'translate3d(0, 0, 190px)'
    cardMedia.style.transform = 'translate3d(0, 0, 140px)'
})

// Removendo quando o mouse sair de cima
card.addEventListener('mouseout', () => {
    // Removendo o 3d
    cardFigure.style.transform = 'translate3d(0, 0, 0)'
    cardName.style.transform = 'translate3d(0, 0, 0)'
    cardDescription.style.transform = 'translate3d(0, 0, 0)'
    cardMedia.style.transform = 'translate3d(0, 0, 0)'

    // Removendo a rotacao
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

})