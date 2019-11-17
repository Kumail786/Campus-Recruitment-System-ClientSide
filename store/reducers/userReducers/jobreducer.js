

const inistate = {};



export const jobReducer = (state=inistate,action)=>{
    switch(action.type){
        case "SPECIFIC_JOBS":
            
            return {
                ...state,
                
                    specificjobs : action.payload
                
            }
            
               case "SPECIFIC_USER": 
                console.log("case matched")
            
                return {
                    ...state,
                    
                        specificuser : action.payload
                    
                }
        default :
        return state
    }
}
