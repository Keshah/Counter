import React, { useState, useEffect } from 'react';
import styles from "./App.css";


 function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
  setCount((prevCount) => prevCount + 1);
  }


  useEffect(() => {
  console.log(count);
  }, [count]);


  return (
  <div className="Counter-box">
  <span className="counter">{count}</span>
  <button className="counter-button" onClick={updateCount}>Click!</button>
  </div>
)
};

export default Counter
