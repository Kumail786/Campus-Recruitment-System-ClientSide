import axios from 'axios'


//student Sign In Action
export const signUserIn = (credentials) =>{
        console.log('Action will despatced')
        
     try{ 
        return async(dispatch) =>{
            console.log(credentials)
           await axios.post("http://localhost:8000/users/login",credentials).then(res=>{console.log(res.data)
            dispatch({type : 'SIGNIN_SUCCESS',
                payload : res.data})
        }).catch(res=>{console.log(res)
            dispatch({type : 'SIGNIN_FAILED',
            payload : res})
        })}
    

}

catch{
console.log("Error")
}
}



//Student SignUp Action
    export const SignUserUp = (credentials) =>{
        console.log(credentials)
            console.log('Action will despatced')
            
         try{ 
            return async(dispatch) =>{
               await axios.post("http://localhost:8000/users/add",credentials).then(res=>{console.log(res.data)
                dispatch({type : 'SIGNUP_SUCCESS',
                    payload : res.data})
            }).catch(error=>{console.log(error)
                dispatch({type : 'SIGNUP_FAILED',
                    payload :error})
            })}
        
    
    }

catch{
console.log("error ayya")
}
} 

//Company SignIn
    
        export const signCompanyIn = (credentials) =>{
            console.log(credentials)
                console.log('Action will despatced')
                
             try{ 
                return async(dispatch) =>{
                    console.log("done")
                    console.log(credentials.companyemail)
                   await axios.post("http://localhost:8000/companies/login",credentials).then(res=>{console.log(res.data)
                    dispatch({type : 'SIGNINCOMPANY_SUCCESS',
                        payload : res.data})
                }).catch(error=>{
                    dispatch({type : 'SIGNINCOMPANY_FAILED',
                        payload : error})
                })}
            
        
        }
    
    catch{
console.log("error ayya")
    }
}

//signing up company

export const signCompanyUp = (credentials) =>{
    console.log(credentials)
        console.log('Action will despatced')
        
     try{ 
        return async(dispatch) =>{
           await axios.post("http://localhost:8000/companies/add",credentials).then(res=>{console.log(res.data)
            dispatch({type : 'SIGNUPCOMPANY_SUCCESS',
                payload : res.data})
        }).catch(error=>{
            dispatch({type : 'SIGNUPCOMPANY_FAILED',
                payload : error})
        })}
    

}

catch{
console.log("error ayya")
}
}


//automatically signin using jwt token student

// export const signUserInJWT = (id) =>{
//     console.log('Action will despatced')
    
//  try{ 
//     return async(dispatch) =>{
        
//        await axios.get(`http://localhost:8000/users/login/${id}`).then(res=>{console.log(res.data)
//         dispatch({type : 'SIGNIN_SUCCESS_JWT',
//             payload : res.data})
//     })}


// }

// catch{
// console.log("error ayya")
// }
// }







export const SignoutAction = ()=>{
    return (dispatch)=>{
        dispatch({type : "Logged Out"})
        
    }
}