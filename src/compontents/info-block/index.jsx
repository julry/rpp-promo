import { useEffect, useState } from 'react';
import { Button } from '../shared/button';
import { DesktopBlock } from './parts/desktop-block';
import styles from './styles.module.scss';
import { MobileBlock } from './parts/mobile-block';

export const InfoBlock = ({wrapperRef}) => {
    const [isDesktop, setIsDesktop] = useState();

    useEffect(() => {
        const resize = () => {
            setIsDesktop(window?.innerWidth > 1100);
        }

        resize();
        window.addEventListener('resize', resize);

        return () => removeEventListener('resize', resize);
    }, []);

    return (
        <div className={styles.infoBlock} ref={wrapperRef}>
            <h3 className={styles.infoBlockTitle}>
               <span className='accent-text'>регистрируйся — </span>{'\n'}получи от бота максимум
            </h3>
            <div className={styles.infoBlockContent}>
               {isDesktop ? <DesktopBlock /> : <MobileBlock />}
            </div>
            <Button wrapperClassName={styles.infoBlockButtonWrapper} className={styles.infoBlockButton}>
                быстрее в бот
            </Button>
        </div>
    )
}