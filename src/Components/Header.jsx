import Modal from "./Ui/Modal";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { useCart } from "../Context/CartProvider";

function Header() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);
  return (
    <header className="bg-[#3879a5] text-[#ecf0f1] mb-[2rem]">
      <nav className="flex justify-between h-[64px] items-center max-w-[1280px] m-auto w-[90%]">
        <h1 className="">ARC Shop</h1>
        <button
          className="bg-transparent border-none text-white font-medium text-[1.1rem] flex gap-[0.8rem] cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <span className="relative">
            <BsCartFill />
            {totalQuantity >0 && (
              <span className="border-[0.5px] border-solid  absolute w-[20px] h-[20px] rounded-[50%] text-[0.7rem] bg-red-600 leading-[1.7] top-[-13px] right-[-10px]">
                {totalQuantity}
              </span>
            )}
          </span>
          <span>Cart</span>
        </button>
      </nav>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
}

export default Header;
