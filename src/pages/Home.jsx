import Secured from "../componets/Secured"
import Heading from "../componets/Heading"
import Bar from "../componets/Bar"
import Steps from "../componets/Steps"
import Property from "../componets/Property"
import Review from "../componets/Review"
import Experts from "../componets/Experts"
import CarouselCard from "../componets/Carouselcard"
import Slider from 'react-slick';
import ButtonOneBlack from "../componets/ButtonOneBlack"
import gsap from "gsap";
import ButtonTwoWhite from "../componets/ButtonTwoWhite"
import Image from "../componets/Image"
import AssetTwo from '../assets/img/Asset-3_2.png'
import AssetThree from '../assets/img/Asset-5_3.png'
import AssetFour from '../assets/img/Asset-8_3.png'
import Welcome from "../componets/Welcome"
import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "../componets/ContactForm"

function Home() {
      // context
  const {secured,bar,createWallet,propertyOne,propertyTwo,rating,executive,users} = useContext(MainContext)

  const BarElement = bar.map(ba=>(
    <Bar key={ba.name} name={ba.name} percentageValue={ba.perValue} />
  ))
  const settings ={
    dots: true,
    infinite: true,
    speed: 1000,
    loop:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:false,
    initialSlide: 0,
    centerMode: true,
    centerPadding:'0rem',
    autoplaySpeed: 6000,
    cssEase: "linear",
    autoplay:true,
    customPaging: (i) => (
      <div
        style={{
          width: '2rem',
          height: '2rem',
          background: i==0 ? 'red' : i==1 ?  'red' : i==2 ? 'red' : 'white', // Customize the active and inactive dot styles
          borderRadius: '5px',
          margin: '0 5px',
          transition: 'background 0.3s ease', // Optional: Add a smooth transition effect
        }}
      />
    ),
    pauseOnHover:true,
    className: "",
  };

  return (
    <div className="bg-[#000000] h-full">
    {/* second section */}
<section className=" bg-[#000000] h-fit my-[4rem] grid place-items-center" > 
  <div className="max-w-[85rem] my-[7rem] mx-auto flex-col-reverse flex md:flex-row text-center md:text-left items-center p-2 gap-[3rem] " >
    <Image source={AssetTwo}/>
    <Welcome
    textOne={'Welcome to Cryptize'}
    textTwo ={`We Take Care of
    Your Money`}
    element={<ButtonTwoWhite >Get Started</ButtonTwoWhite>}
    textThree={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nulla bibendum, semper nisi sed, volutpat massa. Suspendisse egestas purus mauris, blandit lobortis tortor aliquam vitae. Duis a elit placerat, hendrerit eros eu, rutrum neque.`}
    />
  </div>
</section>
{/* third section  */}
<section className="bg-[#000000]  " > 
  <div className="max-w-[85rem] h-full mx-auto p-1 " >
    <Heading Span='Why Choose Cryptize'  heading='Secured And Easy to Use' />
    <div className="grid p-2 grid-cols-[repeat(auto-fit,minmax(20rem,auto))] gap-6">
      {
        secured.map(sec=>(
          <Secured key={sec.heading} heading={sec.heading} source={sec.image} paragraph={sec.paragraph} btnText={sec.btnText} />
        ))
      }
    </div>
  </div>
</section>
{/* fourth section */}
<section className="bg-[#000000] h-fit" > 
  <div className="max-w-[85rem] bg-[#000000] py-7 mx-auto  gap-[4rem] grid place-items-center lg:grid-cols-2 " >
    <Welcome
    textOne={'We Are The Expert'}
    textTwo={`We Mean Serious Business`}
    element={BarElement}
    textThree={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nulla bibendum, semper nisi sed, volutpat massa.`}
    />
    <div>
    <Image source={AssetThree} className="w-full mx-auto " />
    </div>

  </div>
</section>
{/* fifth section */}
<section className="bg-[#000000] h-fit  my-[4rem]" > 
  <div className="max-w-[85rem] mx-auto " >
    <div className="flex flex-col place-content-center gap-[3rem]">
    <Heading Span={`Step By Step Guide`} heading={`Easy Steps to Success`} />

        <div className="grid p-2 grid-cols-[repeat(auto-fit,minmax(20rem,auto))] gap-6">

        {
            createWallet.map((sec,index)=>(
              <Steps key={index} keyValue ={index} source={sec.image} heading={sec.heading} paragraph={sec.paragraph} />
            ))
          }
        </div>
        <div className="mx-auto"><ButtonTwoWhite>Learn More</ButtonTwoWhite></div>
    </div>
  </div>
</section>
{/* sixth section */}
<section className="bg-[#000000] h-fit"  > 
  <div className="max-w-[85rem] bg-[#000000] mx-auto" >
    <div>
      <Heading Span={`Our Features`} heading={`Property Of The Online`} />
      <div className="my-9 grid lg:grid-cols-3 bg-[#000000] ">
        <div>
          {
            propertyOne.map((property,index)=>(
              <Property key={index} source={property.image} heading={property.heading} paragraph={property.paragraph} />
            ))
          }
        </div>
        <div className="">
            <div className=" mx-auto p-2 max-w-[30rem] ">
            <Image  source={AssetFour}/>
            </div>
        </div>
        <div>
        {
            propertyTwo.map((property,index)=>(
              <Property key={index} source={property.image} heading={property.heading} paragraph={property.paragraph} />
            ))
          }
        </div>
      </div>
    </div>
    <div className="flex w-full mx-auto  flex-wrap flex-col md:flex-row justify-between">
      {
        rating.map((ra,index)=>(
          <Review key={index} rate={ra.rate} award={ra.award} source={ra.image} />
        ))
      }
    </div>
  </div>
</section>
{/* seventh section */}
<section className="bg-[#000000] h-fit grid place-content-center" > 
  <div className="max-w-[85rem] mx-auto" >
    <Heading Span={'Our Expert'} heading={'Experienced Expert In Cryptize'} />
    <div className="flex mx-auto justify-between flex-wrap place-content-center gap-[2rem] p-4">
      {
        executive.map((property,index)=>(
          <Experts
          key={index}
          image={property.image}
          name={property.name}
          role={property.role}
          facebook={property.facebook}
          twitter={property.twitter}
          pinterest={property.pinterest}
          />
        ))
      }
    </div>
  </div>
</section>
{/* eight section */}
<section className="bg-[#000000] h-fit my-[4rem] grid place-content-center" > 
  <div className="max-w-[85rem] mx-auto " >
    <div className=" items-center flex flex-col gap-[1rem] my-[6rem] md:flex-row">
    <Welcome 
        textOne={'Testimonials'}
        textTwo={'What Clients Say About Us'}
        textThree={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nulla bibendum, semper nisi sed, volutpat massa. Suspendisse egestas purus mauris.'}
         />
         <div className=" overflow-hidden basis-[100%] p-[3rem] bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700" >
         <Slider {...settings} className=" overflow-hidden text-center sm:text-left  p-[1rem] max-w-[20rem] sm:max-w-[30rem] mx-auto "  >
       {
          users.map((client,index)=>(

            <CarouselCard key={index} role={client.role} image={client.image} name={client.name} text={client.text}/>
          ))
        }
  </Slider>
         </div>

    </div>
  </div>
</section>

<section className="bg-[#000000] my-[4rem] h-fit grid place-content-center" > 
  <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row gap-2 items-center" >
  <Welcome 
        textOne={'Get In Touch'}
        textTwo={'Send Us A Message'}
        textThree={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nulla bibendum, semper nisi sed, volutpat massa. Suspendisse egestas purus mauris, blandit lobortis tortor.'}
         />
         <ContactForm/>
  </div>
</section>
{/* LAST SECTION */}
<section className=" h-fit flex items-center " >
  <div className=" w-full  h-fit py-[4rem] bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700">
  <div className=" text-center md:text-left max-w-[70rem] gap-3 mx-auto grid md:grid-cols-2 items-center" >
  <Welcome 
        textTwo={'Tools For Better Crypto Trading & Transactions'}
        textThree={`Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Maecenas eget
         nulla bibendum, semper nisi sed, volutpat massa.`}
         />
         <div className="grid">
         <button className=" place-self-center lg:place-self-end bg-black hover:bg-transparent transition-colors duration-300 hover:border-white border-black border-[.01rem] p-4 w-fit text-nowrap outline-none " >Get Started
         </button>

         </div>
  </div>
  </div> 
</section>
    </div>
  )
}

export default Home
