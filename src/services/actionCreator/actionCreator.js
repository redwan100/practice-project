import { RESET } from "../actionTypes/actionType"
import { DECREMENT, INCREMENT } from "../actionTypes/actionType"

export const incrementAction = (value)=>{
    return{
        type : INCREMENT,
        payload: value,
    }
}

export const decrementAction = (value)=>{
    return{
        type : DECREMENT,
        payload: value,
    }
}

export const resetAction = ()=>{
    return{
        type : RESET,
    }
}

