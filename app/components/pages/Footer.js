"use client";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <div
      className="md:pb-10 pb-5 w-full flex flex-col bg-gray-50 "
      id="contact"
    >
      <div className="flex flex-col items-center pt-16">
        <h1 className=" capitalize font-bold md:text-6xl text-3xl text-center mb-5">
          Get our newsletter
        </h1>
        <h2 className=" capitalize font-bold text-lg mb-8">
          to join the worldwide community
        </h2>
        <div className="flex md:w-1/2 w-[90%] md:p-5 p-2 shadow md:text-base text-xs  bg-white ">
          <input
            placeholder="Type Your Email Adress"
            type="e-mail"
            className="rounded-none focus:border-none focus:outline-none bg-transparents flex-1 md:p-5 p-1"
          ></input>
          <button className="bg-bvp text-white md:p-5 md:px-7 px-2 md:ml-16 tracking-wider ">
            Send Now
          </button>
        </div>
      </div>
      <div className=" grid md:grid-cols-6 grid-cols-5 md:px-32 mt-10">
        <div className="h-full w-full col-span-3 flex flex-col ml-5 justify-center md:gap-5 gap-2 tracking-wider">
          <h1 className=" font-bold md:text-5xl">Petadopt</h1>
          <p className="text-xs md:text-base">
            Copyright © 2023 K.A.H All rights reserved
          </p>
          <div className="flex gap-5 md:text-2xl text-xs">
            <FontAwesomeIcon icon={faFacebookF} className="pink-hv" />
            <FontAwesomeIcon icon={faTwitter} className="blue-hv" />
            <FontAwesomeIcon icon={faInstagram} className="purple-hv" />
          </div>
        </div>
        <div className="h-full w-full md:text-base text-xs tracking-wider flex flex-col  justify-center gap-1 md:gap-5 capitalize">
          <h2 className=" font-bold md:text-xl">servises</h2>
          <a href="#" className="bvp-hv">
            home
          </a>
          <a href="#" className="bvp-hv">
            product
          </a>
          <a href="#" className="bvp-hv">
            category
          </a>
          <a href="#" className="bvp-hv">
            about
          </a>
        </div>
        <div className="h-full w-full md:text-base text-xs tracking-wider flex flex-col  justify-center gap-1 md:gap-5 capitalize">
          <h2 className=" font-bold md:text-xl">about</h2>
          <a href="#" className="bvp-hv">
            our story
          </a>
          <a href="#" className="bvp-hv">
            benifits
          </a>
          <a href="#" className="bvp-hv">
            team
          </a>
          <a href="#" className="bvp-hv">
            career
          </a>
        </div>
        <div className="h-full w-full"></div>
      </div>
    </div>
  );
}
