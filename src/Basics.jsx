import { useState, useEffect, useCallback } from "react";

export {
  OneComponent,
  TwoComponent
}

// const initialCar = {
//   _id: 1,
//   name: "Ferrari",
//   bhp: 123
// }
// const carToAdd = {
//   _id: 2,
//   name: "Bugatti",
//   bhp: 123
// }

function OneComponent(){
  const [cars, setCars] = useState([]);
  

  // const removeCar = (id) => {
  //   const idx = cars.findIndex((item) => item._id === id);
  //   setCars([...cars.slice(0, idx), ...cars.slice(idx + 1)]);
  // };

  const getData = useCallback( async () => {
    try {
      const resp = await fetch('https://carsapp-production.up.railway.app/api/v1/cars');
      const data = await resp.json();
      setCars(data);
    } catch (err) {
      console.log('error', err);
    }
  }, [setCars])

  useEffect(() => {
    getData();
  },[cars, getData]);


  if (!cars.length) return <p>you have no cars</p>

  return (
    <div>
      <ul>
        {cars.map(({ name, bhp, _id }) => (
          <li key={_id}>
            {name} ({bhp})
          </li>
        ))}
      </ul>
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