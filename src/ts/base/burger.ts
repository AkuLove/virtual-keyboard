const iconMenu: Element | null = document.querySelector('.menu__icon');
const menuBody: Element | null = document.querySelector('.menu__body');


if (iconMenu) {
    iconMenu.addEventListener("click", function() {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody?.classList.toggle('_active');
    });

    //Закрытие бургера при клике вне menu__body
    window.addEventListener("click", function(e) {
        if (e.target !== menuBody &&
            e.target !== iconMenu &&
            e.target !== iconMenu.childNodes[1] && menuBody?.classList.contains('_active')) {
            console.log(e.target);
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody?.classList.remove('_active');
        }
    });
}