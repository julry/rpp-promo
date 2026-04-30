import cn from "classnames";
import { Block } from "../../../shared/block";
import styles from './styles.module.scss';

export const Card = ({id, src, title, text, className}) => (
    <Block className={styles.infoBlockCard} wrapperClassname={cn(styles.infoBlockCardWrapper, className)}>
        <div className={styles.infoBlockCardUpperBlock}>
            <div className={styles.infoBlockCardTitleWrapper}>
                <p>{title}</p>
            </div>
        </div>
        <p className={styles.infoBlockCardText}>
            {text}
        </p>
        <img className={cn(styles.infoBlockCardImage, {
            [styles.infoBlockCardGift]: id === 'prizes',
        })}  src={src} alt=""/>
    </Block>
)