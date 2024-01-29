
function ButtonTwoWhite({children}) {
  return (
    <button className={`border w-fit border-white ${children ==='Sign Up'? 'hover:border-black' : 'hover:border-blue-700'} transition-colors duration-300 hover:bg-[#000000] hover:text-[#FFFFFF] py-[.7rem] px-[2.5rem]`} >
      {children}
    </button>
  )
}

export default ButtonTwoWhite
