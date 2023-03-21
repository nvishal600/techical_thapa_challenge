import React from 'react';

export default function ImageGallery(props){
    
    return(
        <>
            <div className="container mt-5">
                <h1 className='text-center'>{`Hello, My is ${props.f_name} ${props.l_name}, Welcome to My Image Gallery`}</h1>
                <div className="row d-flex justify-content-between flex-wrap">
                    {props.imagesObj.map((imagesMap, index) => (
                    <div key={index} className="col-md-3 mx-2">
                        <div className="card mt-3" style={{width: "18rem"}}>
                            <img className="card-img-top" src={imagesMap.img} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    )) }
                </div>
            </div>
        </>
    );
}