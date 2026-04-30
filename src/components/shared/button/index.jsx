import cn from 'classnames';
import styles from './styles.module.scss';
import {Shining} from '../shining';

export const Button = ({className, wrapperClassName, children, isSecondary, ...props}) => {
    if (isSecondary) {
        return (
            <button {...props} className={cn(styles.button, className, styles.buttonSecondary)}>
                {children}
            </button>
        )
    }

    return (
        <div className={cn(styles.buttonShiningWrapper, wrapperClassName)}>
            <button {...props} className={cn(styles.button, className)}>
                {children}
            </button>
            <Shining className={styles.buttonShining}/>
        </div>
    )
}