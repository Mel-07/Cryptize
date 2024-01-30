import { createContext,useState } from "react"
import save from '../assets/img/icon_1_2.png'
import support from '../assets/img/icon_2_2.png'
import exchange from '../assets/img/icon_3.png'
import wallet from '../assets/img/icon_4_2.png'
import recurring from '../assets/img/icon_5_2.png'
import cart from '../assets/img/icon_5_3.png'
import mobile from '../assets/img/icon_6_2.png'
import card from '../assets/img/icon_7_3.png'
import star from '../assets/img/icon_9_3.png'
import hands from '../assets/img/icon_10_3.png'
import user from '../assets/img/icon_8_3.png'
// client
import clientOne from '../assets/img/portrait-of-young-businessman-standing-in-conferen-WZTJAPZ.jpeg'
import clientTwo from '../assets/img/portrait-of-beautiful-woman-35ZXLWE.jpeg'
import clientThree from '../assets/img/portrait-KUEFHPY.jpeg'
// executive
import professionalOne from '../assets/img/professional-businessman-portrait-in-a-studio-WUFDDGT-1.png'
import professionalTwo from '../assets/img/professional-businessman-portrait-in-a-studio-TP6K6W7-1.png'
import professionalThree from '../assets/img/businessman-adult-portrait-occupation-concept-LY785SH-1.png'
// icon
import { FaFacebookF,FaXTwitter,FaPinterestP } from "react-icons/fa6";


const MainContext = createContext()


function MainProvider({children}) {
    const [submitPopup, setSubmitPopup]= useState(false)
    


    const routePath =[
        {
            name:'Home',
            path:'/'
        },
        {
            name:'About',
            path:'about'
        },
        {
            name:'Services',
            path:'service'
        },
        {
            name:'Pages',
            path:'pages'
        },
        {
            name:'Contact',
            path:'contact'
        },
    ]
    const buttonPath = [
        {
            name:'Log In',
            path:'login'
        },
        {
            name:'Sign Up',
            path:'signup'
        },
    ]
    const createWallet = [
        {
            image:wallet,
            heading:'Create Your Wallet',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
            image:card,
            heading:'Create Your Wallet',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
            image:cart,
            heading:'Create Your Wallet',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
    ]
    const secured =[
        {
            image:save,
            heading:'Save & Secure',
            paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.',
            btnText:`Learn More`
        },
        {
            image:support,
            heading:'24/7 Supports',
            paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.',
            btnText:`Learn More`
        },
        {
            image:exchange,
            heading:'Quick Exchange',
            paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.',
            btnText:`Learn More`
        },
        {
            image:wallet,
            heading:'Secure Wallet',
            paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.',
            btnText:`Learn More`
        },
        {
            image:recurring,
            heading:'Recurring Buys',
            paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.',
            btnText:`Learn More`
        },
        {
            image:mobile,
            heading:'Mobile Apps',
            paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.',
            btnText:`Learn More`
        }
    ]

    const bar = [
        {
            name:'Experience',
            perValue:'90',
        },
        {
            name:'Technique',
            perValue:'93',
        },
        {
            name:'Strategy',
            perValue:'87',
        },
        {
            name:'Team',
            perValue:'95',
        },
    ]

    const propertyOne = [
        {
            image:user,
            heading:'Free Trial Account',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.',
        },
        {
            image:hands,
            heading:'Affordable Plans',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.',
        },
    ]

    const propertyTwo = [
        {
            image:star,
            heading:'Guided By Experts',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.',
        },
        {
            image:support,
            heading:'24/7 Supports',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.',
        },
    ]

    const rating = [
        {
            image:hands,
            rate:100,
            award:`Worldwide Office`,
        },
        {
            image:hands,
            rate:52,
            award:`Award Winning`,
        },
        {
            image:hands,
            rate:1000,
            award:`Active User`,
        },
        {
            image:hands,
            rate:84,
            award:`Crypto Experts`,
        },
    ]
    
    const executive = [
        {
            name:'Adam Stark',
            role:'CEO Cryptize',
            image: professionalOne,
            facebook:<FaFacebookF className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-blue-600  rounded-full '/>,
            twitter:<FaXTwitter className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-blue-300   rounded-full ' />,
            pinterest:<FaPinterestP className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-red-500   rounded-full '/>
        },
        {
            name:'Paul John',
            role:'Branch Manager',
            image:professionalTwo,
            facebook:<FaFacebookF className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-blue-600   rounded-full ' />,
            twitter:<FaXTwitter className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-blue-300   rounded-full ' />,
            pinterest:<FaPinterestP className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-red-500   rounded-full '/>
        },
        {
            name:'Steve Arlong',
            role:'Crypto Expert',
            image:professionalThree,
            facebook:<FaFacebookF className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-blue-600   rounded-full ' />,
            twitter:<FaXTwitter className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-blue-300   rounded-full ' />,
            pinterest:<FaPinterestP className=' p-[1rem] w-[3.5rem] h-[3.5rem] bg-black hover:bg-red-500   rounded-full '/>
        }
    ]
    const users =[
        {
            text:'Aenean egestas metus et magna pretium lacinia. Aenean vitae metus tortor. Sed vel quam quam. Fusce dignissim libero quis varius fermentum. Ut eget porttitor orci, vel porta massa. Aliquam posuere nulla mi, eu vestibulum nisi pellentesque sit amet. Aliquam venenatis tellus eu ipsum faucibus mattis. Phasellus gravida vitae lacus sit amet tincidunt.',
            role:'Client',
            image:clientOne,
            name:'Abraham Park'
        },
        {
            text:'Aenean egestas metus et magna pretium lacinia. Aenean vitae metus tortor. Sed vel quam quam. Fusce dignissim libero quis varius fermentum. Ut eget porttitor orci, vel porta massa. Aliquam posuere nulla mi, eu vestibulum nisi pellentesque sit amet. Aliquam venenatis tellus eu ipsum faucibus mattis. Phasellus gravida vitae lacus sit amet tincidunt.',
            role:'Client',
            image:clientTwo,
            name:'April Timm'
        },
        {
            text:'Aenean egestas metus et magna pretium lacinia. Aenean vitae metus tortor. Sed vel quam quam. Fusce dignissim libero quis varius fermentum. Ut eget porttitor orci, vel porta massa. Aliquam posuere nulla mi, eu vestibulum nisi pellentesque sit amet. Aliquam venenatis tellus eu ipsum faucibus mattis. Phasellus gravida vitae lacus sit amet tincidunt.',
            role:'Client',
            image:clientThree,
            name:'Jordan Mike'
        }
    ]

  return (
    <MainContext.Provider value={
        {
            routePath,
            buttonPath,
            secured,
            bar,
            createWallet,
            propertyOne,
            propertyTwo,
            rating,
            executive,
            users
        }
    } >
      {children}
    </MainContext.Provider>
  )
}

export {MainContext,MainProvider}
