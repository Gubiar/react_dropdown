import { DropdownContext } from "@/context/DropdownContext";
import Image from "next/image";
import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({ items }) {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [isOpen, setIsOpen] = useState(false);
    const { setSelected } = useContext(DropdownContext);
    const wrapperRef = useRef(null);

    // useOutsideAlerter() by https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef);

    //context initializing
    useEffect(() => {
        setSelected(selectedItem);
    });

    const handleDropdownClick = (item) => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelected(item);
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className={styles.dropdown} ref={wrapperRef}>
            <button
                className={styles.dropdown_toggle}
                onClick={() => handleDropdownClick(this)}
            >
                <Image
                    src='/icn_tradutor.svg'
                    alt="Icone de globo para seleção de idioma"
                    fill={true}
                    quality={100}
                />
                <span>{selectedItem.sigla}</span>
            </button>
            {isOpen ? (
                <ul className={styles.dropdown_menu}>
                    {items.map((item) => (
                        <li
                            key={item.value}
                            onClick={() => handleItemClick(item)}
                        >
                            {`${item.sigla} - ${item.label}`}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
