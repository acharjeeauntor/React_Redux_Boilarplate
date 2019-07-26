import React from "react";
import {connect} from 'react-redux'

const Count = (props) => {
  return (
    <div>
            <h1>{props.counter}</h1>
    </div>
  );
};

function mapStateToProps(state) {
     return {
          counter:state.count
     }
}

export default connect(mapStateToProps)(Count);
