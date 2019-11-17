

const initState = {
username : '',
email : '',
password : ''
}
    

export const authReducer = (state = initState,action) =>{
    switch(action.type){
        
        case "SIGNIN_SUCCESS":
                console.log("idhar agya")
               
                           
                           return action.payload
    //    case "SIGNIN_SUCCESS_JWT":
    //             console.log("idhar agya jwtt")
               
                           
    //             return action.payload
        case "SIGNIN_FAILED":
        console.log("failed")
        return {
            ...state,
            signinmessage : action.payload
        }                  
            

case "SIGNUP_SUCCESS":
    console.log("idhar agya")
               return action.payload
               case "SIGNUP_FAILED":
                console.log("idhar agya")
                return {
                    ...state,
                    signupmessage : action.payload
                } 


case "SIGNINCOMPANY_SUCCESS":
    console.log("idhar agya com")
               
               return action.payload
 case "SIGNINCOMPANY_FAILED":
                console.log("idhar agya com")
                           
                return {
                    ...state,
                    signincompmessage : action.payload
                } 

case "SIGNUPCOMPANY_SUCCESS":
                    console.log("idhar agya")
                    console.log(action.payload)
                    return action.payload
 case "SIGNUPCOMPANY_FAILED":
console.log("idhar agya")
    console.log(action.payload)
    return {
        ...state,
        signincompmessage : action.payload
    } 
      
    case "UPDATE_STUDENT_RPOFILE":
        console.log("agya")
        return {
            ...state,
            
                profile : action.payload
            
        }                

case "Logged Out":
    console.log("horha hai")
    
    return initState

 

default:
    return state
}}
   