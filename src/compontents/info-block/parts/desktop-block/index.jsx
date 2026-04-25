import styles from './styles.module.scss';
import { cards } from '../../constants';
import { Card } from '../card';

export const DesktopBlock = () => (
    <div className={styles.infoBlockDesktop}>
        {cards.map((card) => (
            <Card key={card.id} className={styles.infoBlockDesktopCard} {...card} />
        ))}
    </div>
)