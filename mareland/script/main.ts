console.log('hello world')
console.log('all the time')
// import '../index/components/coming-soon/coming_soon.markup'
const hambMenu = document.querySelector('.hamburger-menu') as HTMLElement
const navMenu = document.getElementById('navMenu') as HTMLElement
const navBar = document.querySelector('.navBar') as HTMLElement
const spanToBreak = document.querySelectorAll('.brSm') as NodeListOf<HTMLElement>

hambMenu.addEventListener('click', function() {
    navMenu.classList.toggle('show')
    navMenu.classList.toggle('hide',!navMenu.classList.contains('show'))
    hambMenu.classList.toggle('openHam') 
    navBar.classList.toggle('expand')
})

const navBarAdjToScreen = () => {
    if (window.innerWidth < 505) {
        navBar.classList.add('mobileView')
        navBar.classList.remove('biggerScreen')
        spanToBreak.forEach(el => {
            if (!el.firstChild || el.firstChild.nodeName !== 'BR') {
                const brEl = document.createElement('br')
                el.prepend(brEl)
            }
        })
    } else {
        navBar.classList.remove('mobileView')
        navBar.classList.add('biggerScreen')
        spanToBreak.forEach(el => {
            if (el.firstChild && el.firstChild.nodeName === 'BR') {
                el.removeChild(el.firstChild)
            }
        })
    }
}
const selector = document.getElementById('rclmtnPicSelector') as HTMLDivElement
const display = document.getElementById('rclmtnBigPic') as HTMLDivElement
const allTheBigPic = display.querySelectorAll('.bigPicShow') as NodeListOf<HTMLImageElement>
const allTheSmPic = selector.querySelectorAll('.smPicSelector') as NodeListOf<HTMLImageElement>

const carouselLogic = (selector,display) => {
    selector.forEach((smPic, index) => {

        smPic.addEventListener('click', () => {
            selector.forEach(pic => pic.classList.remove('picClicked'))
            display.forEach(pic => pic.classList.add('hide'))

            smPic.classList.add('picClicked') 
            if (display[index]) {
                display[index].classList.remove('hide')
            }
        })
    })

    const leftButton = document.querySelector('.scroll-button.left') as HTMLElement
    const rightButton = document.querySelector('.scroll-button.right') as HTMLElement
    const pictureContainer = document.querySelector('#scroller') as HTMLDivElement
    let currentIndex = 0 // Keep track of the current index

    leftButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex-- // Move to the previous picture
            scrollByPicWidth('left')
            rightButton.classList.remove('hide')
        } 
        if (currentIndex < 1) {
            leftButton.classList.add('hide')
        }
    })
    
    rightButton.addEventListener('click', function() {
        if (currentIndex < 3) {
            currentIndex++ // Move to the next picture
            scrollByPicWidth('right')
        } 
        if (currentIndex > 0) {
            leftButton.classList.remove('hide')
        } 
        if (currentIndex > 2) {
            rightButton.classList.add('hide')
        }
    })

    function scrollByPicWidth(direction) {
        const width = selector[1].offsetWidth
        console.log(width)
        if (direction === 'right') {
            pictureContainer.scrollLeft += width;
        } else {
            pictureContainer.scrollLeft -= width - 2;
        }
    }

}

carouselLogic([...allTheSmPic],[...allTheBigPic])
window.addEventListener('resize',navBarAdjToScreen)
navBarAdjToScreen()
console.log("tsc running 9")