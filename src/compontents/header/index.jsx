import { Block } from '../shared/block';
import logo from '../../assets/images/logo.svg';
import styles from './styles.module.scss';
import {Button} from '../shared/button/index';
import { Shining } from '../shared/shining';

export const Header = ({ onScrollToInfo, onScrollToHow }) => (
    <Block className={styles.header} wrapperClassname={styles.headerWrapper}>
        <img className={styles.headerLogo} src={logo} alt="Работа по профессии by FutureToday" />
        <div className={styles.headerButtons}>
            <Button className={styles.headerButtonDesktop} isSecondary onClick={onScrollToInfo}>
                что внутри
            </Button>
            <Button className={styles.headerButtonDesktop} isSecondary onClick={onScrollToHow}>
                как работает
            </Button>
            <div className={styles.headerButtonWrapper}>
                <Button className={styles.headerButtonMain}>
                    Переходи в бота!
                </Button>
                <Shining className={styles.headerButtonShining}/>
            </div>
            
        </div>
    </Block>
)