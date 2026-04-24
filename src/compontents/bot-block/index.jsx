import { motion, useInView } from 'framer-motion';
import cn from 'classnames';
import phone from '../../assets/images/phone.png';
import ovalBg from '../../assets/images/ovalBg.png';
import gift from '../../assets/images/gift.png';
import giftHigh from '../../assets/images/giftHigh.png';
import giftLong from '../../assets/images/giftLong.png';
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
                    return({x: -120, y: -120, rotate: -20});
                }

                return({x: -50, y: -80, rotate: -20});
            }

            case "high": {
                if (window.innerWidth > 1100) {
                    return({x: -140, y: -10, rotate: -25});
                }

                return({x: -80, y: -50, rotate: -20});
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
                        <Button className={styles.botBlockButtonDesk}>
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
                        animate={{x: -220, y: -10, rotate: 25}}
                    />
                </div>
                <Button className={styles.botBlockButton}>
                        открыть бот
                </Button>
        </div>
    )
}