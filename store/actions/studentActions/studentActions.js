//getting all students to compani's dashboard
import axios from 'axios'

export const gettingUsers = () =>{
    return async(dispatch) =>{
        try{
            await axios.get('http://localhost:8000/users').then(res =>{
                   dispatch({type : 'GET USERS',payload: res.data}) 
                    
            })
            
        }catch{
            console.log("error")
        }
    }
}
           
            
    
   
   
    
    



    export const specificCompanyJobs = (id) =>{
        console.log(id)
            console.log('Action will despatced')
            
         try{ 
            return async(dispatch) =>{
               await axios.get(`http://localhost:8000/jobs/specific/${id}`).then(res=>{console.log(res.data)
                dispatch({type : 'SPECIFIC_JOBS',
                    payload : res.data.jobs})
            })}
        
    
    }
    
    catch{
    console.log("error ayya")
    }
    }


 //Action for Student Appling For Job
 
 export const applyJob = (id,student)=>{
     console.log(student)
     console.log("Action Going to Dispatch")
     try{
        return async (dispatch)=>{
            await axios.post(`http://localhost:8000/jobs/specific/apply/${id}`,student).then(res=>{console.log(res.data)
            dispatch({type : 'APPLY_JOB',payload : res.data})
        })
        }
     }catch{
console.log("error agya")
     }

 }



 //student Updating Profile 

 export const UpdateProfile = (id,profile)=>{
         console.log(profile)
         console.log(id)
         console.log("action is going to dispatch")

         try{
            return async (dispatch)=>{
                await axios.post(`http://localhost:8000/users/update/${id}`,profile).then(res=>{console.log(res.data)
                dispatch({type : 'UPDATE_STUDENT_RPOFILE',payload : res.data.profile})
            })
         }
        }
         catch{
console.log("erro agya")
         }
 }