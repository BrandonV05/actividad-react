import React from 'react'
export default function Card({id, title, image, instructor}) {
    
    return (
    <div className='card tex-center bg-dark'>

        <div className='card-body text-light'>
            <img src={image} alt="" className='card-img-top'></img>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
                Precio: {instructor}
            </p>
            <a href='#!' className='btn btn-outline-secondary rounded-0'>
                Ir al sitio web
            </a>
        </div>
    </div>
     )
}
