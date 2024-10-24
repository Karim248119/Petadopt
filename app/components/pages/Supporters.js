import React from "react";

export default function Supporters() {
  return (
    <div className=" bg-gray-50  md:px-24 px-8 pt-24 text-center">
      <h1 className=" capitalize md:md:text-6xl text-3xl   font-bold text-center mb-10">
        some of our supporters
      </h1>
      <div className=" grid md:grid-cols-4 grid-cols-2 justify-center items-center  md:gap-24">
        <a
          className="flex justify-center items-center p-5"
          href="https://thewaltdisneycompany.com/redirect/"
        >
          <img
            className=" grayscale"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/21st_Century_Fox_logo.svg/2560px-21st_Century_Fox_logo.svg.png"
          ></img>
        </a>
        <a
          className="flex justify-center items-center p-5"
          href="https://ribsandburgers.com/au/"
        >
          <img
            className=" grayscale"
            src="https://ribsandburgers.com/za/wp-content/uploads/2019/01/logo-blu.png"
          ></img>
        </a>
        <a
          className="flex justify-center items-center p-5"
          href="https://www.weightwatchers.com/us/"
        >
          <img
            className=" grayscale"
            src="https://logos-world.net/wp-content/uploads/2021/04/Weight-Watchers-Logo.png"
          ></img>
        </a>
        {/* <a className="flex justify-center items-center p-5" href="https://www.oracle.com/">
          <img
            className=" grayscale"
            src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
          ></img>
        </a> */}
        <a
          className="flex justify-center items-center p-5"
          href="https://www.ogilvy.com/"
        >
          <img
            className=" grayscale"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Ogilvy_Logo.png"
          ></img>
        </a>
      </div>
    </div>
  );
}
