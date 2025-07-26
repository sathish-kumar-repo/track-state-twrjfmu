import "primereact/resources/themes/lara-dark-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import Counter from "./components/Counter";
import "./App.scss";
import {
  SelectButton,
  type SelectButtonChangeEvent,
} from "primereact/selectbutton";
import { useState } from "react";
import type { keyTypes } from "./types/types";

const COUNTER_OPTIONS: keyTypes[] = ["no", "index", "random", "perfect"];

function getName(counterOptions: keyTypes) {
  switch (counterOptions) {
    case "index":
      return "Used key as Index";
    case "perfect":
      return "Used key sync with item";
    case "random":
      return "Used random key (eg., Math.random())";
    default:
      return "No Key used in List";
  }
}

function App() {
  const [counterOptions, setCounterOptions] = useState<keyTypes>(
    () => (localStorage.getItem("counter") as keyTypes) || "no"
  );

  function handleCounter(e: SelectButtonChangeEvent) {
    if (e.value !== null) {
      setCounterOptions(e.value);
      localStorage.setItem("counter", e.value);
    }
  }

  return (
    <>
      <div className="container">
        <SelectButton
          value={counterOptions}
          onChange={handleCounter}
          options={COUNTER_OPTIONS}
          aria-label="Select counter key option"
        />
        <p>{getName(counterOptions)}</p>
        <Counter keyValue={counterOptions} />
      </div>
    </>
  );
}

export default App;
