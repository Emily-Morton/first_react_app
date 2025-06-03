
function DoubleDisplay({value = 0, setter= () => {}}) {
  return (<>
  <div>The double of {value} is {value * 2}</div>
  <button onClick={()=>setter(value * 2)}>x2</button>
  </>)
}

export default DoubleDisplay;

