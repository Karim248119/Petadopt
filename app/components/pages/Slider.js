"use client";

export default function CarouselCustomNavigation({ comment }) {
  return (
    <div className=" w-full h-full flex justify-start md:flex-row flex-col ">
      <div className="md:h-full md:w-[300px] ">
        <img
          src={comment.img}
          alt="image 3"
          className=" object-cover md:h-[85%] w-full aspect-square"
        />
        <p className="md:text-white font-bold capitalize mt-3 ml-3">
          {comment.email}
        </p>
      </div>

      <div className=" md:h-[85%] p-5 flex justify-center items-center  ">
        <div className=" flex flex-col -mb-5">
          <span className=" md:text-8xl text-4xl text-bvp self-start italic w-14 mb-5">
            "
          </span>
          <h6 className=" capitalize md:text-6xl text-xl  -mt-10 md:ml-10 md:mb-5">
            {comment.name}
          </h6>
          <p className="  md:ml-10 mb-3 md:w-[800px] text-xs md:text-base">
            {comment.body}
          </p>
          <span className="md:text-8xl text-4xl text-bvp self-end italic w-12">
            "
          </span>
        </div>
      </div>
    </div>
  );
}
