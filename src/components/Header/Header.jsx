import React from 'react'
import style from './header.module.css'
import  logo1 from '../../assets/Logo/Logo1.svg'
import  logo2 from '../../assets/Logo/Logo2.svg'
import telegramIcon from '../../assets/networkIcons/TelegramIcon.svg'
import viberIcon from '../../assets/networkIcons/Viber.svg'
import whatsappIcon from '../../assets/networkIcons/Whatsapp.svg'



const Header = ({titles}) =>{
  return (
    <header>
        <div className={style.left}>
        <div className={style.wrapLogo}>
            <div className={style.logo}>
                <img src={logo1} alt="logo1"/>
                <img src={logo2} alt="logo2"/>
            </div>
            <div className={style.subLogo}>
            крупный интегратор CRM в Росcии и ещё 8 странах 
            </div>
        </div>
        <div className={style.nav}>
        {titles.map((el,ind)=><a href='#' key={ind}>{el.nav}</a>)}
        </div>
        </div>
        <div className={style.right}>
               <a href="#">+7 555 555-55-55</a>
               <div className={style.contacts}>
                 <img src={telegramIcon} alt="telegram" />
                 <img src={viberIcon}    alt="viber"    />
                 <img src={whatsappIcon} alt="whatsapp" />   
                </div> 
        </div>
    </header>
  )
}

export default Header