import footerLogo from '../assets/img/Asset-2_logo.png'

function Footer() {
  return (
    <>
    <footer className='bg-[#000000] py-[1rem]' >
        <div>
            <img className='max-w-[15rem] max-h-[15rem] mx-auto mb-[2rem] ' src={footerLogo} alt="Logo" />
            <p className=' mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula.</p>
        </div>

        <ul className='flex flex-col md:flex-row py-[1rem] gap-[2rem] items-center justify-between '>
            <li>Yusuf Dambazua Crescent, Kubwa</li>
            <li>EmekaOkocha07@gmail.com</li>
            <li>+234 9068059186</li>
            <li>09.00 AM - 17.00 PM</li>
        </ul>
    </footer>
      
    </>
  )
}

export default Footer
