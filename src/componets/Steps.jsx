

function Steps({source,paragraph,heading,keyValue}) {
  return (
    <div  className={` ${keyValue ===2 ? ' bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700':'bg-[#000000]  '} transition-colors text-center md:text-left duration-500  border hover:border-blue-600 border-[#ffffff28] `}>
      <div className="p-[2.5rem] grid gap-5 grid-rows-subgrid">
        <div>
        <img src={source} width={'40rem'} alt="image" className=" mx-auto md:mx-[0]  " />
        </div>
        <h4 className="text-[1.5rem]">{heading}</h4>
        <p className={`${keyValue ===2 && 'text-gray-200'} text-gray-300`}>{paragraph}</p>
      </div>
    </div>
  )
}

export default Steps
