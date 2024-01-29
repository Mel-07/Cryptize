import { useState } from "react"
import { useEffect } from "react"
import Popup from '../componets/Popup'

function ContactForm() {

  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [valueButton, setButton] = useState(false)
  const [submitPopup, setSubmitPopup]= useState(false)

  useEffect(()=>{
    const firstRegx = /^[a-zA-Z]{3,}$/i;
    const lastRegx = /^[a-zA-Z]{3,}$/i;
    const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const messageRegx = /^[a-zA-Z0-9]{2,}$/i;
    const isValid = firstRegx.test(firstName) && lastRegx.test(lastName) && emailRegx.test(email) && messageRegx.test(message);
    checkValidity(isValid)
  },[firstName,lastName,email,message])

  function checkValidity (isValid){
    setButton(isValid);
  }

  return (
    <div className=" basis-[100%] w-full p-3 md:place-self-end ">
      {
        submitPopup && <Popup  overEvent={setSubmitPopup}/>
      }
      <div className=" p-[1rem] lg:p-[4rem] bg-gradient-to-tr from-purple-500 via-violet-600 to-blue-700">
        <form action="" onSubmit={(e)=>{
          e.preventDefault()
          setSubmitPopup(true)
        }}>
            <div className=" grid gap-4 ">
                <div className="flex  md:flex-row flex-col gap-4 item-center">
                    <div className="w-full">
                        <input type="text" placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)} value={firstName} className=" w-full outline-none autofill:bg-black placeholder:text-white bg-black p-4" />
                    </div>
                    <div className="w-full">
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)} className=" w-full outline-none placeholder:text-white bg-black p-4" />
                    </div>
                </div>
                <div>
                <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} className=" outline-none placeholder:text-white  bg-black p-4 w-full" />
                </div>
                <div>
                    <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Message" className=" placeholder:text-white h-[10rem]  outline-none bg-black p-4 w-full" name=""  id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                  <button  type='submit' disabled={valueButton ? false : true  } className={` disabled:text-gray-700 disabled:hover:bg-black disabled:hover:border-black bg-black hover:bg-transparent transition-colors duration-300 hover:border-white border-black border-[.01rem] p-4 w-[50%] outline-none `} >Send Message</button>
                </div>

            </div>
        </form>

      </div>
    </div>
  )
}

export default ContactForm
