const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    
    switch(action.type){
        case "LOGIN_ERROR":
            
            return{
                ...state,
                authError: "Login Unsuccessful"
            }
        case "LOGIN_SUCCESS":
            return{
                ...state,
                authError: null
            }
        case "SIGNOUT_SUCCESS":
            console.log("Sign out success");
            return state
        case "SIGNUP_SUCCESS":
            console.log("SignUp Successful")
            return{
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR":
            console.log("SignUp Unsucessful")
            return{
                ...state,
                authError: action.err.message
            }
        default: 
            return state
    }
}

export default authReducer;