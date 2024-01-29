import CountUp from 'react-countup';

function Count({figure, text}) {
  return (
    <div className="p-[3rem] flex items-center gap-2">
      <CountUp enableScrollSpy={true} start={0} duration={2} suffix='+' end={figure} className="  text-[2.5rem] font-medium " />
      <p>{text}</p>
    </div>
  )
}

export default Count
