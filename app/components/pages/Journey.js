import React from "react";

export default function Journey() {
  return (
    <div
      className="md:px-24 px-8 pt-20 pb-5 md:text-center  bg-white"
      id="about"
    >
      <h1 className=" capitalize md:text-6xl text-3xl  font-bold text-center mb-10">
        your pet adoption journey with us
      </h1>
      <div className=" grid md:grid-cols-3  justify-center items-center">
        <div className="flex flex-col justify-center items-end">
          <div className=" flex justify-center items-center md:mb-28 md:mt-20 my-5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1130/1130981.png"
              className=" h-9 w-auto mr-5"
            ></img>
            <div className="">
              <h1 className=" font-bold text-l md:mb-2">Sreach Pet</h1>
              <p className=" text-gray-600 md:text-xs text-[8px]  font-bold">
                Adopt dog or cat that is right for you. <br></br>
                simply enter your city above to start <br></br> your search.
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10754/10754104.png"
              className=" h-10 w-auto mr-5"
            ></img>
            <div className="">
              <h1 className=" font-bold text-l md:mb-2">Free Pet Consultion</h1>
              <p className=" text-gray-600 md:text-xs text-[8px]  font-bold">
                We will help your pet to sattle down in <br></br>
                its new hone, once you compelete the <br></br> adoption journey.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 justify-self-center">
          <div className=" relative  md:h-[340px] h-[150px] aspect-square bg-grad md:block rounded-full">
            <div className="md:h-[300px] h-[130px] bg-bvp aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <img
              className="md:w-[300px] w-[150px] md:bottom-[20px] md:left-[20px] bottom-[11px] absolute rounded-b-full"
              src="https://static.wixstatic.com/media/50ee2f_fe225afbf80547638b18e764cde6a28c~mv2.png/v1/crop/x_109,y_0,w_657,h_800/fill/w_616,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/50ee2f_fe225afbf80547638b18e764cde6a28c~mv2.png"
            ></img>
          </div>
        </div>
        <div className=" flex justify-center items-center  justify-self-start">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6915/6915434.png"
            className=" h-9 w-auto mr-5"
          ></img>
          <div className="">
            <h1 className=" font-bold text-l md:mb-2">Adopt Love</h1>
            <p className=" text-gray-600 md:text-xs text-[8px]  font-bold">
              The rescue or pet parent will walk you <br></br>
              through their adoption proccess. once <br></br> you compelete your
              adoption journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
