import React from "react";

export default function TopNetFlix(props){
    return (
        <>
          <div className="container mt-3 ">
            <h1>{`Hello, My Name is ${props.f_name} ${props.l_name}`}</h1>
            <h5>Top 5, Nextflix Series Name:-</h5>
            <ol>
              <li>Dark</li>
              <li>Stranger Things</li>
              <li>Game of Throne</li>
              <li>Breaking Bad</li>
              <li>Viking</li>
            </ol>
          </div>
        </>
    );
}