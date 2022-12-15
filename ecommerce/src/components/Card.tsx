import React from 'react'

type CardProps = {
    name: string
    price: number
    image: string
}

export const Card = ({name, price, image}: CardProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>${price.toFixed(2)}</h1>
            <img src={image}/>
        </div>
    )
}