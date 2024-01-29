import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef} from 'react'

gsap.registerPlugin(ScrollTrigger);

function Image({source}) {
  const imageContainer = useRef()
  useGSAP(()=>{ 

    gsap.set(
      '.image-section',{
        y:'-10%',
        opacity:0,
      }
    )
    gsap.from(
      '.image-section',{
        y:'-10%',
        opacity:0,
      }
    )

    gsap.to(
     '.image-section',{
      scrollTrigger: {
        trigger: '.image-section',
        start: "top center", 
        end: "bottom center",  
        toggleActions: "play none none none", 
      },
      y:'0',
      opacity:2,
      duration:1,
     } 
    )
    gsap.set('.image-section',{
      y:'-1%'
    })
    gsap.to('.image-section',{
      y:'0',
      repeat:-1,
      yoyo:true,
      ease:'sine',
      duration:'5'
    })

  },{scope:imageContainer})
  return (
    <div ref={imageContainer} >
      <img src={source} alt="Image" className=" image-section mx-auto max-w-[100%]" />
    </div>
  )
}

export default Image
