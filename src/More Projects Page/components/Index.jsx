// Importing Carousel Packages
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
    <body className="relative min-h-lvh overflow-x-hidden">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-[#f1f4f9] to-[#dff1ff] blur-[150px] h-lvh w-lvw flex flex-col justify-between">
        <div className="bg-pink-600 w-[90vw] h-[50vh] mx-auto" />

        <div className="bg-yellow-300 w-[80vw] h-[40vh] mx-auto">
          <div className="bg-blue-400 w-1/2 h-full mx-auto" />
        </div> 
      </div>

      <header className="text-5xl min-h-[20vh] p-12">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">Manav Jain</h1>
            <span className="text-lg">A Full Stack Developer</span>
            <a href="https://manavjain-portfolio.vercel.app/" className="text-lg text-blue-700 hover:underline">My Portfolio</a>
          </div>

          <span className="font-bold mx-auto">My Projects</span>
        </div>
      </header>

      <main className="flex flex-col gap-10 p-12">

        <div>
          {/* Carousal */}
          <Slider {...settings}>
            {
              projects.map((e, i) =>{
                return(
                  <a key={i} href={e.link} className="bg-gradient-to-t from-blue-300 to-pink-200 text-xl text-center h-[10rem] p-5 py-12 border-2 border-gray-200 rounded-md">
                    {e.name}
                  </a>
                )
              })
            }
          </Slider>
        </div>

      </main>
    </body>
  )
}

export default Index;