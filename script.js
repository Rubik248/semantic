function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const swiperWrapper = document.querySelector('.swiper-wrapper');
let startX, currentX, translateX = 0;

swiperWrapper.addEventListener('mousedown', touchStart);
swiperWrapper.addEventListener('mousemove', touchMove);
swiperWrapper.addEventListener('mouseup', touchEnd);

function touchStart(e) {
    startX = e.clientX;
}

function touchMove(e) {
    if (!startX) return;
    currentX = e.clientX;
    translateX = translateX - (startX - currentX);
    swiperWrapper.style.transform = `translateX(${translateX}px)`;
    startX = currentX;
}

function touchEnd() {
    startX = null;
}