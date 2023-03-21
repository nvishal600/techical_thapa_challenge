import React from 'react';
import { useState } from 'react';

export default function Greeting(){
    const [greetingMsg, setGreetingMsg] = useState('');

    setInterval(function(){
        let date = new Date(2023, 0, 25, 10);
        let time = date.getHours();
        if(time >= 0 && time < 11){
            setGreetingMsg({msg:"Good Morning", textColor:{color:"green"}});
        }else if(time > 11 && time <= 19){
            setGreetingMsg({msg:"Good Afternoon", textColor:{color:"Orange"}});
        }else if(time > 19){
            setGreetingMsg({msg:"Good Night", textColor:{color:"black"}});
        }
    }, 5000);
    return(
        <div style={{height:"100vh", backgroundColor:"skyblue"}} className=" d-flex justify-content-center d-flex align-items-center">
            <div style={{backgroundColor:"white"}} className='border border-dark p-2'>
                <h1 style={{color:"red"}}>Hello Sir, <span style={greetingMsg.textColor}>{greetingMsg.msg}</span></h1>
            </div>
        </div>
    );
}

function Myname(){
    return(
        <h1>vishal</h1>
    );
}

export {Myname};