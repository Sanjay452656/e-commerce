import {createSlice} from '@reduxjs/toolkit'

const initialState={
    items:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            console.log("ADD TO CART CALLED", action.payload);

            const item=action.payload;
            const is_exist=state.items.find((i)=>i.id===item.id);
            if(is_exist){
                is_exist.quantity+=1;
                console.log("INCREASED QUANTITY", is_exist.quantity);
            }else{
                state.items.push({...item,quantity:1})
                console.log("NEW ITEM ADDED", item);
            }
            console.log("UPDATED CART STATE", state.items);
        },
        removeFromCart:(state,action)=>{
            state.items=state.items.filter((i)=>i.id!==action.payload)
        },
        increaseQty:(state,action)=>{
            const item=state.items.find((i)=>i.id===action.payload);
            if(item){
                item.quantity+=1;
            }
        },
        decreaseQty:(state,action)=>{
            const item=state.items.find((i)=>i.id===item.id)
            if (!item) return;
            if(item && item.quantity>1){
                item.quantity-=1;
            }else{
                state.items=state.items.filter((i)=>i.id!==action.payload)
            }
        }
    }    
})

export const {addToCart,removeFromCart,increaseQty,decreaseQty} = cartSlice.actions;
export default cartSlice.reducer;