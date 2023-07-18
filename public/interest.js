const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDown = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')

    toggleBtnIcon.classList = isOpen
     ? 'fa-solid fa-xmark'
     : 'fa-solid fa-bars'
}

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000, 
    delay: 200,
});

ScrollReveal().reveal('.interest_section', {origin: 'top'});
ScrollReveal().reveal('.first, .fourth, .seventh', {origin: 'left'});
ScrollReveal().reveal('.third, .sixth, .nineth', {origin: 'right'});

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "../resources/moon.png";
    }
    else{
        icon.src = "../resources/sun.png";
    }
}