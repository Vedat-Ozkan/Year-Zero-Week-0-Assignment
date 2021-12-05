import React from "react";

function Win(props) {
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  return (<div>
    {console.log(props.arr, [1,2,3,4,5,6,7,8,0])}
    <h1>{arraysEqual(props.arr, [1,2,3,4,5,6,7,8,0]) && "You WIN!"}</h1>
  </div>)
};

export default Win;
