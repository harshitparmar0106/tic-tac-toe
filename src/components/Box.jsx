import React from 'react'
import style from './tictactoe.module.css'
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";

const Box = (props) => {
  let  icon = "";
  if (props.value === "X") icon = <RxCross2 className={style.icon_x}/>
  if (props.value === "O") icon = <FaRegCircle className={style.icon_o}/>
  return (
    <div className={style.square} onClick={props.onClick}>
        <h5>{
        icon}</h5>
     
    </div>
  )
}

export default Box
