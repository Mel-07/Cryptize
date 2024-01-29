import ButtonTwoWhite from "./ButtonTwoWhite"
import Span from "./Span"
function Welcome({textOne,textTwo,textThree,element}) {
  return (
    <div className={`flex flex-col p-2 gap-7 ${textOne && 'gap-4 text-center lg:text-left '} `}>
      <Span>{textOne !== '' && textOne}</Span>
      <h1 className=" break-words text-[4rem]">{textTwo}</h1>
      <p>{textThree}</p>
      {element !== '' && element}
    </div>
  )
}

export default Welcome
