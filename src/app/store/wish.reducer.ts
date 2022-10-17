import { createReducer,on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { ProductType } from "../interface/product-type";
import { addToWishList,removeItem } from "./wish.action";


interface myWish{
    wishListArr:ProductType[];

}


const base :myWish = {

    wishListArr:[]
}

export const addReducer = createReducer(
    base,
    on(addToWishList,(st,action)=>({
        ...st,
        wishListArr : [...st.wishListArr,action.item],
    })),
    on(removeItem,(state,action)=>({
        ...state,
        wishListArr : [...state.wishListArr].filter((index)=>
        index.id !== action.id
        ),
    }))
)
