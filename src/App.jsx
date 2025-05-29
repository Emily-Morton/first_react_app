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
import ListComponent from "./ListComponent.jsx";

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
        <FirstComponent text="hello" showAsHeading/>
        <p>Hello World</p>
      </ProductSurround>
      </div>
      <div>
        <SecondComponent firstName={"Pika"} age={10} />
      </div>
    <SubComponent
    left={<i class="fa-solid fa-star"></i>} text=" Emily " right={<i class="fa-solid fa-star"></i>} >
    </SubComponent>

    <ListComponent data={[{name: "emily", age:36}, {name:"curt", age:35}]}></ListComponent>
  </>
  );
}

export default App;
