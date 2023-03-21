import React from 'react';
import {add, sub, mul, div} from './MathOperation'

export default function Calculator(){
    return(
        <div style={{height:"100vh"}} className="container d-flex justify-content-center align-items-center">
            <ul>
                <li>Sum of two number {add(10, 20)}</li>
                <li>Sub of two number {sub(10, 20)}</li>
                <li>Multiplection of two number {mul(10, 20)}</li>
                <li>Division of two number {div(10, 20)}</li>
            </ul>
        </div>
    );
}