
import MultiDisplay from "./MultiDisplay";

function MultipleDisplay({num, value = 0, setter= () => {}}) {
  return (<>
  <MultiDisplay value={value} num={num}/>
  <button onClick={()=>setter(value * num)}>x{num}</button>

  </>)
}

export default MultipleDisplay;

