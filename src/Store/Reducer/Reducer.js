const intail_state = {
    Signup: false,
    LognIn: false,
    userData:{},
    password:''
}
const Reducer = (state = intail_state, action) => {
    switch (action.type) {
        case "signUpSucess": return state
        case 'loginSucess': return state
        case 'Error':
            state.err = action.payload
            state.name = 'show'
            return { ...state, name: state.name, err: state.err.concat() }
        case 'hideError':
            state.err = ''
            state.name = 'snackbar'
            return { ...state, name: state.name, err: state.err.concat() }
        case "add":
        state.userData=action.payload
        return{...state,userData:state.userData}


        case "Logout" : return state
        
        default: return state
    }
}

export default Reducer