function mostrarmenu(){
    let menumobile = document.querySelector('.menu-mobile');
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        document.querySelector('.icone').src = "fotos/menu_white_36dp.svg";
    }else{
        menumobile.classList.add('open');
        document.querySelector('.icone').src = "fotos/close_white_36dp.svg";
    }
}