import React from 'react'
import style from './dashboardm.module.css'



const DashboardMobail = ({image,title}) => {
  return (
    <div className={style.dashs}>
        <img src={image} alt="image"/>
        <span>{title}</span>
    </div>
  )
}

export default DashboardMobail