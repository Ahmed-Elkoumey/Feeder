import { createAction,props } from "@ngrx/store";
import { ProductType } from "../interface/product-type";
export const addToWishList = createAction(
    '[wish-list] addTo WishList',
    props<{item : ProductType}>()
);



export const removeItem=createAction(
    '[wish-list] remove item',
    props<{id:string}>()
)