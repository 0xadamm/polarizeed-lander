import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  description: string;
  colorClass: string;
  imageSrc: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  category,
  description,
  colorClass,
  imageSrc,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalRef.current?.focus();

    const focusableElementsSelector =
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const modal = modalRef.current;
    const focusableElements = modal
      ? modal.querySelectorAll<HTMLElement>(focusableElementsSelector)
      : [];
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && focusableElements.length > 0) {
        if (document.activeElement === lastElement && !e.shiftKey) {
          e.preventDefault();
          firstElement?.focus();
        } else if (document.activeElement === firstElement && e.shiftKey) {
          e.preventDefault();
          lastElement?.focus();
        }
      }
    };

    modal?.addEventListener("keydown", handleKeyDown);
    return () => {
      modal?.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl ring-1 ring-white/20"
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 z-0 bg-gradient-to-br ${colorClass} opacity-90`}
            />

            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="group absolute right-4 top-4 rounded-full bg-black/30 p-2 backdrop-blur-sm transition-colors hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <svg
                  className="h-6 w-6 text-white/80 transition-colors group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <div className="flex gap-8">
                {/* Product Image */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="relative h-[400px] w-[280px]">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* Right Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-8">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      id="modal-title"
                      className="text-4xl font-bold tracking-tight text-white"
                    >
                      {title}
                    </motion.h2>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`mt-2 h-1 w-24 rounded-full bg-gradient-to-r ${colorClass}`}
                    />
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-2 text-xl font-medium text-white/90"
                    >
                      {category}
                    </motion.h3>
                  </div>

                  {/* Benefits */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed text-white/90">
                        {description}
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed text-white/90">
                        Experience breakthrough innovation with our advanced
                        delivery system, ensuring optimal absorption and
                        effectiveness.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
