import {LOADER} from "../Constant/loaderConst";
const initialState = {
    open: false
}
export default function reducer(state = initialState, action){
    switch(action.type){
        case LOADER:
            return state = {...state, open: action.payload}
        default:
            return state
    }
}