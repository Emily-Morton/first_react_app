
function DoubleDisplay({value = 0, setter= () => {}}) {
  return (<>
  <div>The double of {value} is {value * 2}</div>
  <button onClick={()=>setter(value * 2)}>Double it</button>
  </>)
}

export default DoubleDisplay;