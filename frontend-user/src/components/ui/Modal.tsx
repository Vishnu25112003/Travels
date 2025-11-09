import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children, className = "" }) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden ${className}`}>
          <button aria-label="Close" onClick={onClose} className="absolute right-3 top-3 z-10 rounded-md bg-white/90 border px-2 py-1 text-sm hover:bg-white">✕</button>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
