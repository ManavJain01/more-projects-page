// Importing Carousel Packages
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Importing React Packages
import { Link } from 'react-router-dom'

export default function FourthPage() {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  const ReactNativeProjects = []

  const NextJsProjects = []

  return (
    <div className="relative h-lvh overflow-x-hidden">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-[#f1f4f9] to-[#dff1ff] blur-[150px] h-lvh w-lvw flex flex-col justify-between">
        <div className="bg-yellow-300 w-[80vw] h-[40vh] mx-auto">
          <div className="bg-red-800 w-1/2 h-full mx-auto" />
        </div> 

        <div className="bg-blue-400 w-[90vw] h-[50vh] mx-auto" />
      </div>
    </div>
  )
}

/*
<div className="relative flex flex-col gap-10 p-12">
        <div className="flex flex-col gap-10">
          <Link to="/NextJs" className="font-bold text-5xl w-fit">NextJs Projects</Link>

          {/* Carousal * /}
          <Slider {...settings}>
            {
              NextJsProjects.map((e, i) =>{
                return(
                  <a key={i} href={e.link} className="bg-[#ffffff1a] text-xl text-center h-[14rem] border-2 border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-md">
                    <img src={e.img} alt={e.project} className="h-48 w-full" />
                    <span>{e.project}</span>                    
                  </a>
                )
              })
            }
          </Slider>
        </div>

        <div className="flex flex-col gap-10">
          <Link to="/ReactNative" className="font-bold text-5xl w-fit">React Native Projects</Link>
        
          {/* Carousal * /}
          <Slider {...settings}>
            {
              ReactNativeProjects.map((e, i) =>{
                return(
                  <a key={i} href={e.link} className="bg-[#ffffff1a] text-xl text-center h-[14rem] border-2 border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-md">
                    <img src={e.img} alt={e.project} className="h-48 w-full" />
                    <span>{e.project}</span>                    
                  </a>
                )
              })
            }
          </Slider>
        </div>
      </div>

*/