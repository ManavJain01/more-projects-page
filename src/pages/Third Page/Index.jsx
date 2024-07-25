// Importing Carousel Packages
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Importing Images
import Dismefa from './images/Dismefa.png'
import FoodDelivery from './images/Food Delivery App.png'
import NextAuth from './images/NextAuth.png'
import WebStreaming from './images/webStreaming.png'
import ChatDAPP from './images/Chat_DAPP.png'

const Index = () => {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  const mernProjects = [
    {
      project: "Medicine E-Commerce",
      img: Dismefa,
      link: "https://e-commerce-mauve-phi.vercel.app/"
    },
    {
      project: "Next Auth",
      img: NextAuth,
      link: ""
    },
    {
      project: "Web Streaming",
      img: WebStreaming,
      link: "https://webstreaming.netlify.app/"
    },
    {
      project: "Food Delivery App",
      img: FoodDelivery,
      link: "https://food-delivery-app-phi-ten.vercel.app/"
    }
  ]

  const blockchainProjects = [
    {
      project: "Chat DAPP",
      img: ChatDAPP,
      link: ""
    },
    {
      project: "Chat DAPP",
      img: ChatDAPP,
      link: ""
    },
    {
      project: "Chat DAPP",
      img: ChatDAPP,
      link: ""
    },
  ]

  return (
    <body className="relative h-lvh overflow-x-hidden">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-[#f1f4f9] to-[#dff1ff] blur-[150px] h-lvh w-lvw flex flex-col justify-between">
        <div className="bg-green-400 w-[90vw] h-[50vh] mx-auto" />

        <div className="bg-yellow-300 w-[80vw] h-[40vh] mx-auto">
          <div className="bg-blue-400 w-1/2 h-full mx-auto" />
        </div> 
      </div>

      <div className="relative flex flex-col gap-10 p-12">

        <div className="flex flex-col gap-10">
          <a href="https://mern-projects-amber.vercel.app/" className="text-5xl font-bold">MERN Projects</a>
          
          <div>
            {/* Carousal */}
            <Slider {...settings}>
              {
                mernProjects.map((e, i) =>{
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

        <div className="flex flex-col gap-10">
          <a href="https://manavjain01.github.io/BlockChain-Projects/MainFile/" className="text-5xl font-bold">BlockChain Projects</a>
          
          <div>
            {/* Carousal */}
            <Slider {...settings}>
              {
                blockchainProjects.map((e, i) =>{
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
      </div>
    </body>
  )
}

export default Index;