import { Button } from '../shared/button';
import styles from './styles.module.scss';

export const InfoBlock = ({wrapperRef}) => {
    return (
        <div className={styles.infoBlock} ref={wrapperRef}>
            <h3 className={styles.infoBlockTitle}>
               <span className='accent-text'>регистрируйся — </span>{'\n'}получи от бота максимум
            </h3>
            <Button className={styles.infoBlockButton}>
                быстрее в бот
            </Button>
        </div>
    )
}