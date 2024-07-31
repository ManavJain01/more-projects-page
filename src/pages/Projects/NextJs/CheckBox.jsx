import { useState } from "react"

export default function CheckBox({checked = false, effects, morphism, setChecked, setEffects, setMorphism}) {
  return (
    <div className="flex flex-col gap-5">
      <div className={`flex gap-5 items-center w-[300px] h-[100px] p-5 rounded-lg ${morphism[0]}`}>
        <button
          onClick={() => {
            setChecked(!checked)
            effects === '' || effects === 'grey' ? setMorphism(["shadow-neuMorphism", "shadow-inset_neuMorphism", "shadow-fullInset_neuMorphism"]) : setMorphism(['shadow-dark_neuMorphism', 'shadow-dark_inset_neuMorphism', 'shadow-dark_fullInset_neuMorphism'])
          }}
          className={`relative w-28 h-12 rounded-full ${morphism[2]}`}
        >
          <div className={`relative top-[2px] w-10 h-10 rounded-full ${morphism[0]} duration-500 ${checked ? "left-[74px] bg-[#dde1e7]" : "left-[1px] bg-[#ecf0f3]"}`}></div>
        </button>

        <span className={`text-xl font-semibold tracking-widest ${checked ? "text-blue-400" : "text-black"} duration-500`}>{checked ? "Checked" : "Unchecked"}</span>
      </div>

      <div className={`flex gap-5 justify-around items-center w-[300px] h-[70px] p-5 rounded-lg ${morphism[0]}`}>
        <span className="font-semibold tracking-widest text-2xl">Effects:</span>

        <div className="flex gap-5">
          <button
            onClick={() =>  {
              checked == true && setMorphism(['shadow-dark_neuMorphism', 'shadow-dark_inset_neuMorphism', 'shadow-dark_fullInset_neuMorphism'])
              setEffects("black")
            }}
            className={`bg-[#131419] w-10 h-10 rounded-full ${effects === 'black' ? morphism[2] : morphism[0]}`} />
          
          <button
            onClick={() => {
              checked == true && setMorphism(["shadow-neuMorphism", "shadow-inset_neuMorphism", "shadow-fullInset_neuMorphism"])
              setEffects("grey")
            }}
            className={`bg-[#dde1e7] w-10 h-10 rounded-full ${effects === 'grey' ? morphism[2] : morphism[0]}`} />
        </div>
      </div>
    </div>
  )
}