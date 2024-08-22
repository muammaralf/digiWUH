import React from 'react'

const BackButton = (props) => {
    return (
        <div className=" text-xl font-semibold flex w-50 sm:w-52 sm:text-2xl md:w-64 md:text-3xl">
            <a href="#">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                >
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
            </a>
            <p className="">{props.text} </p>
        </div>
    )
}

export default BackButton