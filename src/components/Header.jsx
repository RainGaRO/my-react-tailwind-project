import React from "react";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex justify-center flex-col">
                <p className="text-[green] font-bold p-2">
                    Lorem ipsum dolor sit amet
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Phasellus vitae
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        Pellentesque habitant
                    </p>
                    <Typed className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2" 
                        strings={['Integer', 'Phasellus', 'Lorem']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                nteger iaculis porttitor nunc, in lacinia odio condimentum ut. Etiam porta diam nec laoreet fermentum.
                </p>
                <button className="bg-[#5beb4ecb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                    Жмякни сюда
                </button>
            </div>
        </div>
    )
}

export default Header;