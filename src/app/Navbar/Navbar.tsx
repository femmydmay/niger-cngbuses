"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Head from "next/head";
import { FaBars } from "react-icons/fa";
// import { BsPerson } from "react-icons/bs";
// import { RxCaretDown } from "react-icons/rx";
// import { BiHelpCircle, BiSearch } from "react-icons/bi";
// import { Badge, Button, Divider, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => setCollapse((prev) => !prev);
  return (
    <>
      <Head>
        <title>S.C.S.L IT/ICT </title>
      </Head>
      <main className="bg-blue-1000 mb-20">
        <nav className="  flex   border-b  max-sm:relative h-20 px-4 items-center justify-between w-full fixed top-0 right-0 z-10 bg-[#1e3a8a] -mb-20">
          <Link href="" className="text-white text-3xl font-bold">
            <Image
              className="relative 
              border-gray-100 shadow-sm
          max-w-sm h-full w-[80%] object-cover ml-4  pr-9 mx-auto  "
              src="/nstlogo1.png"
              width={300}
              height={300}
              alt="Picture of the SCSLnexuslogo"
            />
          </Link>
          <ul
            className={`flex ml-auto ${
              collapse ? "max-sm:hidden" : ""
            }  max-sm:flex-col max-sm:top-20 max-sm:bg-gray-900 max-sm:left-0 max-sm:w-full  max-sm:gap-2 max-sm:py-2 max-sm:pl-3 z-50 max-sm:absolute w-1/2 justify-between text-white font-bold `}
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/business">Business</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex lg:hidden">
            <FaBars
              className="text-white z-40 text-xl max-sm:block hidden  ml-auto"
              onClick={handleCollapse}
            />
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
