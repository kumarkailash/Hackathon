import firebase from '../../Config/Firebase/Firebase';
import { pathToFileURL } from 'url';




const LoginFunction = (data) => {
    console.log(data)
    return async dispatch => {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(res => {
            dispatch({ type: "loginSucess" })
        }).catch(err => {
            dispatch({ type: "Error", payload: err.code })

            setTimeout(() => {
                dispatch({ type: "hideError", })
            }, 3000)
        })
    }
}
const SingnUpFunction = (data,path) => {
    console.log(data)
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
            firebase.firestore().collection("AllUsers").doc(res.user.uid).set(data).then(res => {
                dispatch({ type: "signUpSucess" })
                path.push("/login")
            })
        }).catch(err => {
            dispatch({ type: "Error", payload: err.code })
            setTimeout(() => {
                dispatch({ type: "HideError" })
            }, 3000)
        })
    }
}


const addData = (data) => {
    return async dispatch => {
        firebase.firestore().collection("AllData").add(data).then(res => {
            dispatch({ type: "add", payload: data })
        }).catch(err => {
            dispatch({ type: "Error", payload: err.code })

            setTimeout(() => {
                dispatch({ type: "hideError", })
            }, 3000)
        })
    }
}

const Logout = () => {
    alert("working")
    return async dispatch => {
        await firebase.auth().signOut().then(() => {
            // console.log('Signed Out');
            dispatch({ type: 'logout' })
            
        }, function (error) {
            console.error('LogoutError', error);
        });
    }
}

export {

    LoginFunction,

    SingnUpFunction,
    addData,
    Logout
}