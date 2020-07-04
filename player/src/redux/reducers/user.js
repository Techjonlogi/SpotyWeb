const defaultState = {
    loginInfo : {
        username: "",
        password: "",
    },

    error:{
        username:"",
        password: ""
    },

    currentUser : {
        username: "",
        token: "",
    },

    loginStatus: "",

    registerStatus: "" 

}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case'userLogin': {
            return{
                ...state,
                loginStatus : state.loginStatus = payload
            }
            
        }

        case 'userRegister':{
            return{
                ...state,
                registerStatus: state.registerStatus = payload
            }
        }

        case 'updateLoginStatus': {
            return{
                ...state,
                loginStatus : state.loginStatus = payload
            }
        }

        default:
            return state;
    }
}

export default reducer;