import {authReducer} from './authReducer/authReducer'
import {jobReducer} from './userReducers/jobreducer'

import {combineReducers} from 'redux'
import dataReducer from './companyReducer/datareducer'

const rootReducer = combineReducers({
    auth : authReducer,
    data : dataReducer,
    job : jobReducer,
   

    
})

export default rootReducer