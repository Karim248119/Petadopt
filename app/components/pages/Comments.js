"use client"
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { Datacomments } from '@/app/data/Data'
import CarouselCustomNavigation from './Slider'
export default function Comments ()
{
    return (
        <div className="h-[500px]  w-full" id='reviews'>
            <div className=" h-[500px] w-1/5 absolute left-0 bg-black"></div>
            <Carousel
                className=" h-[400px] w-[1200px] absolute left-24 mt-[80px]  overflow-hidden"
                navigation={ Number }
                autoplay={ true }
                autoplayDelay={ 2000 }
                loop={ true }
                prevArrow={ false }
                nextArrow={ false }
            >
                { Datacomments.map( comment => (
                    <CarouselCustomNavigation comment={ comment } />
                ) ) }

            </Carousel>

        </div>

    )
}
