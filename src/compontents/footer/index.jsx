import { Block } from '../shared/block';
import logo from '../../assets/images/logo.svg';
import styles from './styles.module.scss';
import {Button} from '../shared/button/index';
import { Shining } from '../shared/shining';

export const Footer = () => (
    <div className={styles.footer}>
        <Block className={styles.footerBlock} shiningClassName={styles.footerShining}>
        </Block>
    </div>
    
)