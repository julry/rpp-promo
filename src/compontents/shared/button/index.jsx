import cn from 'classnames';
import styles from './styles.module.scss';

export const Button = ({className, children, isSecondary, ...props}) => (
    <button {...props} className={cn(styles.button, className, {
        [styles.buttonSecondary] : isSecondary
    })}>
        {children}
    </button>
)