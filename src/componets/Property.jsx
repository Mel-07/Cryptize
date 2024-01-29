
function Property({source,paragraph,heading,keyValue}) {
  return (
    <div key={keyValue} className={` ${heading ==='Affordable Plans' || heading === 'Free Trial Account'? ' text-center lg:text-right':' text-center lg:text-left '} bg-[#000000] transition-colors duration-500  `}>
      <div className="p-[2.5rem] grid gap-5 grid-rows-subgrid">
        <div className={`grid`}>
        <img src={source} width={'50rem'} alt="image" className={`${heading ==='Affordable Plans' ? 'md:ml-auto md:place-self-end ' : heading === 'Free Trial Account' &&  ' md:place-self-end md:ml-auto'} mx-auto lg:mx-[0]  `} />
        </div>
        <h4 className="text-[1.5rem]">{heading}</h4>
        <p className="text-gray-400">{paragraph}</p>
      </div>
    </div>
  )
}

export default Property
