
import { createStore } from 'redux'
import thunkMildeware from 'redux-thunk'
import {applyMiddleware} from 'redux'

import {FETCH_USER_LOADING} from '../_actions/types'
import {FETCH_USER_SUCCESS} from '../_actions/types'
import {FETCH_USER_FAIL} from '../_actions/types'

const initialState = {
    isloading:false,
    users:[],
    error:''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USER_LOADING:
            console.log("loading")
            return{
                ...state,
                isloading:true
            }
        case FETCH_USER_SUCCESS:
            console.log("success loading")
            return{
                ...state,
                isloading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USER_FAIL:
            console.log("fail loading")
            return{
                ...state,
                isloading:false,
                users:[],
                error:action.payload
            }
    }
}

const store = createStore(reducer, applyMiddleware(thunkMildeware));

export default store;