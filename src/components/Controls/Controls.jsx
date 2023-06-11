import React from "react";
import MyButton from "./MyButton/MyButton";

// const controls = [
//   { label: "U", id: "btn-up", dx: 0, dy: -3, needBr: true },
//   { label: "L", id: "btn-left", dx: -3, dy: 0, needBr: false },
//   { label: "R", id: "btn-right", dx: 3, dy: 0, needBr: true },
//   { label: "D", id: "btn-down", dx: 0, dy: 3, needBr: false },
// ];

const Controls = (props) => {
  const moveDelta = props.moveDelta;
  return (
    <div id="controls-wrapper">
      <MyButton
        label="U"
        id="btn-up"
        dx={-3} dy={0}
        moveDelta={moveDelta}
      />
      <br />
      <MyButton label="L" id="btn-left" dx={-3} dy={0} moveDelta={moveDelta} />
      <MyButton label="R" id="btn-right" dx={3} dy={0} moveDelta={moveDelta} />
      <br />
      <MyButton label="D" id="btn-down" dx={0} dy={3} moveDelta={moveDelta} />
    </div>
  );
};
export default Controls;
