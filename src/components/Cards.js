import React from 'react';
import Card from './Card';
import image1 from "../assets/ferrari.jpg"
import image2 from "../assets/lamborghini.jpg"
import image3 from "../assets/porsche.jpg"

const Cards = [
    {
        id: 1,
        title: 'Ferrari F50 1997',
        image: image1,
        
        instructor: "$130,000,000 pesos"
    },
    {
        id:2,
        title: 'Lamborghini Diablo GTR 2023',
        image: image2,
        instructor: "$23,400,000 pesos"
    },
    {
        id: 3,
        title: 'Porsche 911 GTS3 2021',
        image: image3,
        instructor: "3,460,000 pesos"
    }
    ]

   export default function cards() {
        console.log()
        return (
            <div className='container d-flex justify-content-center align-items-center'>
                <div className="row">
                    {
                        Cards.map(c => (
                            <div className="col-md-4" key={Cards.id}>
                                <Card
                                key= {c.id}
                                id= {c.id}
                                title= {c.title}
                                image= {c.image}
                                instructor= {c.instructor}
                            />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }