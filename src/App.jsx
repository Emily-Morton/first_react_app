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
import {OnClickHandler, OnHoverHandler} from "./Handlers.jsx";
import {CounterComponent} from "./MainComponent.jsx";

function App() {

  return (
    <>
      <div>
        <h1>My App</h1>
      <ProductSurround>
        <FirstComponent text="hello" showAsHeading/>
      </ProductSurround>
      </div>
      <div>
        <SecondComponent firstName={"Pika"} age={10} />
      </div>
    <SubComponent
    left={<i className="fa-solid fa-star"></i>} text=" Emily " right={<i className="fa-solid fa-star"></i>} >
    </SubComponent>

    <ListComponent data={[{name: "emily", age:36}, {name:"curt", age:35}, {name: "hoku", age:10}, {name: "pika", age:10}]}></ListComponent>

    <OnClickHandler></OnClickHandler>
    <OnHoverHandler></OnHoverHandler>

    <CounterComponent></CounterComponent>
  </>
  );
}

export default App;
