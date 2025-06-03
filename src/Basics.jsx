import { useState } from "react";

export {
  OneComponent,
  TwoComponent
}

const initialCar = {
  _id: 1, 
  name: "Ferrari",
  bhp: 123
}
const carToAdd = {
  _id: 2, 
  name: "Bugatti",
  bhp: 123
}

function OneComponent(){
  const [cars, setCars] = useState([initialCar])

    const removeCar = (id) => {
    const idx = cars.findIndex((item) => item._id === id);
    setCars([...cars.slice(0, idx), ...cars.slice(idx + 1)]);
  };

  return (
      <div>
      <ul>
        {cars.map(({ name, bhp, _id }) => (
          <li key={_id}>
            {name} ({bhp}) <button onClick={() => removeCar(_id)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCars([...cars, carToAdd])}>Add Bugatti</button>
    </div>
  )

}

function TwoComponent() {
  const [count, setCount] = useState(0);

  function increment(){
    // bad
    // setCount(count + 1);
    // setCount(count + 1);

    // good
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>good +</button>
    </>
  );
}