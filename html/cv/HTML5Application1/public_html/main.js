const burger = document.querySelector('.burger');
const activeElement = document.querySelectorAll('.active');
const navLi = document.querySelectorAll('nav li');
burger.addEventListener('click', function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show");
    }
});
navLi.forEach(function (items) {
    items.addEventListener('click', function () {
        for (let i = 0; i < activeElement.length; i++) {
            activeElement[i].classList.toggle("show");
        }
    })
})