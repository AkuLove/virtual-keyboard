const menuLinks: NodeListOf<Element> = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    const onMenuLinkClick = (e: any) => {
        const iconMenu: Element | null = document.querySelector('.menu__icon');
        const menuBody: Element | null = document.querySelector('.menu__body');
        const menuLink: any = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock: any = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue: number = gotoBlock.getBoundingClientRect().top + scrollY - Number(document.querySelector('header')?.offsetHeight);

            //Закрывает меню бургер если он был открыт
            if (iconMenu?.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody?.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}