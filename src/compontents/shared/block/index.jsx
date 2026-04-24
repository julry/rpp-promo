import cn from 'classnames';
import styles from './styles.module.scss';
import { Shining } from '../shining';

export const Block = ({className, wrapperClassname, shiningClassName, children}) => (
    <div className={cn(styles.block, wrapperClassname)}>
        <div className={cn(styles.blockContent, className)}>
            {children}
        </div>
        <Shining className={cn(styles.blockShining, shiningClassName)} />
    </div>
)

