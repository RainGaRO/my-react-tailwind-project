import React from 'react';

const Card = () => {
    return (
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-gray-100 duration-300 '>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src='' alt='/'></img>
            <h2 className='text-2xl font-bold text-center py-8'>
                fgfgfdgssg
            </h2>
            <p className='text-center text-4xl font-bold'>
                12345
            </p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Orci varius natoque penatibus</p>
                <p className='py-2 border-b mx-8'>Orci varius natoque penatibus</p>
                <p className='py-2 border-b mx-8'>Orci varius natoque penatibus</p>
            </div>
            <button className='bg-[black] hover:scale-105 duration-300 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                Отправить
            </button>
        </div>
    )
}

export default Card;