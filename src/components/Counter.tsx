import { Button } from "primereact/button";
import { useState } from "react";
import HistoryItems from "./HistoryItems";
import type { keyTypes } from "../types/types";

type Props = { keyValue: keyTypes };

const Counter = ({ keyValue }: Props) => {
  const [counter, setCounter] = useState([{ id: Math.random(), value: 0 }]);

  function handleIncrement() {
    setCounter((prevCounter) => [
      { id: Math.random(), value: 1 },
      ...prevCounter,
    ]);
  }

  function handleDecrement() {
    setCounter((prevCounter) => [
      { id: Math.random(), value: -1 },
      ...prevCounter,
    ]);
  }

  const counterValue = counter.reduce(
    (previousValue, currentValue) => previousValue + currentValue.value,
    0
  );

  return (
    <div className="content-container">
      <div className="counter-content">
        <div className="counter">{counterValue}</div>
        <div className="buttons-container">
          <Button
            icon="pi pi-minus"
            label="Decrease"
            onClick={handleDecrement}
          />
          <Button
            icon="pi pi-plus"
            label="Increase"
            onClick={handleIncrement}
          />
        </div>
      </div>
      <div className="history-content">
        <ul className="history">
          {counter.map((counterObject, index) => (
            <HistoryItems
              counter={counterObject.value}
              key={
                keyValue === "perfect"
                  ? counterObject.id
                  : keyValue === "index"
                  ? index
                  : keyValue === "random"
                  ? Math.random()
                  : undefined
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
