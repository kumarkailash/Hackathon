import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";


class BUtton extends React.Component{
  
render(){
    return(
<div>
<Fragment>
      <MDBBtn color="primary" onClick={this.props.onClick}>{this.props.children}</MDBBtn>
    </Fragment>
</div>

    )
}
}


export default BUtton;






