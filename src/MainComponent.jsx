import {useState} from "react"

export {
  CounterComponent
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