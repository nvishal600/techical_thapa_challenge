import React from 'react'
import { useState } from 'react';

const SloatMachine = (props) => {
    let a = props.a;
    let b = props.b;
    let c = props.c;

    if(a===b && b===c){
        return(
        <div className="slot_inner">
            <h1>{a} {b} {c}</h1>
            <h1>This is Maching</h1>
            <hr />
        </div>
        );
    }else{
        return(
        <div className="slot_inner">
            <h1>{a} {b} {c}</h1>
            <h1>This is Not Maching</h1>
            <hr />
        </div>
        );
    }
}
export default function SlotMachineGame() {
    const [count, setCount] = useState(4);
    console.log(setCount);
    // const arrayName = ["vishal", "vivek", "nikhil"];
    // let [name1, name2, ...name] = arrayName;
    // console.log(name2);
  return (
    <>
        <div className="text-center" >
            <h3 className='py-3'>🎰 Welcome To <span style={{fontWeight:"bold"}}>Sloat Machine</span>🎰 </h3>
            <div className="sloat_machine px-3 d-flex justify-content-center" style={{backGround:"red",  background:"lightgrey"}}>
                <div style={{width:"40%", border:"3px solid grey"}}>
                    <SloatMachine a={'😄'}  b={'😄'} c={'😄'}/>
                    <SloatMachine a={'😄'}  b={'👼'} c={'😄'}/>
                    <SloatMachine a={'😄'}  b={'😄'} c={'😆'}/>
                </div>
            </div>
        </div>
    </>
  )
}
