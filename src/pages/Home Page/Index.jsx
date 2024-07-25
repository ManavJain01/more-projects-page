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
        <div className="bg-blue-400 w-[90vw] h-[50vh] mx-auto" />

        <div className="bg-yellow-300 w-[80vw] h-[40vh] mx-auto">
          <div className="bg-red-800 w-1/2 h-full mx-auto" />
        </div> 
      </div>

      <header className="relative text-5xl flex justify-between items-center flex-wrap min-h-[20vh] px-12 py-5">
        <div className="relative">
          <div className="z-20 peer relative bg-[#ffffff1a] backdrop-blur-lg flex flex-col items-center p-5 border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg">
            <h1 className="font-bold">Manav Jain</h1>
            <span className="text-lg">A Full Stack Developer</span>
            
            <div className="absolute -top-4 -left-10 w-[4rem] h-[4rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
            <div className="absolute top-12 -right-12 w-[4rem] h-[4rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
            <div className="absolute -bottom-6 -left-12 w-[4rem] h-[4rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
          </div>

          <a
            href="https://manavjain-portfolio.vercel.app/"
            className="absolute -bottom-2 left-24 text-lg text-blue-700 hover:underline
              p-1 border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg
              duration-700
              animate-bottom-transition-reverse peer-hover:animate-bottom-transition hover:animate-bottom-transition
              "
          >
            My Portfolio
          </a>
        </div>

        <div className="relative mx-auto">
          <span className="font-bold">My Projects</span>

          <div className="absolute top-0 -left-2 w-[2rem] h-[2rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
          <div className="absolute -bottom-4 left-24 w-[2rem] h-[2rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
          <div className="absolute top-0 right-16 w-[2rem] h-[2rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
          <div className="absolute bottom-0 right-2 w-[2rem] h-[2rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
        </div>
      
      </header>

      <main className="relative flex flex-col gap-10 p-12">
        <div className="relative">
          <div className="absolute -top-4 -left-10 w-[4rem] h-[4rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
          <div className="absolute -bottom-4 -right-10 w-[4rem] h-[4rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
          <div className="absolute -bottom-10 left-32 w-[4rem] h-[4rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
          <div className="absolute -top-8 right-48 w-[4rem] h-[4rem] bg-[#ffffff1a] animate-pulse border-[1px] border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-lg shadow-lg" />
          
          {/* Carousal */}
          <Slider {...settings}>
            {
              projects.map((e, i) =>{
                return(
                  <a key={i} href={e.link} className="bg-[#ffffff1a] text-xl text-center h-[10rem] p-5 py-12 border-2 border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-md">
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
                    <a key={i} href={e.link} className="bg-[#ffffff1a] text-xl text-center h-[12rem] border-2 border-[#ffffff80] border-b-[#ffffff33] border-r-[#ffffff33] rounded-md">
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