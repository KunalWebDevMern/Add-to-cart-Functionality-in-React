import React from "react";
import { createPortal } from "react-dom";

function Modal({ children,closeModal }) {
  return createPortal(
    <>
      <div className="fixed w-[100vw] h-[100vh] z-10 bg-[rgba(50,_50,_50,_0.9)]" onClick={closeModal}></div>
      <div className="fixed z-20 bg-[#fff] max-w-[1200px] w-[90%] left-[50%] -translate-x-[50%] top-[10%] max-h-[700px] h-[75%] overflow-y-auto p-[1rem] rounded-[0.5rem]">
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
