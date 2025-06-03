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
    e.target.style.background = '#747bff';
  }
  function removeBackground(e) {
    e.target.style.background = '';
  }


  return (
    <div className="App">
      <button onMouseEnter={changeBackground} onMouseLeave={removeBackground}>Hover over me!</button>
    </div>
  );
}