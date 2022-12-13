import React from 'react'

const mainPage = (props) => {
    return (
        <>
            <div className='flex justify-center mt-10'>
                <h1 className='text-xl font-bold text-zinc-500'>Weather App</h1>
            </div>
            <div className="cont max-w-xs font-semibold m-auto mt-10  border-solid">
                <h3>{props.city[0].toUpperCase() + props.city.substring(1)}</h3>
                <h2 className='text-4xl text-center'>{Math.ceil(props.temp)}°</h2>
                <h3 className='text-center mt-4'>{props.weather}</h3>
                <div className="flex justify-center mt-5 ">
                    <img className='w-16' src={props.icon} alt="" />
                </div>
            </div>
        </>
    )
}

export default mainPage