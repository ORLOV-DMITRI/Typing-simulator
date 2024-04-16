import styles from "@/components/GameScore/style.module.css";

export const langKeys = {
    en: [
        // Row 0
        [
            { id: 'esc', text: 'ESC', class: 'pinky' },
            { id: '1', text: '1', class: 'pinky' },
            { id: '2', text: '2', class: 'ring' },
            { id: '3', text: '3', class: 'middle' },
            { id: '4', text: '4', class: 'pointer1st' },
            { id: '5', text: '5', class: 'pointer2nd' },
            { id: '6', text: '6', class: 'pointer2nd' },
            { id: '7', text: '7', class: 'pointer1st' },
            { id: '8', text: '8', class: 'middle' },
            { id: '9', text: '9', class: 'ring' },
            { id: '10', text: '0', class: 'pinky' },
            { id: 'minus', text: '-', class: 'pinky' },
            { id: 'equals', text: '+', class: 'pinky' },
            { id: 'back', text: 'BACK', class: 'pinky' }
        ],
        // Row 1
        [
            { id: 'tab', text: 'TAB', class: 'pinky' },
            { id: 'Q', text: 'Q', class: 'pinky' },
            { id: 'W', text: 'W', class: 'ring' },
            { id: 'E', text: 'E', class: 'middle' },
            { id: 'R', text: 'R', class: 'pointer1st' },
            { id: 'T', text: 'T', class: 'pointer2nd' },
            { id: 'Y', text: 'Y', class: 'pointer2nd' },
            { id: 'U', text: 'U', class: 'pointer1st' },
            { id: 'I', text: 'I', class: 'middle' },
            { id: 'O', text: 'O', class: 'ring' },
            { id: 'P', text: 'P', class: 'pinky' },
            { id: 'left_bracket', text: '[', class: 'pinky' },
            { id: 'right_bracket', text: ']', class: 'pinky' },
            { id: 'backslash', text: '\\', class: 'pinky' }
        ],
        // Row 2
        [
            { id: 'caps', text: 'CAPS', class: 'pinky' },
            { id: 'A', text: 'A', class: 'pinky' },
            { id: 'S', text: 'S', class: 'ring' },
            { id: 'D', text: 'D', class: 'middle' },
            { id: 'F', text: 'F', class: 'pointer1st' },
            { id: 'G', text: 'G', class: 'pointer2nd' },
            { id: 'H', text: 'H', class: 'pointer2nd' },
            { id: 'J', text: 'J', class: 'pointer1st' },
            { id: 'K', text: 'K', class: 'middle' },
            { id: 'L', text: 'L', class: 'ring' },
            { id: 'colon', text: ':', class: 'pinky' },
            { id: 'quote', text: '"', class: 'pinky' },
            { id: 'enter', text: 'ENTER', class: 'pinky' }
        ],
        // Row 3
        [
            { id: 'left-shift', text: 'SHIFT', class: 'pinky' },
            { id: 'Z', text: 'Z', class: 'pinky' },
            { id: 'X', text: 'X', class: 'ring' },
            { id: 'C', text: 'C', class: 'middle' },
            { id: 'V', text: 'V', class: 'pointer1st' },
            { id: 'B', text: 'B', class: 'pointer2nd' },
            { id: 'N', text: 'N', class: 'pointer2nd' },
            { id: 'M', text: 'M', class: 'pointer1st' },
            { id: 'comma', text: ',', class: 'middle' },
            { id: 'period', text: '.', class: 'ring' },
            { id: 'semicolon', text: ';', class: 'pinky' },
            { id: 'right-shift', text: 'SHIFT', class: 'pinky' }
        ]
    ],
    ru: [
        // Row 0
        [
            { id: 'esc', text: 'ESC', class: 'pinky' },
            { id: '1', text: '1', class: 'pinky' },
            { id: '2', text: '2', class: 'ring' },
            { id: '3', text: '3', class: 'middle' },
            { id: '4', text: '4', class: 'pointer1st' },
            { id: '5', text: '5', class: 'pointer2nd' },
            { id: '6', text: '6', class: 'pointer2nd' },
            { id: '7', text: '7', class: 'pointer1st' },
            { id: '8', text: '8', class: 'middle' },
            { id: '9', text: '9', class: 'ring' },
            { id: '10', text: '0', class: 'pinky' },
            { id: 'minus', text: '-', class: 'pinky' },
            { id: 'equals', text: '=', class: 'pinky' },
            { id: 'back', text: 'BACK', class: 'pinky' }
        ],
        // Row 1
        [
            { id: 'tab', text: 'TAB', class: 'pinky' },
            { id: 'Q', text: 'Й', class: 'pinky' },
            { id: 'W', text: 'Ц', class: 'ring' },
            { id: 'E', text: 'У', class: 'middle' },
            { id: 'R', text: 'К', class: 'pointer1st' },
            { id: 'T', text: 'Е', class: 'pointer2nd' },
            { id: 'Y', text: 'Н', class: 'pointer2nd' },
            { id: 'U', text: 'Г', class: 'pointer1st' },
            { id: 'I', text: 'Ш', class: 'middle' },
            { id: 'O', text: 'Щ', class: 'ring' },
            { id: 'P', text: 'З', class: 'pinky' },
            { id: 'left_bracket', text: 'Х', class: 'pinky' },
            { id: 'right_bracket', text: 'Ъ', class: 'pinky' },
            { id: 'backslash', text: '\\', class: 'pinky' }
        ],
        // Row 2
        [
            { id: 'caps', text: 'CAPS', class: 'pinky' },
            { id: 'A', text: 'Ф', class: 'pinky' },
            { id: 'S', text: 'Ы', class: 'ring' },
            { id: 'D', text: 'В', class: 'middle' },
            { id: 'F', text: 'А', class: 'pointer1st' },
            { id: 'G', text: 'П', class: 'pointer2nd' },
            { id: 'H', text: 'Р', class: 'pointer2nd' },
            { id: 'J', text: 'О', class: 'pointer1st' },
            { id: 'K', text: 'Л', class: 'middle' },
            { id: 'L', text: 'Д', class: 'ring' },
            { id: 'colon', text: 'Ж', class: 'pinky' },
            { id: 'quote', text: 'Э', class: 'pinky' },
            { id: 'enter', text: 'ENTER', class: 'pinky' }
        ],
        // Row 3
        [
            { id: 'left-shift', text: 'SHIFT', class: 'pinky' },
            { id: 'Z', text: 'Я', class: 'pinky' },
            { id: 'X', text: 'Ч', class: 'ring' },
            { id: 'C', text: 'С', class: 'middle' },
            { id: 'V', text: 'М', class: 'pointer1st' },
            { id: 'B', text: 'И', class: 'pointer2nd' },
            { id: 'N', text: 'Т', class: 'pointer2nd' },
            { id: 'M', text: 'Ь', class: 'pointer1st' },
            { id: 'comma', text: 'Б', class: 'middle' },
            { id: 'period', text: 'Ю', class: 'ring' },
            { id: 'semicolon', text: '.', class: 'pinky' }, // точка на той же клавише, что и запятая
            { id: 'right-shift', text: 'SHIFT', class: 'pinky' }
        ]
    ],
};

export const langText = {
    ru: {
        title: 'Нажимайте на клавиатуре указанные клавиши как можно быстрее!',
        headerTitle: 'Тренажер печати',
        score: 'Очки',
        modalTitle: 'Вы проиграли!',
        modalScore: 'Ваш счёт',
        modalBtn: 'Повторить'
    },
    en: {
        title: 'Press the keyboard as quickly as possible!',
        headerTitle: 'Typing simulator',
        score: 'Score',
        modalTitle: 'You lost!',
        modalScore: 'Your score',
        modalBtn: 'Repeat'
    }
}

