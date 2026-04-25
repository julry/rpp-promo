import { useEffect, useState } from 'react';
import { Button } from '../shared/button';
import { DesktopBlock } from './parts/desktop-block';
import styles from './styles.module.scss';

export const InfoBlock = ({wrapperRef}) => {
    const [isDesktop, setIsDesktop] = useState();

    useEffect(() => {
        const resize = () => {
            console.log(window.innerWidth);
            setIsDesktop(window?.innerWidth > 1100);
        }

        resize();
        window.addEventListener('resize', resize);

        return () => removeEventListener('resize', resize);
    }, []);

    console.log(isDesktop);

    return (
        <div className={styles.infoBlock} ref={wrapperRef}>
            <h3 className={styles.infoBlockTitle}>
               <span className='accent-text'>регистрируйся — </span>{'\n'}получи от бота максимум
            </h3>
            <div className={styles.infoBlockContent}>
               {isDesktop ? <DesktopBlock /> : <></>}
            </div>
            <Button className={styles.infoBlockButton}>
                быстрее в бот
            </Button>
        </div>
    )
}