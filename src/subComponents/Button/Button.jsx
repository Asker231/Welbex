import React from 'react'
import style from './button.module.css'

const Button = ({text,event}) => {
  return (
    <button className={style.btn} onClick={()=>event()}>{text}</button>
  )
}

export default Button