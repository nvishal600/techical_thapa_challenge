import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Delete';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

export default function IncrementDecrement() {
    const [count, setCount] = useState(0);

    const incrementHandle = () => {
        setCount(count+1);
    }

    const decrementHandle = () => {
        if(count > 0){
            setCount(count-1);
        }else{
            alert("Sorry, Zero Limit Reached");
        }
    }

  return (
    <>
        <div className="container-fluid bg-info py-5 d-flex justify-content-center" style={{height: "100vh"}} >
            <div className='box text-center bg-light my-5 rounded py-5' style={{width: "30%", boxShadow: "-15px -8px 61px -17px rgba(0,0,0,0.62)" }}>
                <h1 className='my-5' style={{ fontSize: "60px", textShadow: "6px 6px 11px #000"}}>{count}</h1>
                <div  className='plusMinus d-flex justify-content-around'>
                    <Tooltip title="Add">
                        <Button variant="outlined" onClick={incrementHandle}>
                            <AddIcon style={{ fontSize: 35 }}/>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button variant="outlined" color="error" onClick={decrementHandle}>
                            <RemoveIcon style={{ fontSize: 35 }}/>
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    </>
  )
}
