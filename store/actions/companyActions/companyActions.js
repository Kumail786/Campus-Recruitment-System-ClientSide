import axios from 'axios'

export const gettingCompanies = () =>{
    return async(dispatch) =>{
        axios.get('http://localhost:8000/companies').then(res=>{
            dispatch({type : 'COMPANIES GOT',payload: res.data})
            console.log("companies got")
            
        })}}
            
        
        
    
    


 export const CreateJob = (data) =>{
        return(dispatch) =>{
            
            try{
                axios.post('http://localhost:8000/jobs/addjob',data).then(res =>{
                   console.log(res.data)
                   dispatch({type : 'ADD JOB',
                payload : res.data})   
                })
                
            }
            catch{
                    return data
                 }

                
        }
        }


 //company getting complete List of Students
 
 export const allStudents = ()=>{
     return (dispatch)=>{
         try{
axios.get('http://localhost:8000/users').then(res=>{console.log(res.data)

dispatch({type : "GET_USERS",payload:res.data})
})
         }
         catch{
console.log('Error')
         }
     }
 }
 
 //company getting specific student

 export const specificStudent = (id)=>{
     return(dispatch)=>{
         try{
axios.get(`http://localhost:8000/companies/student/${id}`).then(res=>{console.log(res.data.user)

dispatch({type : "SPECIFIC_USER",payload : res.data.user})})

         }
         catch{
console.log("Error")
         }
     }
 }


 //company getting list of all applicants of specific job

 export const applicants = (id)=>{
     return(dispatch)=>{
         try{
axios.get(`http://localhost:8000/jobs/applications/${id}`).then(res=>{console.log(res.data)
dispatch({type : "GET_APPLICANTS",payload : res.data})})

         }
         catch{
console.log("Error")
         }
     }
 }


 //company deleting specific Job

 export const deleteJob = (id)=>{
     return(dispatch)=>{
         try{
axios.delete(`http://localhost:8000/jobs/delete/${id}`,(res)=>{
    console.log(res.data)
 dispatch({type : "DELETE_JOB"})   
})
         }catch{

         }
     }
 }