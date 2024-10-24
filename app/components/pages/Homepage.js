"use client";
import { faCode, faDog, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";
import React from "react";
import "../../nav.css";
import { Link } from "react-scroll/modules";
export default function Homepage() {
  return (
    <div className="md:grid md:grid-cols-2 w-full md:h-[95vh] h-[40vh] bg-white capitalize p-10 md:p-0">
      <div className=" h-full w-full md:p-32 flex flex-col justify-start md:justify-around md:ml-24 mt-20 md:mt-0">
        <div className=" md:flex items-center hidden ">
          <span className="bg-bvp rounded-full h-8 w-8 flex justify-center items-center mr-1">
            <FontAwesomeIcon
              icon={faPaw}
              color="white"
              className="text-bvp h-5 w-5"
            />
          </span>
          <h2 className=" font-bold text-bvp text-2xl ">petadopt</h2>
        </div>
        <h6 className=" md:text-8xl text-3xl uppercase">
          Every pet deserves a home
        </h6>
        <p className=" md:text-base text-xs text-gray-700 tracking-wider mb-5">
          over thousand of rescued pet needs a proper <br></br> home and second
          chance
        </p>
        <Button className="bg-bvp w-32">
          <Link
            activeClass="active"
            to="adopt"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Adopt Now
          </Link>
        </Button>
      </div>
      <div className="relative  hidden md:block ">
        <div className="h-[100%]  flex rounded-br-[50px] relative">
          <div className="h-[100%] bg-bvp w-[60%] rounded-br-[50px]  ">
            <ul class=" nav2 upper-case flex justify-center px-24 py-6 text-sm gap-5 text-white">
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="reviews"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <img
              className=" absolute bottom-0 right-[40%] w-[600px] "
              src="../../imgs/main-removebg-preview.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
