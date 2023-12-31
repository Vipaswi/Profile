'use client'
import icon from "@/public/assets/V-logos_black.png"

import Image from "next/image"
import Link from "next/link"

const Footbar = () => {
  return (
    <div className="flex sticky footbar top-0 justify-between align-center bg-white border-black border-y-black border-y-2 z-20">
      <div className="ml-4">
        <Image src={icon} width={100} height={100} alt=""/> {/*Remember to make these client side components in another file. make this server side */}
      </div>
      <div className="flex space-x-3 align-center">
        <div className="m-auto">
          <Link href='#Projects'>
            <p className="navbar_text">My Projects</p>
          </Link>
        </div>
        <div className="m-auto">
          <Link href='#About_Me'>
            <p className="navbar_text">About Me</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footbar