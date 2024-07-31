// Importing local files
import data from '../../../Data/api.json'
import DetailCard from './DetailCard'
import Clock from './Clock'
import Calculator from './Calculator'
import CheckBox from './CheckBox'

// Importing React Packages
import { useState } from 'react'

const NextJs = () => {
  const [checked, setChecked] = useState(false)
  const [effects, setEffects] = useState("")
  const [morphism, setMorphism] = useState(["shadow-neuMorphism", "shadow-inset_neuMorphism", "shadow-fullInset_neuMorphism"])
  // const [morphism, setMorphism] = useState(['shadow-dark_neuMorphism', 'shadow-dark_inset_neuMorphism', 'shadow-dark_fullInset_neuMorphism'])
  return (
    <div className={`${checked ? effects === '' && "bg-[#dde1e7]" || effects === 'grey' && "bg-[#dde1e7]" || effects === 'black' && "bg-[#131419] text-[#8c8c8c]" : "bg-[#ecf0f3]"} flex flex-col gap-10 w-lvw min-h-lvh px-10 py-5 duration-1000`}>
      <div className="flex justify-between gap-5 flex-wrap">
        {/* My Personal Information */}
        <DetailCard morphism={morphism} />

        {/* HeadLine */}
        <div className="flex flex-col gap-5">
          <span className={`font-bold text-4xl h-fit w-fit px-5 py-2 rounded-lg ${morphism[0]} hover:${morphism[2]}`}>Next Js Projects</span>
          
          <CheckBox checked={checked} setChecked={setChecked} effects={effects} setEffects={setEffects} morphism={morphism} setMorphism={setMorphism} />
        </div>

        {/* Clock */}
        <Clock morphism={morphism} />
      </div>

      {/* My Projects */}
      <div className="flex flex-wrap gap-10">
        {data.projects['Next Js Projects'].projects.map((e,i) => {
          return(
          <div key={i} className={`flex flex-col items-center gap-3 w-[350px] h-[400px] py-2 px-5 rounded-lg ${morphism[0]}`}>
            <span className="font-bold text-4xl">Project {i+1}</span>
            
            <div className={`flex items-center justify-center w-[300px] py-2 rounded-lg ${morphism[0]} hover:${morphism[1]}`}>
              <img src={e.img} alt="project" className="w-[280px] rounded-lg" />
            </div>

            <div className={`flex flex-col gap-5 px-5 py-2 rounded-lg ${morphism[0]} hover:${morphism[2]}`}>
              <span className="font-bold text-2xl">{e.project}</span>
              <p className='text-blue-700 text-sm'>{e.p1}</p>
            </div>
          </div>
          )
        })}

        <Calculator morphism={morphism} />
      </div>
    </div>
  )
}

export default NextJs