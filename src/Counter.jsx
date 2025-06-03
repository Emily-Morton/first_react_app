import React, { useState } from "react";
import Controls from "./Controls";
import Display from "./Display";
import DoubleDisplay from "./DoubleDisplay.jsx";
import MultipleDisplay from "./MultipleDisplay.jsx";

function Counter() {
  const [value, setter] = useState(0);


  return (
    <>
        <Display value={value} />
        <Controls value={value} setter={setter} />
        <hr />
        <DoubleDisplay value={value} setter={setter}/>
        <MultipleDisplay num={3} value={value} setter={setter}/>
        <MultipleDisplay num={7} value={value} setter={setter}/>
        <MultipleDisplay num={14} value={value} setter={setter}/>
        <MultipleDisplay num={78} value={value} setter={setter}/>

    </>
  );
}
export default Counter;
