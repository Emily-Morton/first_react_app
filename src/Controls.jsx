import React from 'react'

function Controls({value, setter}) {
  console.log(value);

  return (
    <>
      {/* value could be used here if necessary */}

      {/* These get access to it via the setter, which is best practice */}
      <button onClick={() => setter((value) => value - 1)}>-</button>
      <button onClick={() => setter((value) => value + 1)}>+</button>
    </>
  );
}

export default Controls;