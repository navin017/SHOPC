import { ActionType } from "../action/action-Type";

const initialState  = {
    products:
    [
    {
            id: '' ,
            category: 'asd',
            title: "shirt",
            // image: {Screenshot}

    },
    {
        id: 2,
        category: "Men",
        title: "shirt",
    },
    
    ],
   
}
export const productReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ActionType.SET_PRODUCTS:
            return state;
        default:
            return state;
            
    }
}