import React from 'react';
import TopNetFlixShowArray from './TopNetflixShowArray';
import NetflixShowCard from './NetflixShowCard';

export default function TopNetFlixShow(){
    const NetflixShowCardArray = TopNetFlixShowArray.map((val, index) => {
        return(<NetflixShowCard data={val} key={index} />);
    });
    
    return(
        <>
            <div className="container">
                <h1 className='mt-4'>Top Netflix Series List</h1>
                <div className="d-flex justify-content-left flex-wrap" style={{}}>
                    {NetflixShowCardArray}
                    {NetflixShowCardArray}
                </div>
            </div>
        </>
    );
}