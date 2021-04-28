import { useState } from "react";
import Menu from "./Menu";
import Panel from "./Panel";

function Root() {
  const [display, setDisplay] = useState("panel-btn-content display-none");
  const [isActive, setIsActive] = useState(true);

  const ChangeDisplay = () => {
    if (isActive) {
      setDisplay("panel-btn-content");
      console.log(display);
      console.log(isActive);
      setIsActive(!isActive);
    } else {
      setDisplay("panel-btn display-none");
      console.log(display);
      console.log(isActive);
      setIsActive(!isActive);
    }
  };
  return (
    <div className="container">
      <Menu changeDisplay={ChangeDisplay} />
      <Panel display={display} />
    </div>
  );
}

export default Root;
