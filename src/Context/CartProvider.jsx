import {createContext,useContext,useReducer} from 'react'

const cartContext = createContext();
function cartReducer(cart,action){
    switch(action.type){
        case "ADD_Item":
            return [...cart,action.payload];
        case "increase":
            return cart.map(item =>(item.id === action.payload? {...item,quantity: item.quantity +1} : item));
        case "decrease":
            return cart.map(item => (item.id === action.payload ? {...item,quantity: item.quantity -1} : item));
        case "removeItem":
            return cart.filter( item => item.id !== action.payload)
        default:
            return cart;
    }
}
function CartProvider({children}) {
    const [cart , dispatch] = useReducer(cartReducer , []);
    const addNewCartItem = (newCartItem) =>{
        dispatch({type: 'ADD_Item',payload: newCartItem});
    }
    const handleIncrease = (id)=>{
        dispatch({type:'increase',payload:id})
    }
    const handleDecrease = (id)=>{
        dispatch({type:'decrease',payload:id})
    }
    const handleRemove = (id)=>{
        dispatch({type:'removeItem',payload:id})
    }
  return (
    <cartContext.Provider value={{cart,addNewCartItem,handleIncrease,handleDecrease,handleRemove}}>
        {children}
    </cartContext.Provider>
  )
}
export function useCart(){
    return useContext(cartContext);
}

export default CartProvider