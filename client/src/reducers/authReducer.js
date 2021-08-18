import { SET_USER } from "../actions/types";

const initialState = {
    isAuthenticated : false,
    user : {}

};
// write a function that will take the data and pass it to store
// every reducer takes two params (state, action)
// reducers don't have name, name of funciton is name of file
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state=initialState, action) {
    switch(action.type) {
       case SET_USER:
           return {
               ...state, 
               user:action.payload
           }
        default: //else

    return state;
}
}