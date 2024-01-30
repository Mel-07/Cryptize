import { MainContext } from "../context/MainContext"
import { NavLink } from "react-router-dom"
import { FaX } from "react-icons/fa6";
import { useContext, useState,useEffect, useRef } from "react"
import Logo from '../assets/img/logo_Asset-2_white.png'
import { CiMenuFries } from "react-icons/ci";

function Header() {
    const [menu,setMenu] = useState(false)
    const {routePath,buttonPath} = useContext(MainContext)
    const menuBar = useRef()

    useEffect(()=>{

        function menuFn(e){

            if(menuBar.current.contains(e.target)){
                setMenu(true)
            }else{
                setMenu(false)
            }
        }

        window.addEventListener('click',menuFn)


        return ()=>{
            window.removeEventListener('click',menuFn)
        }

    },[])
  return (
    <>
      <header className="flex max-w-[85rem]  mx-auto mb-3 items-center gap-[7%] p-4 text-white ">
        <div className="mr-auto w-[5rem]">
            <img src={Logo} alt="logo" width={'50rem'} height={'50rem'} />
        </div>
        <nav className={`flex ${menu === false ?  ' translate-x-[100vw] duration-[100ms]' : 'translate-x-0 duration-[900ms]'} item-center  md:translate-x-0 z-[10] ease-in-out transition-transform   orig   md:static h-screen md:h-fit w-full right-[0] left-0 top-[0] fixed   md:bg-transparent bg-opacity-[.5] bg-black`}>
            <div className="grid ml-auto basis-[17rem] md:basis-[100%]  bg-black h-full md:h-fit md:bg-transparent ">
                <FaX onClick={()=> setMenu(false)} className="md:hidden w-[2.3rem] h-[2.3rem] p-2 ml-auto mr-[.9rem] mt-[.9rem]" />
                <ul className="flex gap-y-[3rem] md:place-self-center text-[1.2rem] h-full w-full flex-col md:flex-row items-center gap-x-4">
                {routePath.map((routes) => (
                    <li key={routes.name}>
                    <NavLink to={routes.path}>{routes.name}</NavLink>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <ul className="hidden md:flex gap-x-5">
                {buttonPath.map((routes) => (
                    routes.name === 'Sign Up' ? (
                    <li
                        className="border text-nowrap border-black hover:border-white transition-colors duration-300 hover:bg-transparent bg-[#000000] text-[#FFFFFF] py-[.7rem] px-[2.5rem]"
                        key={routes.name}
                    >
                        <NavLink>{routes.name}</NavLink>
                    </li>
                    ) : (
                    <li
                        className="border text-nowrap border-white hover:border-black transition-colors duration-300 hover:bg-[#000000] hover:text-[#FFFFFF] py-[.7rem] px-[2.5rem]"
                        key={routes.name}
                    >
                        <NavLink>{routes.name}</NavLink>
                    </li>
                    )
                ))}
                </ul>
            </div>
        </nav>
       <div ref={menuBar}>
       <CiMenuFries  onClick={()=> setMenu(true)} className=" md:hidden w-[3rem] h-[3rem]" />
       </div>
      </header>
    </>
  )
}

export default Header
