import prize from '../../assets/images/giftHigh.webp';
import speaker from '../../assets/images/speaker.webp';
import lamp from '../../assets/images/lamp.webp';
import books from '../../assets/images/books.webp';
import gifts from '../../assets/images/severalGifts.webp';
import computer from '../../assets/images/computer.webp';

import styles from './styles.module.scss';

export const cards = [
    {
        id: 'prizes',
        title: 'регулярные призы',
        imgClassName: styles.infoBlockGift,
        text: (
            <>
                разыгрываем сертификаты в <span className="accent-text">Додо Пиццу, Ozon и Правое полушарие Интроверта</span> каждый месяц.{' '}
                <span className="accent-text">Яндекс Станцию Миди</span> за приглашение друзей и мерч за прохождение игр.{' '}
                а в финальном розыгрыше — <span className="accent-text">Сертификат в Яндекс Афишу</span> 
            </>
        ),
        src: prize,
    },
    {
        id: 'job',
        title: 'вакансии по специальности',
        text: 'предложения от компаний, которым нужны начинающие специалистыбез опыта. например, от «Алабуга Девелопмент», Билайна, ВТБ, Лемана про и FutureToday',
        src: speaker,
    },
    {
        id: 'advices',
        title: 'советы по поиску работы',
        text: 'как составить резюме, если не работал ни дня, что отвечать на собеседовании и какие навыки качать прямо сейчас, чтобы попасть в классную компанию',
        src: lamp,
    },
    {
        id: 'info',
        title: 'полезная инфа\nот работодателей',
        text: 'что ищут в новичках, как попастьна работу и чем ты на самом деле будешь на ней заниматься. рассказываем про 20 специальностей',
        src: books,
    },
    {
        id: 'initialPrizes',
        title: 'мгновенные подарки',
        text: (
            <>
                <span className="accent-text">скидка 500 руб.</span> на заказ еды из ресторанов от ЧИБИС,{' '}
                <span className="accent-text">бесплатные онлайн‑тренировки</span>{' '}
                в ALEX FITNESS, <span className="accent-text">скидка 30%</span> на любую программу от школы английского языка UFirst,{' '}
                <span className="accent-text">бесплатное занятие</span> по вокалу/барабанам/гитаре от Не Школы
            </>
        ),
        src: gifts,
    },
     {
        id: 'interact',
        title: 'топовые интерактивы',
        text: 'задания, которые подготовят к работе по профессии, и баллы за их прохождение — увеличат шансы в розыгрыше призов',
        src: computer,
    },
]