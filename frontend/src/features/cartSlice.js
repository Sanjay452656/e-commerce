import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload;
            const exist=state.items.find((i)=>i._id===item._id);
            if(exist){
                exist.quantity+=1;
            }else{
                state.items.push({...item,quantity:1});
            }
        },
        removeFromCart:(state,action)=>{
            state.items=state.items.filter((i)=>i._id!==action.payload)
        },
        increaseQty:(state,action)=>{
            const item=state.items.find((i)=>i._id===action.payload);
            if(item){
                item.quantity+=1;
            }
        },
        decreaseQty:(state,action)=>{
            const item=state.items.find((i)=>i._id===action.payload);
            if(item && item.quantity>1){
                item.quantity-=1;
            }
        }
    }
})

export const {addToCart,removeFromCart,increaseQty,decreaseQty} = cartSlice.actions
export default cartSlice.reducer
