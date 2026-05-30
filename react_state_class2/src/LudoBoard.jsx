import {useState} from 'react';
import './LudoBoard.css';

function LudoBoard(){

    let [moves,setMoves]=useState({'blue':0,'yellow':0,'green':0,'red':0});
    let [arr,setArr]=useState(["no moves"]);
    
    function updateBlue(){
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+1};

        });
        setArr((prevArr)=>{
            return[...prevArr,"blue moves"];
        });
    };
    
    function updateYellow(){
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1};
        });
    };
    
    function updateGreen(){
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1};
        });
    };
    
    function updateRed(){
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1};
        });
    };
    
    return(
        <div>
            <p>Game Begins</p>
            {arr}
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button id='blue' onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button id='yellow' onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button id='green' onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button id='red' onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}

export default LudoBoard;