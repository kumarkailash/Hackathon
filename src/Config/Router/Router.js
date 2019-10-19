
import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { Login, Home, SignUp, history ,} from '../../Containers/Index'
import firebase from '../Firebase/Firebase'
import {Drawer} from "../../Components/Index"

function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', }} />}
        />
    )
}



function PublicRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/home' />}
        />
    )
}

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false
        }

    }
    componentDidMount() {
        let that = this
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                that.setState({
                    authed: true
                })
            } else {
                that.setState({
                    authed: false
                })
            }
        });
    }



    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute authed={this.state.authed} path="/home" component={Home} />
                    <PublicRoute authed={this.state.authed} path="/login" component={Login} />
                    <PublicRoute authed={this.state.authed} path="/Signup" component={SignUp} />
                    <PrivateRoute authed={this.state.authed} path="/Drawer" component={Drawer} />


                    {/* <Route path="*" component={Notfound} /> */}

                </Switch>
            </Router>
        )
    }


}



export default Routers;