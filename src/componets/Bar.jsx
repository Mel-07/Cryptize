import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef} from 'react'
gsap.registerPlugin(ScrollTrigger)

function Bar({name,percentageValue}) {
  const perContainer= useRef()

  useGSAP(()=>{
    gsap.set(
      '.w-ninety',
      {
        width:'0px',
      }
    )
    gsap.to(
      '.w-ninety',
      {
        scrollTrigger: {
          trigger: '.w-ninety',
          start: "top center", 
          end: "bottom center",  
          toggleActions: "play none none none", 
        },
        width:'90%',
        duration:1,
        ease:'power1.inOut'
      }
    )
    gsap.to(
      '.w-ninety-three',
      {
        scrollTrigger: {
          trigger: '.w-ninety-three',
          start: "top center", 
          end: "bottom center",  
          toggleActions: "play none none none", 
        },
        width:'93%',
        duration:1,
        ease:'power1.inOut'
      }
    )
    gsap.to(
      '.w-eighty-seven',
      {
        scrollTrigger: {
          trigger: '.w-eighty-seven',
          start: "top center", 
          end: "bottom center",  
          toggleActions: "play none none none", 
        },
        width:'90%',
        duration:1,
        ease:'power1.inOut'
      }
    )
    gsap.to(
      '.w-ninety-five',
      {
        scrollTrigger: {
          trigger: '.w-ninety-five',
          start: "top center", 
          end: "bottom center",  
          toggleActions: "play none none none", 
        },
        width:'90%',
        duration:1,
        ease:'power1.inOut'
      }
    )

  },{scope:perContainer})

  return (
<div>
        <div className="w-full flex items-center mt-2"><span >{name}</span><span className="ml-auto" >{percentageValue}%</span></div>
        <div ref={perContainer} role="progress" aria-valuemax={100} aria-valuemin={0} aria-valuenow={90} className=" relative w-full h-[.2rem] bg-gray-600 " >
        <div className={`  transition-[width] duration-500 ease-linear absolute bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700 h-full ${percentageValue === '90'?  'w-ninety' :percentageValue === '93' ? 'w-ninety-three' : percentageValue === '87' ? 'w-eighty-seven' : percentageValue === '95' && 'w-ninety-five'} `} ></div>
        </div>
</div>
  )
}

export default Bar
