// файл подключения основных скриптов / добавления своего кода после всех импортов
import './index.html';
import './index.scss';
import './ts/base/base';
//================================================================================================
const keyboard = document.querySelector('body');


    if (keyboard) {
        keyboard.innerHTML = `
        <div class="keyboard">
        <div class="keyboard__container">
        <textarea disabled spellcheck="false" class="text-input"></textarea>
            <div class="keyboard__body">
                    <ul class="keyboard__row keyboard__row_1">
                        <li class="keyboard__key">\`</li>
                        <li class="keyboard__key">1</li>
                        <li class="keyboard__key">2</li>
                        <li class="keyboard__key">3</li>
                        <li class="keyboard__key">4</li>
                        <li class="keyboard__key">5</li>
                        <li class="keyboard__key">6</li>
                        <li class="keyboard__key">7</li>
                        <li class="keyboard__key">8</li>
                        <li class="keyboard__key">9</li>
                        <li class="keyboard__key">0</li>
                        <li class="keyboard__key">-</li>
                        <li class="keyboard__key">=</li>
                        <li class="keyboard__key backspace-key">backspace</li>
                    </ul>
                    <ul class="keyboard__row keyboard__row_2">
                        <li class="keyboard__key tab-key">Tab</li>
                        <li ru="Й" rul="й" class="keyboard__key"><span>Q</span><span>Й</span></li>
                        <li ru="Ц" rul="ц" class="keyboard__key"><span>W</span><span>Ц</span></li>
                        <li ru="У" rul="у" class="keyboard__key"><span>E</span><span>У</span></li>
                        <li ru="К" rul="к" class="keyboard__key"><span>R</span><span>К</span></li>
                        <li ru="Е" rul="е" class="keyboard__key"><span>T</span><span>Е</span></li>
                        <li ru="Н" rul="н" class="keyboard__key"><span>Y</span><span>Н</span></li>
                        <li ru="Г" rul="г" class="keyboard__key"><span>U</span><span>Г</span></li>
                        <li ru="Ш" rul="ш" class="keyboard__key"><span>I</span><span>Ш</span></li>
                        <li ru="Щ" rul="щ" class="keyboard__key"><span>O</span><span>Щ</span></li>
                        <li ru="З" rul="з" class="keyboard__key"><span>P</span><span>З</span></li>
                        <li ru="Х" rul="х" class="keyboard__key"><span>[</span><span>Х</span></li>
                        <li ru="Ъ" rul="ъ" class="keyboard__key"><span>]</span><span>Ъ</span></li>
                        <li class="keyboard__key slash-right">\\</li>
                        <li class="keyboard__key del-key">Del</li>
                    </ul>
                    <ul class="keyboard__row keyboard__row_3">
                        <li class="keyboard__key caps-key">Caps Lock</li>
                        <li ru="Ф" rul="ф" class="keyboard__key"><span>A</span><span>Ф</span></li>
                        <li ru="Ы" rul="ы" class="keyboard__key"><span>S</span><span>Ы</span></li>
                        <li ru="В" rul="в" class="keyboard__key"><span>D</span><span>В</span></li>
                        <li ru="А" rul="а" class="keyboard__key"><span>F</span><span>А</span></li>
                        <li ru="П" rul="п" class="keyboard__key"><span>G</span><span>П</span></li>
                        <li ru="Р" rul="р" class="keyboard__key"><span>H</span><span>Р</span></li>
                        <li ru="О" rul="о" class="keyboard__key"><span>J</span><span>О</span></li>
                        <li ru="Л" rul="л" class="keyboard__key"><span>K</span><span>Л</span></li>
                        <li ru="Д" rul="д" class="keyboard__key"><span>L</span><span>Д</span></li>
                        <li ru="Ж" rul="ж" class="keyboard__key"><span>;</span><span>Ж</span></li>
                        <li ru="Э" rul="э" class="keyboard__key"><span>'</span><span>Э</span></li>
                        <li class="keyboard__key enter-key">Enter</li>
                    </ul>
                    <ul class="keyboard__row keyboard__row_4">
                        <li class="keyboard__key shift-key shift-left">Shift</li>
                        <li ru="Я" rul="я" class="keyboard__key"><span>Z</span><span>Я</span></li>
                        <li ru="Ч" rul="ч" class="keyboard__key"><span>X</span><span>Ч</span></li>
                        <li ru="С" rul="с" class="keyboard__key"><span>C</span><span>С</span></li>
                        <li ru="М" rul="м" class="keyboard__key"><span>V</span><span>М</span></li>
                        <li ru="И" rul="и" class="keyboard__key"><span>B</span><span>И</span></li>
                        <li ru="Т" rul="т" class="keyboard__key"><span>N</span><span>Т</span></li>
                        <li ru="Ь" rul="ь" class="keyboard__key"><span>M</span><span>Ь</span></li>
                        <li ru="Б" rul="б" class="keyboard__key"><span>,</span><span>Б</span></li>
                        <li ru="Ю" rul="ю" class="keyboard__key"><span>.</span><span>Ю</span></li>
                        <li class="keyboard__key">/</li>
                        <li class="keyboard__key arrow-up">▲</li>
                        <li class="keyboard__key shift-key shift-right">Shift</li>
                    </ul>
                    <ul class="keyboard__row keyboard__row_5">
                        <li class="keyboard__key ctrl-key ctrl-left">Ctrl</li>
                        <li class="keyboard__key win-key">Win</li>
                        <li class="keyboard__key alt-key alt-left">Alt</li>
                        <li class="keyboard__key spacebar-key"> </li>
                        <li class="keyboard__key alt-key alt-right">Alt</li>
                        <li class="keyboard__key ctrl-key ctrl-right">Ctrl</li>
                        <li class="keyboard__key arrow-left">◀</li>
                        <li class="keyboard__key arrow-down">▼</li>
                        <li class="keyboard__key arrow-right">▶</li>
                    </ul>
            </div>
            <p class="text">Клавиатура создана в операционной системе Windows</p>
            <p class="text-2">Для переключения языка комбинация: левыe ctrl + alt</p>
        </div>
    </div>
        `;
    }
            //Объявление переменных
    const keysArr = document.querySelectorAll(".keyboard__key");
    const capsKey = document.querySelector('.caps-key');
    const textInput = (<HTMLInputElement>document.querySelector(".text-input"));
    const shiftRight = document.querySelector('.shift-right');
    const shiftLeft = document.querySelector('.shift-left');
    const altRight = document.querySelector('.alt-right');
    const altLeft = document.querySelector('.alt-left');
    const ctrlRight = document.querySelector('.ctrl-right');
    const ctrlLeft = document.querySelector('.ctrl-left');
    const arrowRight = document.querySelector(".arrow-right");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowDown = document.querySelector(".arrow-down");
    const arrowUp = document.querySelector(".arrow-up");
    const delKey = document.querySelector(".del-key");
    const backspaceKey = document.querySelector(".backspace-key");
    const spacebarKey = document.querySelector(".spacebar-key");