import React from 'react';

const News = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Quisque non faucibus sapien
                    </h1>
                    <p className=''>
                        Curabitur sed faucibus augue
                    </p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Введите email'></input>
                        <button className='bg-[white] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-[black]'>
                            Подписаться
                        </button>
                    </div>
                    <p>Pellentesque tincidunt <span className='text-[green]'>lacinia vehicula</span></p>
                </div>
            </div>
        </div>
    )
}

export default News;