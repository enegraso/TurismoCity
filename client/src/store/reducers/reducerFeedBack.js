import {ADD_FEEDBACK, GET_ALLCOMMENTS_OF_USER} from "../actions/feedBack"

const initialState = {
    FeedBackLoad: [],
    commentsOfUser: []
}

export const reducerFeedBack = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEEDBACK:
            //console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                FeedBackLoad: action.payload
                
            }
        case GET_ALLCOMMENTS_OF_USER:
            return{
                ...state,
                commentsOfUser: action.payload
            }
        default:
            return state;
    }
}