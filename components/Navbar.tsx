"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "public/assets/icon.png"

const Navbar = () => {
  return (
    <div className="navbar w-full flex-row flex justify-between align-middle border-b border-gray-400 px-5">
      <div className="flex flex-row justify-center items-center ml-3 pl-3">
        <Image src={logo} width={70} height={60} alt="Icon"/>
      </div>
      <div className="flex flex-row text-gray-250 text-sm sm:text-xl m-8 space-x-3 mr-3">
        <Link href="/" className="">
          <p className="navbar_text ">About Me</p>
        </Link>
        <Link href="">
          <p className="navbar_text">My Interests</p>
        </Link>
        <Link href="/">
          <p className="navbar_text">My Projects</p>
        </Link>
        <Link className="navbar_text"href="/">
          <p>Home</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar