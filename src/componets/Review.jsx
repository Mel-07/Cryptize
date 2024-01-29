import CountUp from 'react-countup';

function Review({source,rate,award}) {
  return (
    <div className="text-center ">
      <div className="flex flex-col  p-2 gap-[1rem]">
        <div className="basis-10 "><img className="mx-auto" width={'50rem'} src={source} alt="img" /></div>
        <CountUp start={0} end={rate} duration={3} enableScrollSpy={true} suffix="+" className="text-[3rem] basis-10" />
        <div className="basis-10 "><p>{award}</p></div>
      </div>
    </div>
  )
}

export default Review
