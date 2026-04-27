import { motion, useInView } from 'framer-motion';
import cn from 'classnames';
import phone from '../../assets/images/phone.webp';
import ovalBg from '../../assets/images/ovalBg.webp';
import gift from '../../assets/images/gift.webp';
import giftHigh from '../../assets/images/giftHigh.webp';
import giftLong from '../../assets/images/giftLong.webp';
import { Block } from '../shared/block';
import styles from './styles.module.scss';
import { Button } from '../shared/button';
import { useRef } from 'react';
import {SPRING_TRANSITION} from './constants';

export const BotBlock = () => {
    const imageWrapperRef = useRef();

    const isParentInView = useInView(imageWrapperRef, { 
        amount: 0.7,
    });

    const getGiftAnimation = (type) => {
        if (!isParentInView) {
            return {}
        }

        switch (type) {
            case "gift": {
                if (window.innerWidth > 1100) {
                    return ({x: -120, y: -120, rotate: -20});
                }

                return ({x: -50, y: -80, rotate: -20});
            }

            case "high": {
                if (window.innerWidth > 1100) {
                    return ({x: -140, y: -10, rotate: -25});
                }

                return ({x: -80, y: -50, rotate: -20});
            }

            case "long": {
                if (window.innerWidth > 1100) {
                    return ({});
                }
                if (window.innerWidth < 360) {
                    return ({x: -200, y: 50, rotate: 15});
                }

                return ({x: -250, y: 20, rotate: 25});
            }
        }
        
    }

    return (
        <div className={styles.botBlock}>
                <img className={styles.botBlockOval} src={ovalBg} alt="" />
                <Block>
                    <div className={styles.botBlockContent}>
                        <h3 className={styles.botBlockTitleBot}>
                            переходи в VK‑бот 
                        </h3>
                        <h3 className={cn(styles.botBlockTitleBot, styles.botBlockTitleJob)}>
                            работа по профессии
                        </h3>
                        <p className={styles.botBlockText}>
                            твой помощник в поиске первой работы — внутри <span className='accent-text'>подарки, вакансии по специальности, лайфхаки</span> и другая полезная инфа для студентов колледжей и техникумов
                        </p>
                        <Button className={styles.botBlockButtonDesk} wrapperClassName={styles.botBlockButtonDeskWrapper}>
                            переходи в бота!
                        </Button>
                    </div>
                </Block>
                <div className={styles.botBlockImagesWrapper} ref={imageWrapperRef}>
                    <img className={styles.botBlockPhoneImg} src={phone} alt="" />
                    <motion.img 
                        className={styles.botBlockGift}  
                        src={gift} 
                        alt=""
                        transition={SPRING_TRANSITION}
                        animate={getGiftAnimation('gift')}
                    />
                    <motion.img 
                        className={styles.botBlockGiftHigh} 
                        src={giftHigh} 
                        alt="" 
                        animate={getGiftAnimation('high')}
                        transition={SPRING_TRANSITION}
                    />
                    <motion.img 
                        className={styles.botBlockGiftLong} 
                        src={giftLong} 
                        alt="" 
                        transition={SPRING_TRANSITION}
                        animate={getGiftAnimation('long')}
                    />
                </div>
                <Button className={styles.botBlockButton}>
                        открыть бот
                </Button>
        </div>
    )
}