// import React from 'react'

import { BallTriangle } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 z-20 absolute">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader