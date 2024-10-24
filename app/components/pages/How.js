"use client";
import {
  faHandHoldingHeart,
  faPaw,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function How() {
  return (
    <div className=" min-h-[60vh] w-full bg-gray-50 md:p-16 p-8">
      <h1 className=" capitalize md:text-6xl text-3xl  font-bold text-center md:mb-16 mb-8">
        how it works?
      </h1>
      <div className=" h-full grid md:grid-cols-3 justify-center items-center gap-20  ">
        <div className=" capitalize w-full h-full flex flex-col items-center ">
          <div className=" mb-8 w-20 h-20 rounded-2xl text-2xl text-white flex items-center justify-center purple">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <h4 className=" mb-3 font-bold text-lg">search</h4>
          <p className=" text-center text-xs text-gray-700 font-semibold">
            simply enter your city to start<br></br> search
          </p>
        </div>
        <div className=" capitalize w-full h-full flex flex-col items-center ">
          <div className=" mb-8 w-20 h-20 rounded-2xl text-2xl  text-white flex items-center justify-center  blue blue-shadow">
            <FontAwesomeIcon icon={faPaw} />
          </div>
          <h4 className=" mb-3 font-bold text-lg">meet</h4>
          <p className=" text-center text-xs text-gray-700 font-semibold">
            Schedule your appointment to meet<br></br> the pet you love.
          </p>
        </div>
        <div className=" capitalize w-full h-full flex flex-col items-center  ">
          <div className=" mb-8 w-20 h-20 rounded-2xl text-2xl  text-white flex items-center justify-center pink">
            <FontAwesomeIcon icon={faHandHoldingHeart} />
          </div>
          <h4 className=" mb-3 font-bold text-lg">adopt</h4>
          <p className=" text-center text-xs text-gray-700 font-semibold">
            finally adopt the pet you<br></br> love
          </p>
        </div>
      </div>
    </div>
  );
}
