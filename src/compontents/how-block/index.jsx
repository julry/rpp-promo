import {motion, useInView, useMotionValue, useTransform} from 'framer-motion';
import { Button } from '../shared/button';
import oval from '../../assets/images/ovalBlock.webp';
import styles from './styles.module.scss';
import { path } from './constants';
import { useCallback, useEffect, useRef, useState } from 'react';

export const HowBlock = ({wrapperRef}) => {
    const [ovalXDis, setOvalXDis] = useState();
    const rightTextRef = useRef();
    const leftTextRef = useRef();

    const isParentInView = useInView(wrapperRef, { 
        amount: 0.4,
    });

    const getSvgSizes = useCallback(() => {
        if (!leftTextRef?.current || !rightTextRef?.current) {
            return;
        }

        const leftTextRect = leftTextRef.current.getBoundingClientRect();
        const rightTextRect = rightTextRef.current.getBoundingClientRect();

        const width = rightTextRect.left - leftTextRect.left;

        const dist = window.innerWidth > 1100 ? 815 : 113;
        const koef = window.innerWidth > 1100 ? 0.75 : 1;

        setOvalXDis((width - dist) * koef);

        return (width - dist) * koef;
    }, []);

    useEffect(() => {
        getSvgSizes();

        window.addEventListener('resize', getSvgSizes);

        return () => window.removeEventListener('resize', getSvgSizes);
    }, [getSvgSizes])

    return (
        <div className={styles.howBlock} ref={wrapperRef}>
            <h3 className={styles.howBlockTitle}>
                как это работает?{'\n'}
               <span className='accent-text'>изи!</span>
            </h3>
            <div className={styles.howBlockContent}>
                <p className={styles.howBlockTextLeft} ref={leftTextRef}>
                    бот отправляет посты каждую неделю
                </p>
                <p className={styles.howBlockTextRight} ref={rightTextRef}>
                    ты прокачиваешься для крутой работы
                </p>
            </div>
            <img className={styles.howBlockOvalLeft} src={oval} alt="" />
            <svg className={styles.howBlockTrajectory} viewBox="0 0 747 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="trajectory" d="M0.671875 202.473C40.8385 222.64 137.272 241.573 201.672 155.973C282.172 48.973 452.172 -48.027 587.672 29.473C696.072 91.473 737.839 144.64 745.172 163.473"/>
            </svg>
            <svg className={styles.howBlockTrajectory} viewBox="0 0 184 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="trajectoryMob" d="M1.50061 0.0217185C1.72812 15.7314 13.4211 43.9426 58.3731 31.1106C114.563 15.0707 184.468 22.7726 181.656 78.8207C179.406 123.659 167.47 150.374 161.783 158.127" />
            </svg>
            <motion.img 
                className={styles.howBlockOvalDesk} 
                src={oval} 
                alt="" 
                initial={{ offsetDistance: "0%"}}
                animate={isParentInView ? { offsetDistance: "100%", scale: 3.2, x: ovalXDis ?? getSvgSizes()} : {}}
                style={{offsetPath: `url("#trajectory")`, offsetRotate: '0deg'}}
                transition={{duration: 2.5, ease: 'easeInOut'}}
            />
            <motion.img 
                className={styles.howBlockOval} 
                src={oval} 
                alt="" 
                initial={{ offsetDistance: "0%" }}
                animate={isParentInView ? { offsetDistance: "100%", scale: 2.5} : {}}
                style={{offsetPath: `url("#trajectoryMob")`, offsetRotate: '0deg', x: ovalXDis ?? getSvgSizes()}}
                transition={{duration: 1.8, ease: 'easeInOut',}}
            />
            <Button className={styles.howBlockButton} wrapperClassName={styles.howBlockButtonWrapper}>
                кайф я в деле
            </Button>
        </div>
    )
}