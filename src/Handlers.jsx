export {
  OnClickHandler,
  OnHoverHandler
}

function OnClickHandler({g = "hello"}) {


  const handler = (greeting="") => console.log(greeting);

  return <button onClick={() => handler(g)}>Click Me</button>
  //susupend handler in function if passing arguements
}

function OnHoverHandler() {

  function changeBackground(e) {
    e.target.style.background = 'red';
  }

  return (
    <div className="App">
      <button onMouseOver={changeBackground}>Hover over me!</button>
    </div>
  );
}