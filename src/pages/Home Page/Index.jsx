// Importing Carousel Packages
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Importing Images
import Dismefa from './images/Dismefa.png'
import ChatDAPP from './images/Chat_DAPP.png'
import FoodDelivery from './images/Food Delivery App.png'

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

  // Major Projects
  const majorProjects = [
    {
      project: "E-Commerce",
      img: Dismefa,
      link: "https://e-commerce-mauve-phi.vercel.app/"
    },
    {
      project: "Food Delivery App",
      img: FoodDelivery,
      link: "https://food-delivery-app-phi-ten.vercel.app/"
    },
    {
      project: "Chat DAPP",
      img: ChatDAPP,
      link: "https://e-commerce-mauve-phi.vercel.app/"
    }
  ]

  

  return (
    <body className="relative h-lvh overflow-x-hidden">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-[#f1f4f9] to-[#dff1ff] blur-[150px] h-lvh w-lvw flex flex-col justify-between">
        <div className="bg-green-400 w-[90vw] h-[50vh] mx-auto" />

        <div className="bg-yellow-300 w-[80vw] h-[40vh] mx-auto">
          <div className="bg-blue-400 w-1/2 h-full mx-auto" />
        </div> 
      </div>

      <header className="relative text-5xl flex justify-between flex-wrap min-h-[20vh] p-12">
        <div className="flex flex-col items-center">
          <h1 className="font-bold">Manav Jain</h1>
          <span className="text-lg">A Full Stack Developer</span>
          <a href="https://manavjain-portfolio.vercel.app/" className="text-lg text-blue-700 hover:underline">My Portfolio</a>
        </div>

        <span className="font-bold mx-auto">My Projects</span>
      </header>

      <main className="relative flex flex-col gap-10 p-12">
        <div>
          {/* Carousal */}
          <Slider {...settings}>
            {
              projects.map((e, i) =>{
                return(
                  <a key={i} href={e.link} className="bg-[#ffffff1a] text-xl text-center h-[10rem] p-5 py-12 border-2 border-gray-200 rounded-md">
                    {e.name}
                  </a>
                )
              })
            }
          </Slider>
        </div>
        
        <div className="flex flex-col gap-10">
          <span className="text-5xl font-bold">Major Projects</span>
            
          <div>
            {/* Carousal */}
            <Slider {...settings}>
              {
                majorProjects.map((e, i) =>{
                  return(
                    <a key={i} href={e.link} className="bg-[#ffffff1a] text-xl text-center h-[12rem] border-2 border-gray-200 rounded-md">
                      <img src={e.img} alt={e.project} className="h-36 w-full" />
                      <span>{e.project}</span>                    
                    </a>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </main>
    </body>
  )
}

export default Index;