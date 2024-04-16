import styles from "./ModalOverlay.module.css";
import {usePathname} from "next/navigation";
import useHidden from "@/hooks/useHidden";


export default function ModalOverlay({onClose} : {onClose: () => void}) {

    useHidden();

    return (
        <>
            <div className={styles.overlay} onClick={onClose}></div>
        </>
    );
}
