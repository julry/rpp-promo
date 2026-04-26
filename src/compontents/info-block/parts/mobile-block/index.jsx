import { AnimatePresence, motion } from 'framer-motion';
import { cards } from '../../constants';
import { Card } from '../card';

import styles from './styles.module.scss';
import { useState } from 'react';


export const MobileBlock = () => {
    const [[currentIndex, direction], setCurrentIndex] = useState([1, 0]);

    const nextSlide = () => {
        setCurrentIndex([(currentIndex + 1) % cards.length, 1]);
    };

    const prevSlide = () => {
        setCurrentIndex([(currentIndex - 1 + cards.length) % cards.length, -1]);
    }

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 400, damping: 40 },
                opacity: { duration: 0.3 }
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: {
                x: { duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.2 }
            }
        })
    };

return (
    <div className={styles.infoBlockMobile}>
        <div className={styles.infoBlockMobileButtonsWrapper}>
            <button onClick={nextSlide} className={styles.infoBlockMobileButton}>
                <svg viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8516 5.4094C19.321 5.4094 19.7016 5.78996 19.7016 6.2594C19.7016 6.72884 19.321 7.1094 18.8516 7.1094L18.8516 6.2594L18.8516 5.4094ZM0.250523 6.86044C-0.0814247 6.5285 -0.0814247 5.99031 0.250523 5.65836L5.65989 0.248993C5.99183 -0.0829528 6.53002 -0.0829529 6.86197 0.248993C7.19392 0.580938 7.19392 1.11913 6.86197 1.45107L2.05364 6.2594L6.86197 11.0677C7.19392 11.3997 7.19392 11.9379 6.86197 12.2698C6.53003 12.6018 5.99184 12.6018 5.65989 12.2698L0.250523 6.86044ZM18.8516 6.2594L18.8516 7.1094L0.851563 7.1094L0.851562 6.2594L0.851562 5.4094L18.8516 5.4094L18.8516 6.2594Z" fill="#FF7F00"/>
                </svg>
            </button>
            <button onClick={prevSlide} className={styles.infoBlockMobileButton}>
                <svg viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.851563 5.4094C0.382121 5.4094 0.00156252 5.78996 0.00156248 6.2594C0.00156244 6.72884 0.38212 7.1094 0.851562 7.1094L0.851562 6.2594L0.851563 5.4094ZM19.4526 6.86044C19.7845 6.5285 19.7845 5.99031 19.4526 5.65836L14.0432 0.248993C13.7113 -0.0829528 13.1731 -0.0829529 12.8412 0.248993C12.5092 0.580938 12.5092 1.11913 12.8412 1.45107L17.6495 6.2594L12.8412 11.0677C12.5092 11.3997 12.5092 11.9379 12.8412 12.2698C13.1731 12.6018 13.7113 12.6018 14.0432 12.2698L19.4526 6.86044ZM0.851562 6.2594L0.851562 7.1094L18.8516 7.1094L18.8516 6.2594L18.8516 5.4094L0.851563 5.4094L0.851562 6.2594Z" fill="#FF7F00"/>
                </svg>
            </button>
        </div>
        <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div 
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.infoBlockMobileCard}
            >
                <Card {...cards[currentIndex]} />
            </motion.div>
        </AnimatePresence>
    </div>
)
};