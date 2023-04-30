const popupLinks: NodeListOf<Element> = document.querySelectorAll('.popup-link');
const body: HTMLBodyElement | null = document.querySelector('body');
const lockPadding: NodeListOf<Element> = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink: Element = popupLinks[i];
        popupLink.addEventListener('click', function(e: Event): void {
            const popupName = String(popupLink.getAttribute('href')?.replace('#', ''));
            const currentPopup: HTMLElement | null = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon: NodeListOf<Element> = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el: Element = popupCloseIcon[i];
        el.addEventListener('click', function(e: Event): void {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen (currentPopup: any): void {
    if (currentPopup && unlock) {
        const popupActive: Element | null = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (e: any): void {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive: any, doUnlock = true): void {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock(): void {
    const lockPaddingValue: string = window.innerWidth - Number((document.querySelector<HTMLElement>('.wrapper'))?.offsetWidth) + 'px';
    if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
        const el: HTMLElement = lockPadding[i] as HTMLElement;
        el.style.paddingRight = lockPaddingValue;
    }
}
    body!.style.paddingRight = lockPaddingValue;
    body?.classList.add('_lock');

    unlock = false;
    setTimeout(function (): void {
        unlock = true;
    }, timeout);
}

function bodyUnlock(): void {
    if (lockPadding.length > 0) {
    setTimeout(function (): void {
        for (let i = 0; i < lockPadding.length; i++) {
            const el: HTMLElement = lockPadding[i] as HTMLElement;
            el.style.paddingRight = '0px'
        }
        body!.style.paddingRight = '0px';
        body?.classList.remove('_lock');
    }, timeout);
}
}


