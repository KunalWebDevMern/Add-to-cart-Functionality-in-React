import React from "react";
import { useCart } from "../Context/CartProvider";
import { toast } from 'react-toastify';
function Product({ id, title, price, img }) {
  const { addNewCartItem, cart } = useCart();

  const handleAdd = () => {
    
  for (let item of cart) {
    if (item.id === id) {
      toast.error("item already exists");
      return;
    }
  }

    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };
    addNewCartItem(newCartItem);
    toast.info("item added");
  };
  return (
    <div className="bg-[#efefef] p-[1rem] [box-shadow:0_10px_10px_-3px_rgba(0,_0,_0,_0.1)] [transition:box-shadow_0.2_ease-in_,_transform_0.2s_ease-in] hover:[box-shadow:0_10px_10px_0px_rgba(0,_0,_0,_0.1)] hover:scale-[1.01]">
      <img className="max-w-[100%] h-[300px] object-contain aspect-[4/3] mix-blend-darken" src={img} alt={title} />
      <p className="my-[1rem] mx-[0] text-[1rem] font-medium leading-[1.5]">{title}</p>
      <p className="my-[1rem] mx-[0] text-[1rem] font-bold leading-[1.5]">&#8377; {price}</p>
      <button
        className="py-[0.5rem] px-[1rem] font-medium rounded-[0.5rem] cursor-pointer text-[#ecf0f1] border-none bg-[#2980b9] hover:bg-[#1a74b1] [transition:background-color_0.2s_ease-in]"
        onClick={handleAdd}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
