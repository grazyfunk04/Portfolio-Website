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
    distance: '0px',
    duration: 2000, 
    delay: 200,
});

// ScrollReveal().reveal('#personal_image, .profile_section', {origin: 'top'});
// ScrollReveal().reveal('.name', {origin: 'bottom'});
// ScrollReveal().reveal('.brief, .leetcode, .hackerrank, .github', {origin: 'left'});
// ScrollReveal().reveal('.leftSection > ul, .geeksforgeeks, .codechef, .codeforces', {origin: 'right'});


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