'use client'
import styles from './page.module.css';
import {useState} from "react";
import GameScore from "@/components/GameScore";
import Header from "@/components/Header";
import {langText} from "@/constants/lang-keys";

export type langType = 'ru' | 'en'

export default function Home() {

    const [lang, setLang] = useState<langType>('ru')


    return (
        <>
            <Header currentLang={lang} toggleLang={(lang: langType) => setLang(lang)}/>
            <div className={styles.gamePage}>
                <div className="container">
                    <div className={styles.gameScene}>
                        <div className={styles.for}>
                            {langText[lang].title}
                        </div>
                        <GameScore lang={lang}/>
                    </div>
                </div>

            </div>
        </>
    )
}
