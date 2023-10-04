import React from 'react'

export default function Supporters ()
{
    return (
        <div className=' bg-gray-50  p-16'>

            <h1 className=' capitalize text-6xl font-bold text-center mb-10'> some of our supporters</h1>
            <div className=' grid grid-cols-5 justify-center items-center  gap-24'>
                <a href='https://thewaltdisneycompany.com/redirect/'>
                    <img className=' grayscale' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/21st_Century_Fox_logo.svg/2560px-21st_Century_Fox_logo.svg.png'></img>
                </a>
                <a href='https://ribsandburgers.com/au/'>
                    <img className=' grayscale' src='https://ribsandburgers.com/za/wp-content/uploads/2019/01/logo-blu.png'></img>
                </a>
                <a href='https://www.weightwatchers.com/us/'>
                    <img className=' grayscale' src='https://logos-world.net/wp-content/uploads/2021/04/Weight-Watchers-Logo.png'></img>
                </a>
                <a href='https://www.oracle.com/'>
                    <img className=' grayscale' src='https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png'></img>
                </a>
                <a href='https://www.ogilvy.com/'>
                    <img className=' grayscale' src='https://upload.wikimedia.org/wikipedia/commons/e/ec/Ogilvy_Logo.png'></img>
                </a>
            </div>
        </div>
    )
}
