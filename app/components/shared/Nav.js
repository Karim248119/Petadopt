"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 items-center md:gap-6  ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal ml-5"
      >
        <a href="#about" className="flex items-center">
          ABOUT
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal  ml-5"
      >
        <a href="#reviews" className="flex items-center">
          REVIEWS
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal  ml-5"
      >
        <a href="#contact" className="flex items-center ">
          CONTACT
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" w-full md:hidden fixed top-0 left-0 z-50 ">
      <Navbar className="sticky top-0 z-10 max-w-full rounded-none py-2 px-4 md:px-8 md:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <div className="flex items-center">
              <span className="bg-bvp rounded-full h-5 w-5 flex justify-center items-center mr-1">
                <FontAwesomeIcon
                  icon={faPaw}
                  color="white"
                  className="text-bvp h-3 w-3"
                />
              </span>
              <h2 className=" font-bold text-bvp text-xl ">pet store</h2>
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden md:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden md:inline-block"
            >
              <span>Buy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {/* <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 bg-bvp"
          >
            <span>Buy Now</span>
          </Button> */}
        </MobileNav>
      </Navbar>
    </div>
  );
}
