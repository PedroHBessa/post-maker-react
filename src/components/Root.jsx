import { useState } from "react";
import Menu from "./Menu";
import Panel from "./Panel";

function Root() {
  const [display, setDisplay] = useState("panel-btn-content display-none");
  const [isActive, setIsActive] = useState(true);

  const ChangeDisplay = () => {
    if (isActive) {
      setDisplay("panel-btn-content");
      setIsActive(!isActive);
    } else {
      setDisplay("panel-btn display-none");
      setIsActive(!isActive);
    }
  };

  const [item, setItem] = useState(
    <div>
      <div className="panel-item">
        <img src="https://via.placeholder.com/55x55" alt="" />

        <div className="panel-text">
          <div contentEditable="true" className="text1">
            <span>TIME1</span>
            <span>VS</span>
            <span>TIME2</span>
          </div>
          <div contentEditable="true" className="text2">
            TEXTO TEXTO EXEMPLO
          </div>
        </div>
        <div className="panel-time">18:25</div>

        <img src="https://via.placeholder.com/100x55" alt="" />
      </div>
    </div>
  );
  const [items, setItems] = useState([]);
  console.log(items);

  const addLine = () => {
    setItems([...items, item]);
  };

  const remLine = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div className="container">
      <Menu changeDisplay={ChangeDisplay} addLine={addLine} remLine={remLine} />
      <Panel display={display} items={items} />
    </div>
  );
}

export default Root;
