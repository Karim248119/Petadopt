"use client"
import React from 'react'
import "../cadRues.css"
import { Button } from '@material-tailwind/react'
export default function CardRues ()
{
    return (
        <div className="card5 rounded-2xl group">
            <div className="face1 rounded-2xl">
                <img className=" rounded-2xl" src='https://images.pexels.com/photos/16577560/pexels-photo-16577560/free-photo-of-cat-lying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ></img>
            </div>
            <div className="face2 capitalize rounded-t-2xl group-hover:rounded-2xl transition-[4s]">
                <h1 className=' rounded-t-2xl text-bvp text-white'>marco reus</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquam praesentium alias eligendi
                    distinctio! Recusandae voluptatibus quam numquam ducimus nemo nostrum, repellendus obcaecati</p>
                <Button className="  capitalize ">Read more</Button>
            </div>
        </div>

    )
}
