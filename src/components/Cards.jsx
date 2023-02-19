import React from 'react';
import Card from './Card';

const Cards = () => {

    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Cards;