import React from 'react'
import "../card4.css"
export default function Cart4 ( { animal } )
{
    return (
        <div class="card4 rounded-2xl">
            <div class="module-border-wrap1 rounded-2xl number z-10">
                <img src={ animal.img } className=' rounded-2xl'></img>
            </div>
            <div class="card10  capitalize rounded-2xl">
                <h2>{ animal.name }</h2>
                <h5 className=' text-gray-600'>Age- { animal.age }</h5>
                <div class="module-border-wrap ">
                    <button class="  capitalize rounded-full">Adopt</button>
                </div>
            </div>
        </div>
    )
}
