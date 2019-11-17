
const initState = []

const dataReducer = (state= initState,action) =>{
    switch(action.type){
        
        case "COMPANIES GOT":
            console.log("Companies got")
            console.log(action.payload)
            return {
                ...state,
                
                 companies : action.payload
                
            }
            case "ADD JOB":
                console.log("ADDED JOB")
                console.log(state)
                return {
                    ...state,
                    
                     specificjobs : action.payload

                     
                    

                }
                
             case "APPLY_JOB":
                 console.log("applied")
                 return {
                     ...state,
                     
                         appliedjob : action.payload
                     
                    }
             case "DELETE_JOB":
        console.log("JOB DELETED")
                return {
                    ...state,
                    
                        deletedjob : action.payload
                    
                }
                case  "GET_USERS" :
                    console.log("get users matched")
                    
                    return {
                        ...state,
                        
                            users : action.payload
                        
                    }
                   
            case 'GET_APPLICANTS' :
                console.log("case matched")
                
                return {
                    ...state,
                    
                 applicants : action.payload
                    
                }
                
                default : return state       
}
}


export default dataReducer


