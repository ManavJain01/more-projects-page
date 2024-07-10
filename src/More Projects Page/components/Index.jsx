// Importing Carousel Packages
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './projects.css'

const Index = () => {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  // Projects
  const projects = [
    {
      name: "HTML/CSS/JS Projects",
      link: "https://manavjain01.github.io/My-Mini-Projects/MainFile/"
    },
    {
      name: "React Projects",
      link: "https://manavjain01.github.io/My-React-Projects/#/Body"
    },
    {
      name: "MERN Projects",
      link: "https://mern-projects-amber.vercel.app/"
    },
    {
      name: "ML Projects",
      link: "https://manavjain01.github.io/MachineLearning/MainFile/#"
    },
    {
      name: "Java Projects",
      link: "https://my-java-projects-7a17e.web.app/#"
    },
    {
      name: "BlockChain Projects",
      link: "https://manavjain01.github.io/BlockChain-Projects/MainFile/"
    },
    {
      name: "Scratch Projects",
      link: ""
    },
    {
      name: "DSA Projects",
      link: "https://github.com/ManavJain01/DSA-Problems"
    }
  ]

  return (
    <div className="bg-white">
      <header>
        <h1 className="text-5xl">Projects</h1>
      </header>

      <main className="bg-yellow-400 min-h-[60vh] p-10 flex flex-col">
        {/* <ul className="flex gap-10 flex-wrap whitespace-nowrap">
          {projects.map((e,i) => {
            return(
              <li key={i} className="w-fit h-[3rem]"><a href={e.link}>{e.name}</a></li>
            )
          })}
        </ul> */}
        <hr />

        {/* Carousal */}
        <Slider {...settings}>
          {
            projects.map((e, i) =>{
              return(
                <a key={i} href={e.link} className="bg-[#FFA600] text-xl h-[10rem] p-5 border-2 border-black rounded-md">
                  {e.name}
                </a>
              )
            })
          }
        </Slider>
        <hr />
      </main>

      <footer className="bg-black text-white text-2xl h-[20vh] flex flex-col">
        <ul className="flex flex-col text-center p-2">
          <li><h1>Manav Jain</h1></li>
          <li>A Full Stack Developer</li>
        </ul>

        <ul className="flex flex-col text-center p-2 list-none">
          <li><a href="https://manavjain-portfolio.vercel.app/"><h2 className="mt-[10px]">My Portfolio</h2></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Index