import React from 'react'
import {Input,Button,Paper} from '../../Components/Index'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import userLogo from "../../Images/userlogo.png"
import firebase from "../../Config/Firebase/Firebase"
import {Link} from "react-router-dom"

import "./signUp.css"

import { connect } from 'react-redux'
import { SingnUpFunction} from '../../Store/Action/Action'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }

    }
   

    getImage = async (e) => {
        let userImage = e.target.files[0].name
        let ref = firebase.storage().ref('/').child(`usersImage/${userImage}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            console.log(url)
            this.setState({
                profile: url
            })
        })
    }



    render() {
        return (
            <div>

            <div style={{ marginTop: '50px' }}>
                <Grid justify='center' container spacing={3}>
                    <Grid item xs={12}  sm={12} md={10} lg={4}>
                        <Paper>
                            <Typography variant="h4" align='center' >

                                <img  width="100px"  height="100px" src={userLogo} /> <br/>
                             <h3  className="signupheading" style={{color:"blue", fontFamily:""}}>
                                   Signup Form
                                 
                                 </h3> 
 
                        </Typography>

                            <Input icons="envelope" label='Enter Your Email' type='email' onChange={(e) => this.setState({ email: e.target.value })} />
                           
                            <Input icons="lock" label='Enter Your Password' type='password' onChange={(e) => this.setState({ password: e.target.value })} />
                           
                           <Input type="file"  onChange={(e)=>this.getImage(e) }  />
                            <div style={{ textAlign: 'center' }}>
                                <Button onClick={(data,path) => this.props.SingnUpFunction(this.state, this.props.history)}>
                                    SignUp
                                
                                </Button>
                                <Link to="login">
                                <h5>Already Have an Account</h5>
                                
                                </Link>

                            </div>
                        </Paper>
                    </Grid>
                </Grid>

                <div id='snackbar' className={this.props.className}>{this.props.err}</div>
            </div>
 

        </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        err: state.err,
        className: state.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SingnUpFunction: (data, path) => dispatch(SingnUpFunction(data, path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)