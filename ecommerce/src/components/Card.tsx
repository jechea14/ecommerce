import React from 'react'
import {Product} from '../interfaces/index'

type CardProps = {
    item: Product
}

export const Card: React.FC<CardProps> = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <h1>${item.price.toFixed(2)}</h1>
            <img src={item.image[0]}/>
        </div>
    )
}