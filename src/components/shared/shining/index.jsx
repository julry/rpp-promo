import cn from 'classnames';
import styles from './styles.module.scss';

export const Shining = ({ className }) => (
    <>
        <div className={cn(styles.shining, className)} style={{filter: `url(#noiseFilter)`}}/>
        
    </>
)