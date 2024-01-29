

function CarouselCard({text,role,image,name}) {
  return (
    <div>
      <div className="mb-3">
        <p>{text}</p>
      </div>
      <div className="flex items-center gap-3">
        <div><img src={image} className="w-[5rem] h-[5rem] rounded-full" alt="image" /></div>
        <div>
            <h4 className='text-[1.5rem]'>{name}</h4>
            <p className='text-[.7rem]'>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
