import styles from './style.module.css'
import {useEffect, useState} from "react";
import {langKeys, langText} from "@/constants/lang-keys";
import Modal from "@/components/ui/Modal";
import {langType} from "@/app/page";

interface IGameScore {
    lang: langType
}

export default function GameScore({lang}: IGameScore) {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const [selectedKey, setSelectedKey] = useState<string | null>(null);
    const [score, setScore] = useState<number>(0);
    const [activeKey, setActiveKey] = useState('');

    const [langKeysLang, setKeysLang] = useState(langKeys.ru);

    useEffect(() => {
        setKeysLang(langKeys[lang])
    }, [lang])



    const getRandomNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const getRandomKey = () => {
        return keys[getRandomNumber(0, keys.length - 1)];
    };
    useEffect(() => {
        setSelectedKey(getRandomKey());
    }, []);


    useEffect(() => {
        const handleKeyUp = (event: KeyboardEvent) => {
            const keyPressed = String.fromCharCode(event.keyCode);
            setActiveKey(keyPressed);

            if (keyPressed === selectedKey) {
                setScore((prevState) => prevState + 1);
                setSelectedKey(getRandomKey());
            } else {
                setIsOpenModal(true)
                setScore(0);
                setSelectedKey(getRandomKey());
            }
        };

        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [selectedKey]);

    return (
        <div>
            <div className="result">{langText[lang].score}: {score}</div>
            <div className={'keyboard'}>
                {langKeysLang.map((row, index) => (
                    <ul key={index} className={`row row-${index}`}>
                        {row.map((key) => (
                            <li key={key.id}
                                className={`li-item ${key.class} ${selectedKey === key.id ? 'selected' : ''} 
                                ${activeKey === key.id ? 'hit' : ''}`} id={key.id}>
                                {key.text}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

            <Modal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal}>
                <div className={styles.modal}>
                    <div className={styles.text}>{langText[lang].modalTitle}</div>
                    <div className={styles.text}>{langText[lang].modalScore}: {score}</div>
                    <div className={styles.button} onClick={() => setIsOpenModal(false)}>{langText[lang].modalBtn}</div>
                </div>
            </Modal>
        </div>
    );
};

