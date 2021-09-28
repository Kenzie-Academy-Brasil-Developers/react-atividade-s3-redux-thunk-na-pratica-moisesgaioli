import { ADD_COMMENT } from "./actionType";

const initialState = { name: "Kenzie", comments: [] }
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_COMMENT:
            return action.updatedUser
    
        default:
            return state;
    }
} 

export default userReducer;