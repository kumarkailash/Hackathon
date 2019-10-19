
import React from "react";
// import { MDBInput } from "mdbreact";
import {MDBInput} from 'mdbreact';



class Input extends React.Component {
 
    

    render() {
        return (
            <div>
                {/* <MDBInput   label={this.props.label} /> */}



                <MDBInput
                    label={this.props.label}
                    icon={this.props.icons}
                    group
                    type={this.props.type }
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.props.onChange}
                  />




            </div>
        )
    }
}
export default Input;


