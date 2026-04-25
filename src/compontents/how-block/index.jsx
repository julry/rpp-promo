import {useInView} from 'framer-motion';
import { Button } from '../shared/button';
import styles from './styles.module.scss';

export const HowBlock = ({wrapperRef}) => {
    const isParentInView = useInView(wrapperRef, { 
        amount: 0.7,
    });

    return (
        <div className={styles.infoBlock} ref={wrapperRef}>
            <h3 className={styles.infoBlockTitle}>
                как это работает?{'\n'}
               <span className='accent-text'>изи!</span>
            </h3>
            <div>

            </div>
            <Button className={styles.infoBlockButton}>
                кайф я в деле
            </Button>
        </div>
    )
}