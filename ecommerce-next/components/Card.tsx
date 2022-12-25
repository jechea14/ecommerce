import React from 'react'
import {Product} from '../interfaces/index'
import Image from 'next/image'

type CardProps = {
    item: Product
}

export const Card: React.FC<CardProps> = ({item}) => {
    return (
        <div className='border rounded-lg p-4 bg-white'>
            <Image src={item.image[0]} alt={item.name} className='rounded-tl-lg rounded-tr-lg'/>
            <div className='flex flex-col justify-between'>
                <h1>{item.name}</h1>
                <strong className='text-lg'>${item.price.toFixed(2)}</strong>
            </div>
        </div>
    )
}