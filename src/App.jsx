// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import FirstComponent from "./FirstComponent.jsx";
import SecondComponent from "./SecondComponent.jsx";

function App() {
  // const [count, setCount] = useState(0)
  // return null
  // const [count, setCount] = useState(0)
  // return null
  return (
    <>
      <div>
        <h1>My App</h1>
        <FirstComponent name="everyone"/>
        <p>Hello World</p>
      </div>
      <div>
        <SecondComponent firstName={"Pika"} age={10} />
      </div>
    </>
  );
}

export default App;
