import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* --- Left Section ------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vel
            perspiciatis iste molestias necessitatibus omnis atque aut
            consectetur accusamus. Vitae impedit voluptatem nemo explicabo,
            atque alias magnam repellendus aliquam debitis.
          </p>
        </div>

        {/* --------- Center Section ------ */}
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* ---------- Right Section --------- */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
               <li>+91-9065546589</li>
               <li>rahulpandit7405@gmail.com</li> 
            </ul>
        </div>
      </div>
      <div>
        {/* --------- Copyright Text ------ */}
        <div>
            <hr />
            <p className="py-5 text-sm text-center"><span className="cursor-pointer">rahulpandit7405@gmail.com</span> 2025@ Prescripto - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
