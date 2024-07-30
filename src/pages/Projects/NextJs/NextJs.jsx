// Importing React Icons
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { SiBuymeacoffee } from "react-icons/si";

// Importing local files
import data from '../../../Data/api.json'

// Importing React Packages
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NextJs = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  // const sec = document.getElementById('sec');
  // const min = document.getElementById('min');
  // const hr = document.getElementById('hr');


  useEffect(() => {
    const interval = setInterval(() => {
      let time = new Date();
      setSec(time.getSeconds() * 6);
      setMin(time.getMinutes() * 6);
      setHr(time.getHours() * 30 + time.getMinutes() * 0.5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // setInterval(function(){
  //   let time = new Date();
  //   let secs = time.getSeconds() * 6;
  //   let mins = time.getMinutes() * 6;
  //   let hrs = time.getHours() * 30;

    // console.log(sec);
    // sec.style.transform = `rotateZ(${secs}deg)`;
    // min.style.transform = `rotateZ(${mins}deg)`;
    // hr.style.transform = `rotateZ(${hrs*(mins/12)}deg)`;
  // })


  return (
    <div className="bg-[#ecf0f3] w-lvw min-h-lvh px-10 py-5">
      <div className="flex justify-between">
        {/* My Personal Information */}
        <div className="relative w-[350px] p-8 flex flex-col items-center justify-center rounded-lg shadow-neuMorphism">
          <Link to="/"><FaArrowLeft className="absolute top-7 left-5 text-gray-500" /></Link>
          
          <Link to={data["my info"].portfolio} className="group absolute top-7 right-5">
            <HiOutlineDotsVertical className=" text-gray-500 size-5" />
            <div className="z-10 hidden absolute top-8 -right-12 font-semibold text-blue-700 bg-white group-hover:block px-5 py-2 rounded-lg shadow-neuMorphism whitespace-nowrap">My Portfolio</div>
          </Link>

          <div className="w-[130px] h-[130px] rounded-full shadow-neuMorphism hover:shadow-fullInset_neuMorphism">
            <img src={data["my info"].img} alt="dp" className="relative top-2 left-2 size-[87%] rounded-full" />
          </div>
          
          <div className="font-semibold text-lg flex flex-col items-center gap-3">
            <span className="text-2xl">{data['my info'].name}</span>
            <span className="text-blue-800">{data['my info'].field}</span>
            <section className="w-full flex justify-center gap-5">
              <Link to={data["my info"].social.github} className="p-1 rounded-full shadow-neuMorphism hover:shadow-fullInset_neuMorphism"><FaGithub className="size-7" /></Link>
              <Link to={data["my info"].social.linkedin} className="p-1 rounded-full shadow-neuMorphism hover:shadow-fullInset_neuMorphism"><CiLinkedin className="size-7 text-blue-600" /></Link>
              <Link to={data["my info"].social.leetcode} className="p-1 rounded-full shadow-neuMorphism hover:shadow-fullInset_neuMorphism"><SiLeetcode className="size-7 text-yellow-600" /></Link>
            </section>

            <Link to={data["my info"].buymyacoffee} className="group text-yellow-600 flex items-center gap-3 px-5 py-2 rounded-lg shadow-neuMorphism hover:shadow-fullInset_neuMorphism">
              <span className="group-active:invisible">Buy Me A Coffee</span>
              <SiBuymeacoffee className="group-active:invisible size-7" />
            </Link>
          </div>
        </div>

        {/* HeadLine */}
        <span className="font-bold text-4xl h-fit px-5 py-2 rounded-lg shadow-neuMorphism hover:shadow-fullInset_neuMorphism">Next Js Projects</span>

        {/* Clock */}
        <div
          className="bg-[#dde1e7] relative w-[200px] h-[200px] rounded-full shadow-clock
            before:absolute before:top-2 before:left-2 before:content-[''] before:w-[185px] before:h-[185px] before:rounded-full before:shadow-inset_neuMorphism
            after:absolute after:top-[50px] after:left-[50px] after:content-[''] after:w-[100px] after:h-[100px] after:rounded-full after:shadow-neuMorphism
            flex items-center justify-center
            "
        >
          <span className="relative bg-gray-800 w-[13px] h-[13px] rounded-full before:absolute before:top-[1.5px] before:left-[1.5px] before:bg-blue-500 before:content-[''] before:w-[10px] before:h-[10px] before:rounded-full">
            <span id="sec" className="z-[6] absolute -bottom-[10px] right-[6px] bg-blue-500 h-[90px] w-[2px] before:absolute before:top-[90px] before:-right-[2px] before:bg-blue-500 before:content-[''] before:w-[6px] before:h-[30px] before:rounded-full"></span>
            <span id="min" className="z-[5]"></span>
            <span id="hr" className="z-[4] absolute bottom-0 left-[5px] bg-gray-800 h-[30px] w-[4px] rounded-full"></span>
          </span>

          <span className="absolute top-3 bg-blue-500 h-2 w-[2px] rounded-lg" />
          <span className="absolute top-6 right-[52px] rotate-[40deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
          <span className="absolute top-[56px] right-6 rotate-[60deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
          
          <span className="absolute top-24 right-3 rotate-[90deg] bg-blue-500 h-2 w-[2px] rounded-lg" />       
          <span className="absolute bottom-[54px] right-[26px] rotate-[120deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
          <span className="absolute bottom-[26px] right-[55px] rotate-[150deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
          
          <span className="absolute bottom-3 bg-blue-500 h-2 w-[2px] rounded-lg" />       
          <span className="absolute bottom-6 left-[54px] rotate-[220deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
          <span className="absolute bottom-[56px] left-7 rotate-[250deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
          
          <span className="absolute bottom-24 left-4 rotate-[90deg] bg-blue-500 h-2 w-[2px] rounded-lg" />        
          <span className="absolute top-6 left-[55px] rotate-[330deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
          <span className="absolute top-[55px] left-[26px] rotate-[300deg] bg-gray-800 h-2 w-[2px] rounded-lg" />
        </div>
      </div>


    </div>
  )
}

export default NextJs