import React from 'react'
import style from './main.module.css'
import Button from '../../subComponents/Button/Button'
import {DProp} from '../../subComponents/Dashboard/dashboard.prop.js'
import Dashboard from '../../subComponents/Dashboard/Dashboard'
import {DPropMobile} from '../../subComponents/DashboardMobail/dashm.prop.js'
import DashboardMobail from '../../subComponents/DashboardMobail/DashboardMobail.jsx'
import Line from '../../assets/Linae.svg'

const Main = () => {

    const[dash,setDash]=React.useState(DProp)
    const[dmoba,setDmoba] = React.useState(DPropMobile)

  return (
    <main>
        <div className={style.leftSection}>
            <div className={style.titles}>
                <span id={style.title}>Зарабатывайте больше</span>
                <span id={style.subTitle}>с WELBEX</span>
            </div>
            <p>Развиваем и контролируем продажи за вас</p>
        </div>
        <div className={style.rightSection}>
            <div className={style.rightTitle}>
            Вместе с <span>бесплатной консультацией</span> мы дарим:
            </div>
             <div className={style.dashboards}>
                { dash.map((el,ind)=>{
                return <Dashboard key={ind} text={el.text} title={el.title}/>
                })}
            </div> 
               <div className={style.mobadash}>
                   {
                    dmoba.map((el)=>{
                     return <div className={style.line}><img src={Line} alt="line"/>{el.title}</div>    
                    })
                   }
                </div> 
            <Button text="Получить консультацию" event={()=>{}}/>
        </div>
    </main>
  )
}

export default Main