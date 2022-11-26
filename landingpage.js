function mostrarmenu(){
    let menumobile = document.querySelector('.menu-mobile');
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        document.querySelector('.icone').src = "menu_white_36dp.svg";
    }else{
        menumobile.classList.add('open');
        document.querySelector('.icone').src = "close_white_36dp.svg";
    }
}