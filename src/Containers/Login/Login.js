import React from 'react'
import { Paper, Input, Button,NevBa } from '../../Components/Index'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import './login.css'
import { LoginFunction } from '../../Store/Action/Action'

import userLogo from "../../Images/userlogo.png"
import {Link} from "react-router-dom"
import firebase from '../../Config/Firebase/Firebase'

class Login extends React.Component{
    constructor(){
        super()
        this.state ={
            email:"",
            password:""
        }
    }


    componentDidMount() {
        let that = this
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
               that.props.history.push('/home')
            } 
        });
    }

render(){
    return(
            <div>

            <div>
                <div style={{ marginTop: '50px' }}>
                    <Grid justify='center' container spacing={3}>
                        <Grid item xs={12} sm={12} md={10} lg={4}>
                            <Paper>
                                <Typography variant="h4" align='center' >
                                    
                                <img  width="100px"  height="100px" src={userLogo} /> <br/>
                             <h3  className="signupheading" style={{color:"blue", fontFamily:""}}>
                                LogIn Form
                                 
                                 </h3> 
                            </Typography>

                                <Input  icons="envelope" label='Enter Your Email' type='email' onChange={(e) => this.setState({ email: e.target.value })} />
                                <Input icons="lock" label='Enter Your Password' type='password' onChange={(e) => this.setState({ password: e.target.value })} />
                                <div style={{ textAlign: 'center' }}>
                                    <Button  onClick={(data,path) => this.props.LoginFunction(this.state, this.props.history)}>
                                        login Now
                                    </Button>

                                    <Link to="/Signup">
                                <h5>Create A New Account</h5>
                                
                                </Link>

                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div id='snackbar' className={this.props.className}>{this.props.err}</div>
                </div>
            </div>
</div>
    )
}}
const mapStateToProps = state => {
    console.log(state)
    return {
        err: state.err,
        className: state.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        LoginFunction: (data, path) => dispatch(LoginFunction(data, path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)