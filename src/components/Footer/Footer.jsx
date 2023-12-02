import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={style.left}>
            <h3>О компании</h3>
            <span>Партнёрская программа</span>
            <span>Партнёрская программа</span>
      </div>
      <div className={style.middle}>
           <div className={style.middleLeft}>
           <h3>Меню</h3>
            <span>Расчёт стоимости</span>
            <span>Услуги</span>
            <span>Виджеты</span>
            <span>Интеграции</span>
            <span>Наши клиенты</span>
           </div>
           <div className={style.middleRight}>
            <span id={style.mobail}>Благодарность клиентов</span>
            <span>Кейсы</span>
            <span>Благодарственные письма</span>
            <span>Сертификаты</span>
            <span>Блог на Youtube</span>
            <span>Вопрос / Ответ</span>
           </div>
      </div>
      <div className={style.right}>
           <h3>Контакты</h3>
           <a href="#">+7 555 555-55-55</a>
           <p>Москва, Путевой проезд 3с1, к 902</p>
      </div>
    </footer>
  )
}

export default Footer