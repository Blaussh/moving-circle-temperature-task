import React, { useState } from "react";
import "./MyButton.css";

function MyButton(props) {
  const [isClicked, setIsClicked] = useState(false)
  const { moveDelta, dx, dy, id } = props;
  let intervalId = null;

  const handleMouseDown = (event, id, dx, dy, moveDelta) => {
    setIsClicked(true);

    intervalId = setInterval(() => {
      // Perform the desired action continuously
      if (isClicked) {
        moveDelta(dx, dy);
      }
    }, 1000); // Adjust the interval duration as needed
  };

  const handleMouseUp = () => {
    // setIsClicked(false);
    // clearInterval(intervalId);
  };

  return (
    <button onMouseDown={(event) => handleMouseDown(event, id, dx, dy, moveDelta)} onMouseUp={handleMouseUp} id={props.id} className="btn-arrow">
      {props.label}
    </button>
  );
};

export default MyButton;
