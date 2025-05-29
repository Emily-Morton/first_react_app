// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import FirstComponent from "./FirstComponent.jsx";
import SecondComponent from "./SecondComponent.jsx";
import ProductSurround from "./ProductSurround.jsx";
import SubComponent from "./SubComponent.jsx";

function App() {
  // const [count, setCount] = useState(0)
  // return null
  // const [count, setCount] = useState(0)
  // return null
  return (
    <>
      <div>
      <ProductSurround>
        <h1>My App</h1>
      </ProductSurround>
        <FirstComponent text="hello" showAsHeading/>
        <p>Hello World</p>
      </div>
      <div>
        <SecondComponent firstName={"Pika"} age={10} />
      </div>
    <SubComponent 
    left={<i class="fa-solid fa-star"></i>} text=" Emily " right={<i class="fa-solid fa-star"></i>} >

    </SubComponent>

    </>
  );
}

export default App;
