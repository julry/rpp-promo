import { Block } from '../shared/block';
import logo from '../../assets/images/logo.svg';
import styles from './styles.module.scss';
import {Button} from '../shared/button/index';
import {openBot} from '../../utils/openBot';

export const Header = ({ onScrollToInfo, onScrollToHow }) => (
    <div className={styles.headerWrapper}>
         <Block className={styles.header}>
            <img className={styles.headerLogo} src={logo} alt="Работа по профессии by FutureToday" />
            <div className={styles.headerButtons}>
                <Button className={styles.headerButtonDesktop} isSecondary onClick={onScrollToInfo}>
                    что внутри
                </Button>
                <Button className={styles.headerButtonDesktop} isSecondary onClick={onScrollToHow}>
                    как работает
                </Button>
                <Button className={styles.headerButtonMain} onClick={openBot}>
                    <span className={styles.headerDesktopText}>Переходи{' '}</span>в бот<span className={styles.headerDesktopText}>а!</span>
                </Button>
            </div>
        </Block>
    </div>
)