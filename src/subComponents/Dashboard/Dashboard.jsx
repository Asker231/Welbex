import React from 'react'
import style from './dash.module.css'

const Dashboard = ({title,text}) => {
  return (
    <div className={style.dash}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Dashboard