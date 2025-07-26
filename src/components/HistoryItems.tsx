import { useState } from "react";

interface Props {
  counter: number;
}

const HistoryItems = ({ counter }: Props) => {
  const [selected, setSelected] = useState(false);

  function handleSelect() {
    setSelected((prevState) => !prevState);
  }
  return (
    <li
      onClick={handleSelect}
      className={`history-items ${selected ? "active" : ""}`}
    >
      {counter}
    </li>
  );
};

export default HistoryItems;
