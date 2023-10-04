"use client"
import { faFacebook, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer ()
{
    return (
        <div className='h-[100vh] w-full flex flex-col bg-gray-50 ' id="contact">
            <div className='flex flex-col items-center pt-16'>
                <h1 className=' capitalize font-bold text-7xl mb-5'>Get our newsletter</h1>
                <h2 className=' capitalize font-bold text-lg mb-8'>to join the worldwide community</h2>
                <div className='flex w-[700px] p-5 shadow bg-white '>
                    <input placeholder='Type Your Email Adress' type='e-mail'
                        className='rounded-none  focus:border-none focus:outline-none bg-transparents w-[450px] p-5'
                    >
                    </input>
                    <button className='bg-bvp text-white m p-5 px-7 ml-16 tracking-wider'>Send Now</button>
                </div>
            </div>
            <div className=' grid grid-cols-6  h-[] w-full   px-32'>
                <div className='h-full w-full col-span-3 flex flex-col ml-5 justify-center  gap-5 tracking-wider'>
                    <h1 className=' font-bold text-5xl'>Petadopt</h1>
                    <p>Copyright © 2023 K.A.H All rights reserved</p>
                    <div className='flex gap-5 text-2xl'>
                        <FontAwesomeIcon icon={ faFacebookF } className='pink-hv' />
                        <FontAwesomeIcon icon={ faTwitter } className='blue-hv' />
                        <FontAwesomeIcon icon={ faInstagram } className='purple-hv' />
                    </div>
                </div>
                <div className='h-full w-full  tracking-wider flex flex-col mt-10 justify-center  gap-5 capitalize'>
                    <h2 className=' font-bold text-xl'>servises</h2>
                    <a href='#' className='bvp-hv'>home</a>
                    <a href='#' className='bvp-hv'>product</a>
                    <a href='#' className='bvp-hv'>category</a>
                    <a href='#' className='bvp-hv'>about</a>
                </div>
                <div className='h-full w-full tracking-wider flex flex-col mt-10 justify-center  gap-5 capitalize'>
                    <h2 className=' font-bold text-xl'>about</h2>
                    <a href='#' className='bvp-hv'>our story</a>
                    <a href='#' className='bvp-hv'>benifits</a>
                    <a href='#' className='bvp-hv'>team</a>
                    <a href='#' className='bvp-hv'>career</a>
                </div>
                <div className='h-full w-full'></div>
            </div>
        </div>
    )
}
