var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var hambMenu = document.querySelector('.hamburger-menu');
var navMenu = document.getElementById('navMenu');
var navBar = document.querySelector('.navBar');
var spanToBreak = document.querySelectorAll('.brSm');
hambMenu.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    navMenu.classList.toggle('hide', !navMenu.classList.contains('show'));
    hambMenu.classList.toggle('openHam');
    navBar.classList.toggle('expand');
});
var navBarAdjToScreen = function () {
    if (window.innerWidth < 505 && navBar.classList.contains('biggerScreen')) {
        navBar.classList.add('mobileView');
        navBar.classList.remove('biggerScreen');
        spanToBreak.forEach(function (el) {
            if (!el.firstChild || el.firstChild.nodeName !== 'BR') {
                var brEl = document.createElement('br');
                el.prepend(brEl);
            }
        });
    }
    else if (window.innerWidth >= 505 && !navBar.classList.contains('biggerScreen')) {
        navBar.classList.remove('mobileView');
        navBar.classList.add('biggerScreen');
        spanToBreak.forEach(function (el) {
            if (el.firstChild && el.firstChild.nodeName === 'BR') {
                el.removeChild(el.firstChild);
            }
        });
    }
};
var carouselLogic = function (selector, display) {
    selector.forEach(function (smPic, index) {
        smPic.addEventListener('click', function () {
            selector.forEach(function (pic) { return pic.classList.remove('picClicked'); });
            display.forEach(function (pic) { return pic.classList.add('hide'); });
            smPic.classList.add('picClicked');
            if (display[index]) {
                display[index].classList.remove('hide');
            }
        });
    });
    var leftButton = document.querySelector('.scroll-button.left');
    var rightButton = document.querySelector('.scroll-button.right');
    var pictureContainer = document.querySelector('#scroller');
    var currentIndex = 0; // Keep track of the current index
    leftButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--; // Move to the previous picture
            scrollByPicWidth('left');
            rightButton.classList.remove('hide');
        }
        if (currentIndex < 1) {
            leftButton.classList.add('hide');
        }
    });
    rightButton.addEventListener('click', function () {
        if (currentIndex < 3) {
            currentIndex++; // Move to the next picture
            scrollByPicWidth('right');
        }
        if (currentIndex > 0) {
            leftButton.classList.remove('hide');
        }
        if (currentIndex > 2) {
            rightButton.classList.add('hide');
        }
    });
    function scrollByPicWidth(direction) {
        var width = selector[1].offsetWidth;
        if (direction === 'right') {
            pictureContainer.scrollLeft += width;
        }
        else {
            pictureContainer.scrollLeft -= width;
        }
    }
};
var selector = document.getElementById('rclmtnPicSelector');
var display = document.getElementById('rclmtnBigPic');
if (display && selector) {
    var allTheBigPic = display.querySelectorAll('.bigPicShow');
    var allTheSmPic = selector.querySelectorAll('.smPicSelector');
    carouselLogic(__spreadArray([], allTheSmPic, true), __spreadArray([], allTheBigPic, true));
}
window.addEventListener('resize', navBarAdjToScreen);
navBarAdjToScreen();
