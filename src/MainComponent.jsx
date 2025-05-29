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
      <button onClick={() => setCount(count +1)}>Click Me +</button>
      <button onClick={() => setCount(count -1)}>Click Me -</button>
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