// Modal.tsx
import React from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ModalProps } from "../../../types/types";

const Modal: React.FC<ModalProps> = React.memo(
  ({ title, children, onClose }) => {
    if (typeof document === "undefined") return null;

    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-[#151929] w-full max-w-lg mx-auto rounded-lg shadow-lg p-6 relative max-h-[90vh] flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 z-10"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <h2 className="text-xl text-white font-medium mb-4 pr-8">{title}</h2>
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>,
      document.body
    );
  }
);

export default Modal;
