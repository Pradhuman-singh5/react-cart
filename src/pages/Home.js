import React from 'react'
import Product from '../components/Product'

const Home = () => {
    return (
        <>
        <div className='hero py-16 mx-8'>
            <div className='container mx-auto flex item-center justify-between'>
                <div className=' mx-4 w-1/2'>
                    <h6 className='text-lg'><em>Are You A Fan?</em></h6>
                    <h1 className='text-3xl md:text-6xl font-bold'>Don't wait !</h1>
                    <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-blue-400 
                    hover:bg-blue-500">Order Now</button>
                </div>
                <div className="w-1/2">
                    <img  className=" mx-4 max-h-96" src="/images/apple.png" alt="Apple" />
                </div>
            </div>
        </div>
        <div className="pd-24">
            <Product />
        </div>
        </>
    )
}

export default Home
