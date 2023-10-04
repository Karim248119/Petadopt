"use client"

import { Datacomments } from "@/app/data/Data";
export default function CarouselCustomNavigation ( { comment } )
{
    return (

        <div className=" w-full h-full  flex flex-row" key={ comment.id }>
            <div className="h-full w-[300px]">
                <img
                    src={ comment.img }
                    alt="image 3"
                    className=" object-cover h-[85%]"
                />
                <p className="  text-white font-bold capitalize mt-3 ">{ comment.email }</p>
            </div>

            <diV className=" h-[85%] p-5 flex justify-center items-center ">
                <div className=" flex flex-col -mb-5">
                    <span className=" text-8xl text-bvp self-start italic w-14">"</span>
                    <h6 className=" capitalize text-6xl -mt-10 ml-10 mb-5">{ comment.name }</h6>
                    <p className="  ml-10 mb-3  w-[800px]"> { comment.body }</p>
                    <span className="text-8xl text-bvp self-end italic w-12"> "</span>
                </div>
            </diV>

        </div>
    );
}