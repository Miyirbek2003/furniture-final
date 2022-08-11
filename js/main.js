const burger = document.querySelector('.burger')
const menu = document.querySelector('.left-menu')
const ext = document.querySelector('.ext')
const header_inner = document.querySelector('.header-inner')
burger.onclick = function(){
    menu.style.left = '0px';
    burger.style.display = 'none'
}
ext.onclick = function(){
    menu.style.left = '-300px';
    burger.style.display = 'inline-block'
}
