import Header from "../componets/Header"
import ButtonOneBlack from "../componets/ButtonOneBlack"
import Image from "../componets/Image"
import AssetOne from "../assets/img/Asset-3-1536x991.png"
import Count from "../componets/Count"
import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { MainContext } from "../context/MainContext"
import Bar from "../componets/Bar"
import Footer from "../componets/Footer"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Layout() {
  // context


  return (
    <>
        <div className=" overflow-clip text-white bg-black ">
          {/* hero */}
        <section className=" bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700 mb-[6rem] ">
        <Header/>
        <div className=" mx-auto">
      <div className="grid md:grid-cols-2 my-[1rem]">
      <div className="grid gap-8 md:grid-cols-2 place-content-center p-4 h-full col-span-2 max-w-[85rem] mx-auto ">
          <div>
            <div className="flex flex-col gap-y-[4rem]">
              <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4.5rem]" >Your Trusted Crypto Currency Partner</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Maecenaseget nulla bibe ndum, semper nisi sed, volutpat massa.</p>
              <ButtonOneBlack>Apply Now</ButtonOneBlack>
            </div>
          </div>

          <div className=" self-center">
            <Image source={AssetOne} />
          </div>
      </div>
      <div className="bg-[#000000] flex lg:flex-row flex-col md:max-w-[100%] item-center col-start-1 max-w-[90%] mx-auto col-span-2 md:col-start-2 w-full ">
        <Count figure={100} text={`Worldwide Office`}/>
        <Count figure={52} text={`Award Winning`}/>
      </div>
      </div>
      </div>
          </section>
          <Outlet/>
          {/* FOOTER */}
          <div className="bg-black" >
          <div className="max-w-[70rem] mx-auto flex justify-center items-center" >
          <Footer/>
          </div>
          </div>
    </div>
    </>
    
  )
}

export default Layout
