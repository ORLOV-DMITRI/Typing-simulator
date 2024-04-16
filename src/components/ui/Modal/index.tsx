"use client";

import {createPortal} from "react-dom";
import {ReactNode, useEffect, useState} from "react";
import styles from "./Modal.module.css";
import cn from "classnames";
import ModalOverlay from "./ModalOverlay";

type ModalType = {
    children: ReactNode,
    onClose: () => void,
    isOpen: boolean
}

export default function Modal({children, onClose, isOpen} : ModalType) {
    const [mounted, setMounted] = useState(false);

    // @ts-ignore
    const keydownHandler = ({key}) => {
        switch (key) {
            case "Escape":
                onClose();
                break;
            default:
        }
    };


    useEffect(() => {
        document.addEventListener("keydown", keydownHandler);
        return () => document.removeEventListener("keydown", keydownHandler);
    });
    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted && isOpen
        ? createPortal(
            <>
                <ModalOverlay onClose={onClose}/>
                <div className={cn(styles.modal)}>
                    {children}
                </div>
            </>,
            document.body
        )
        : null;
}
