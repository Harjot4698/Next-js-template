import React from 'react'
import Link from "next/link";
import Image from "next/image";


import reactWeather from "../public/assets/portfolio/reactWeather.jpg";
import installNode from "../public/assets/portfolio/installNode.jpg";
import reactParallax from "../public/assets/portfolio/reactParallax.jpg";
import usestate from "../public/assets/portfolio/usestate.jpg";




    const portfolios = [
      {
        id: 1,
        title: "react weather app",
        imageSrc: reactWeather,
        url: "/Blog1"
      }
      

    ];

const reads = () => {
  return (
    <div id="reads" className="w-full pt-40" >
        <div className='max-w-screen-xl  mx-auto w-full h-full  pt-20 text-center md:text-left' >

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-20" >
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link href={url}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        </div>
    </div>
  )
}

export default reads;