import person from '../../assets/images/man.png';
import {openBot} from '../../utils/openBot';
import { Block } from '../shared/block';

import styles from './styles.module.scss';

export const Footer = () => (
   <div className={styles.footerWrapper}>
        <img className={styles.footerPerson} src={person} alt="" />
        <div className={styles.footer}>
            <Block className={styles.footerBlock} shiningClassName={styles.footerShining}>
                <p className={styles.footerText}>
                    © 2005-2026 FutureToday.{'\n'}Все права защищены.
                </p>
                <div className={styles.footerBotBlock}>
                    <div className={styles.footerBotBlockText}>
                        <p className={styles.footerText}>перейти в бот</p>
                        <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.36395C0.447715 6.36395 9.65645e-08 6.81167 0 7.36395C-9.65645e-08 7.91624 0.447715 8.36395 1 8.36395L1 7.36395L1 6.36395ZM26.7071 8.07106C27.0976 7.68054 27.0976 7.04737 26.7071 6.65685L20.3431 0.292888C19.9526 -0.0976362 19.3195 -0.0976364 18.9289 0.292888C18.5384 0.683412 18.5384 1.31658 18.9289 1.7071L24.5858 7.36396L18.9289 13.0208C18.5384 13.4113 18.5384 14.0445 18.9289 14.435C19.3195 14.8255 19.9526 14.8255 20.3431 14.435L26.7071 8.07106ZM1 7.36395L1 8.36395L26 8.36396L26 7.36396L26 6.36396L1 6.36395L1 7.36395Z" fill="#FFF2EC"/>
                        </svg>
                    </div>
                    
                    <button className={styles.footerBotButton} onClick={openBot}>
                        <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_9001_106)">
                            <path d="M0 24.96C0 13.1937 0 7.31062 3.65531 3.65531C7.31062 0 13.1937 0 24.96 0H27.04C38.8063 0 44.6893 0 48.3447 3.65531C52 7.31062 52 13.1937 52 24.96V27.04C52 38.8063 52 44.6893 48.3447 48.3447C44.6893 52 38.8063 52 27.04 52H24.96C13.1937 52 7.31062 52 3.65531 48.3447C0 44.6893 0 38.8063 0 27.04V24.96Z" fill="#FFF2EC"/>
                            <path d="M27.6667 37.4618C15.815 37.4618 9.0551 29.3368 8.77344 15.8168H14.7101C14.9051 25.7401 19.2817 29.9434 22.7483 30.8101V15.8168H28.3385V24.3751C31.7619 24.0068 35.3581 20.1068 36.5714 15.8168H42.1616C41.2299 21.1034 37.3299 25.0034 34.5566 26.6068C37.3299 27.9068 41.7718 31.3084 43.4618 37.4618H37.3082C35.9866 33.3451 32.6935 30.1601 28.3385 29.7268V37.4618H27.6667Z" fill="#1E1E1E"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_9001_106">
                            <rect width="52" height="52" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </Block>
        </div>
   </div>
)