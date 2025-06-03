import {useState} from "react"

export {
  CounterComponent,
  AddX
}

function CounterComponent() {

  let [count, setCount] = useState(0);


  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count +1)}>ADD +1</button>
      <button onClick={() => setCount(count -1)}>SUBTRACT -1</button>
    </>
  );
}

function AddX(){
  let [text, setText] = useState("x")

  return (<>
  <p>{text}</p>
  <button onClick={() => setText(text + "x")}>Add X</button>
  </>)
}