import { ActionType } from "../action/action-Type";
// import "./src/images";
import tree from "./images/pexels-pixabay-268533.jpg"

const initialState  = {
    products:
    [
    {
            id: '' ,
            category: 'asd',
            title: "shirt",
            image: tree

    },
    {

    },
    {

    },
    {

    },
    {
        
    }
],
   
}
// export const productReducer = (state = initialState,{type,payload})=>{
//     switch(type){
//         case ActionType.SET_PRODUCTS:
//             return state;
//         default:
//             return state;
            
//     }
// }
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionType.SET_PRODUCTS:
        return { ...state, products: payload };
      case ActionType.ADD_PRODUCT:
        return { ...state, products: [...state.products, payload] };
      default:
        return state;
    }
  };