import React from 'react'

export default function NetflixShowCard(props) {
   
  return (
    <>
        <div className="card my-4 mx-4" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.data.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.data.sname}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.data.title}</h6>
                <p className="card-text">{props.data.description}</p>
                <a href={props.data.link} target="_blank" className="btn btn-primary">Watch</a>
            </div>
        </div>
    </>
  )
}
