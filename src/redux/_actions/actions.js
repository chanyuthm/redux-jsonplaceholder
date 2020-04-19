import {FETCH_USER_LOADING} from './types'
import {FETCH_USER_SUCCESS} from './types'
import {FETCH_USER_FAIL} from './types'
import axios from 'axios'

const fetchloading = ()=>{
    return {
        type: FETCH_USER_LOADING
    }
}

const fetchsuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetcherror = (err) =>{
    return{
        type: FETCH_USER_FAIL,
        payload: err
    }
}

export const fetchusers = ()=>{
    return function(dispatch) {
        dispatch(fetchloading())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            const users = res.data.map(user => user.name)
            dispatch(fetchsuccess(users))
        })
        .catch( err =>{
            const errMsg = err.massage
            dispatch(fetcherror(errMsg))
        })
    }

}
