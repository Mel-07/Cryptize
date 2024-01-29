import { FaArrowRightLong } from "react-icons/fa6";

function Secured({source,paragraph,heading,btnText,key}) {
  return (
    <div key={key} className={` ${heading ==='Quick Exchange'? 'bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700':'bg-[#000000]'} transition-colors md:text-left text-center duration-500  border hover:border-blue-600 border-[#ffffff28] `}>
      <div className="p-[2.5rem] grid gap-5 grid-rows-subgrid">
        <div>
        <img src={source} width={'40rem'} alt="image" className="mx-auto md:mx-[0] " />
        </div>
        <h4 className="text-[1.5rem]">{heading}</h4>
        <p className="text-gray-200">{paragraph}</p>
        <button className=" w-fit hover:border-b-[.01rem] flex items-center gap-2 mx-auto md:mx-[0]  border-blue-700">{btnText}<FaArrowRightLong /></button>
      </div>
    </div>
  )
}

export default Secured
