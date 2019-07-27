import React from "react";
import { connect } from "react-redux";
import classes from "./control.module.css";

const Control = (props) => {
  return (
    <div className={classes.btn}>
      <button onClick={() => props.add()}>+Add</button>
      <button onClick={() => props.sub()}>-Sub</button>
      <button onClick={() => props.restart()}>Restart</button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    add: () => {
      dispatch({ type: "ADD" });
    },
    sub: () => {
      dispatch({ type: "SUB" });
    },
    restart: () => {
      dispatch({ type: "RESTART" });
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Control);
