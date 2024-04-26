import React from 'react'
import style from './tictactoe.module.css'
import bcg from '../components/images/bcg.jpg'
import { useState } from 'react'
import Box from './Box'

import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";



const Tictactoe = () => {
    const [state,setState] = useState(Array(9).fill(null));
    const [isXturn , setisXturn] = useState(true);
    
    const checkwinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        
        let count_x = 0;
        let count_O = 0;
        
        for(let logic of winnerLogic) {
            const [a,b,c] = logic;
            if( state[a] !== null && state[a] === state[b] && state[b] === state[c]){
                
                if(state[a] == "X")
                count_x++;
             else
              count_O++;
                return state[a];
            }
        }
        return false;
    }
    const isWinner = checkwinner();
    const handleClick = (index)=>{
        const copystate = [...state];
        copystate[index] = isXturn ? "X" : "O";
        setState(copystate)
        setisXturn(!isXturn)
    };
    const handlereset = () =>{
        setState(Array(9).fill(null));
    };

    return (
    <>
        <div className={style.container}
        style = {{ backgroundImage: `url(${bcg})` } }>
            <h1>Tic-Tac-Toe Game with React</h1>
            <div className={style.board}>
            

                {isWinner ? (<div className={style .winner}>{isWinner} Won the Game
                      
                    <button className = {style.btn} onClick={handlereset}>Restart</button> 
                
                </div>): (
                
               
         
                <> 
                <div className= {style.row1} >
                    <Box  onClick={()=>handleClick(0)} value = {state[0]}/>
                    <Box onClick={()=>handleClick(1)} value = {state[1]}/>
                    <Box   onClick={()=>handleClick(2)} value = {state[2]}/>   
                </div>
                <div className= {style.row2}>
                    <Box  onClick={()=>handleClick(3)}  value = {state[3]} />
                    <Box onClick={()=>handleClick(4)} value = {state[4]}/>
                    <Box onClick={()=>handleClick(5)} value = {state[5]}/>
                </div>
                <div className= {style.row3}>
                    <Box onClick={()=>handleClick(6)} value = {state[6]}/>
                    <Box  onClick={()=>handleClick(7)}  value = {state[7]}/>
                    <Box  onClick={()=>handleClick(8)} value = {state[8]}/>
                </div>
                </>
         )}
            </div>
        </div>
      
    </>
  )
}

export default Tictactoe
