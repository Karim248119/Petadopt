"use client"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export default function TopButton ()
{
    const [ backToTop, setBackToTop ] = useState( false )
    useEffect( () =>
    {
        window.addEventListener( "scroll", () =>
        {
            if ( window.scrollY > 900 )
            {
                setBackToTop( true )
            }
            else
            {
                setBackToTop( false )
            }
        } )
    }, [] )
    const scrollUp = () =>
    {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        } )
    }
    return (
        <div>
            { backToTop && <button onClick={ scrollUp } className='w-10 h-10 bg-bvp rounded-full text-white fixed bottom-10 right-10'>
                <FontAwesomeIcon icon={ faChevronUp } />
            </button> }</div>
    )
}
