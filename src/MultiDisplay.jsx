import React from 'react'

function MultiDisplay({value, num}) {
  return (
      <div>{value} multiplied by {num} is {value * num}</div>
  );
}
export default MultiDisplay;