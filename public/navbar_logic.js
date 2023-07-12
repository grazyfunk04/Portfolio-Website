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
