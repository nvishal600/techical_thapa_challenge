import React,{useState} from "react";

export default function CurrentDateTime(props){
  const[time, setTime] = useState(new Date().toLocaleString());
  
  setInterval(() => {
    setTime(new Date().toLocaleString('en-GB'));
  }, 1000);
    return(
        <>
            {/* <div className="container mt-4">
                <h4 contentEditable="true">{`Hello, My Name is  ${props.f_name} ${props.l_name}`}</h4> */}
                {/* <p>Today Date is </p> */}
                <p>Current Date & Time is {time.split(",")[0]} {time.split(",")[1]}</p>
                {/* <img src="https://picsum.photos/200/200" alt="images" />
            </div> */}
        </>
    );
}