import { FETCH_ALL, DELETE, CREATE, UPDATE, LIKE } from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
        case LIKE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return state
            
    }
}