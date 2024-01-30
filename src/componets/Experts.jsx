import { Link } from "react-router-dom"

function Experts({name,image,role,facebook,twitter,pinterest}) {
  return (
    <>
      <div className={` basis-[100%] h-[30rem] mx-auto sm:basis-[30rem] md:basis-[22rem] bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700 transition-transform duration-300 hover:translate-y-[-.5%] ease-in-out parent-container relative overflow-hidden `} >
        <img src={image} className='w-100% mx-auto h-[100%] z-[1] flex' alt="" />
        <div className=' flex  child-element bg-[#6fb5fb] bg-opacity-40 w-full h-full   z-[2]  absolute'>
            <div className=' flex flex-col text-center self-end mx-auto p-[4rem] ' >
                <div className='flex items-center flex-col gap-[.1rem]'>
                    <span className='text-[1.6rem]'>{name}</span>
                    <span>{role}</span>
                </div>
                <div className=" flex items-center gap-4 justify-between mt-2 ">
                    <Link>{facebook}</Link>
                    <Link>{twitter}</Link>
                    <Link>{pinterest}</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Experts
