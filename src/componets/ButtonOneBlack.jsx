
function ButtonOneBlack({children}) {
  return (
    <button className="border w-fit border-black hover:border-white transition-colors duration-300 hover:bg-transparent bg-[#000000] text-[#FFFFFF] py-[.7rem] px-[2.5rem] ">
      {children}
    </button>
  )
}

export default ButtonOneBlack
