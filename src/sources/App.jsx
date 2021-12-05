import React, { useState } from "react";
import Num from "./num";
import Win from "./win";

function App() {
  // stackoverflow shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  
  const [arr, setArr] = useState(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 0]))

  function nextTo(arr, a, b) {
    if ((arr[a-1] === arr[b]) || (arr[a+1] === arr[b]) 
    || (arr[a-3] === arr[b]) || (arr[a+3] === arr[b])) {
      return true
    }
    return false
  }

  function changePlace(from) {
    setArr(prevItems => {
      if (nextTo(prevItems, from, prevItems.indexOf(0))) {
        let a = prevItems[from]
        prevItems[prevItems.indexOf(0)] = a
        prevItems[from] = 0
      }
      return [...prevItems]
    })
    console.log(arr);
  }
  return <div>
    <Win key="win" arr={arr}/> 
    {arr.map((item, index) => (
      <Num
        key={index}
        title={item}
        id={index}
        changePlace={changePlace}
      />
    ))}
  </div>
}

export default App;
