'use client'
import styles from './style.module.css'
import {usePathname} from "next/navigation";
import Link from "next/link";
import {langType} from "@/app/page";
import cn from "classnames";
import {langText} from "@/constants/lang-keys";


export default function Header({currentLang, toggleLang}: {
    currentLang: langType,
    toggleLang: (lang: langType) => void
}) {
    const path = usePathname()
    return (
        <header>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.title}>{langText[currentLang].headerTitle}</div>

                    <div className={styles.lang}>
                        <div className={cn(currentLang === 'ru' && styles.active)}
                             onClick={() => toggleLang('ru')}>RU
                        </div>
                        <div className={cn(currentLang === 'en' && styles.active)}
                             onClick={() => toggleLang('en')}>EN
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    );
};

