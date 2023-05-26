import { ActionType } from "../action/action-Type";

const initialState = {
    products:
    [
        {
            id: 1,
            category: "Men",
            title: "shirt",
            // imageLink: require('https://www.pexels.com/photo/green-tree-268533/'),
    },
    {
        id: 2,
        category: "Men",
        title: "shirt",
    },
    
    ],
    
}
console.log(initialState,"............")
export const productReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ActionType.SET_PRODUCTS:
            return state;
        default:
            return state;
            
    }
}