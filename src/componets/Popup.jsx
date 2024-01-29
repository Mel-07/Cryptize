import { FaX } from "react-icons/fa6";

function Popup({overEvent}) {
  return (
    <div className={`w-full grid  place-content-center   h-screen top-0 left-0 right-0 bottom-0 fixed z-[10] bg-black bg-opacity-[.5]`}>

        <div className='bg-gradient-to-tr transition delay-75 ease-in-out duration-500  max-w-[60rem] mx-auto  relative from-purple-500 via-violet-600 to-blue-700 p-[4rem] text-center'>
            <FaX onClick={()=>overEvent(false)}  className=' top-[-30%]  cursor-pointer right-0 bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700 absolute text-white  bg-black  p-[1rem] rounded-full w-[3rem] h-[3rem] ' />
            <p className="text-[1.8rem]  ">Message Sent</p>
        </div>
      
    </div>
  )
}

export default Popup
