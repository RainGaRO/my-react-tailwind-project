import React from 'react';

const Content = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src='{}' alt='/'></img>
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-[green] font-bold'>
                        Quisque non faucibus sapien
                    </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Curabitur sed faucibus augue
                    </h1>
                    <p className=''>
                        Pellentesque volutpat urna nibh, at ultricies augue fringilla eget. 
                        Sed hendrerit vel massa malesuada suscipit. Mauris blandit volutpat 
                        bibendum. Nullam iaculis, neque et pretium mollis, 
                        purus sapien eleifend dolor, non eleifend nulla arcu vitae tellus. 
                    </p>
                    <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[white]'>
                        Начать
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Content;