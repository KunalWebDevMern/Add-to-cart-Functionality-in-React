import React from "react";
import { useCart } from "../Context/CartProvider";
import { AiOutlinePlus , AiOutlineMinus} from "react-icons/ai";
import { ImCross } from "react-icons/im";

function CartItem({ id, price, title, img, quantity }) {
  const { handleIncrease, handleDecrease, handleRemove } = useCart();
  return (
    <div className="border-b border-0 border-solid border-[#cdcdcd] grid grid-cols-[repeat(1,1fr)]  md:grid-cols-[repeat(1,1fr)] md:mb-[3rem] lg:grid-cols-[1.5fr_1fr] lg:mb-[3rem] mb-[1.5rem] gap-[2rem] pb-[1rem] items-center">
      {/* left */}
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="">
          <img className="w-[100px] h-[100px] rounded-[50%] object-cover object-top mix-blend-darken" src={img} alt={title} />
        </div>
        <h3 className=" whitespace-nowrap text-[15px] sm:text-[20px]">{title}</h3>
      </div>
      {/* right */}
      <div className=" items-center flex justify-start gap-[1rem] sm:justify-start sm:gap-[4rem]">
        <div className="flex items-center">
          <button className="py-[0.5rem] px-[1rem] bg-transparent border-none text-[1.2rem]" onClick={() => { handleIncrease(id) }}>
            <AiOutlinePlus />
          </button>
          <p className=" font-bold text-[1.2rem] p-[0.5rem]">{quantity}</p>
          <button className="py-[0.5rem] px-[1rem] bg-transparent border-none text-[1.2rem]" onClick={()=>{
            if( quantity <= 1){
                return;
            }
            handleDecrease(id)
        }}>
            <AiOutlineMinus />
          </button>
        </div>
        <p className=""> &#8377; {price * quantity}</p>
        <button className="py-[0.5rem] px-[1rem] bg-transparent border-none text-[1.2rem]" onClick={()=>{handleRemove(id)}}><ImCross /></button>
      </div>
    </div>
  );
}

export default CartItem;
