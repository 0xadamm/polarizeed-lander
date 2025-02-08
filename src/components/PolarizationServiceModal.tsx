"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface PolarizationServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const modalVariants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
    y: 20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function PolarizationServiceModal({
  isOpen,
  onClose,
}: PolarizationServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          {/* Background overlay */}
          <motion.div
            variants={overlayVariants}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal container */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                variants={modalVariants}
                className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 to-black p-8 shadow-xl"
              >
                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-4 top-4 text-white/80 hover:text-white"
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>

                {/* Content */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants}>
                    <Dialog.Title className="text-3xl font-bold text-white mb-2">
                      Revolutionize Your Products with Polarization
                    </Dialog.Title>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "6rem" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-1 bg-gradient-to-r from-purple-600 to-yellow-400"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="prose prose-invert max-w-none"
                  >
                    <p className="text-lg text-white/90">
                      Our Polarization as a Service (PaaS) platform leverages
                      cutting-edge nano-encapsulation and monopole
                      electromagnetic vibration technology to transform your
                      products effectiveness. We provide end-to-end solutions
                      for businesses seeking to enhance their formulations.
                    </p>

                    <motion.h3
                      variants={itemVariants}
                      className="text-xl font-semibold text-white my-6 "
                    >
                      Our Service Process
                    </motion.h3>
                    <motion.ul
                      variants={containerVariants}
                      className="space-y-3 text-white/90"
                    >
                      {[1, 2, 3].map((num) => (
                        <motion.li
                          key={num}
                          variants={itemVariants}
                          className="flex items-start gap-3"
                        >
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mt-1"
                          >
                            <span className="text-sm">{num}</span>
                          </motion.span>
                          <span>
                            <strong className="text-white">
                              {num === 1 && "Initial Consultation & Analysis:"}
                              {num === 2 && "Development & Testing:"}
                              {num === 3 && "Implementation & Support:"}
                            </strong>{" "}
                            {num === 1 &&
                              "We assess your product requirements and determine the optimal polarization parameters for your specific formulation."}
                            {num === 2 &&
                              "Our experts develop and test the enhanced formulation in our state-of-the-art facilities, ensuring optimal results."}
                            {num === 3 &&
                              "We provide comprehensive support for integrating the polarization technology into your production process."}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.h3
                      variants={itemVariants}
                      className="text-xl font-semibold text-white mt-6"
                    >
                      Service Benefits
                    </motion.h3>
                    <motion.div
                      variants={containerVariants}
                      className="grid md:grid-cols-2 gap-6 mt-4"
                    >
                      {[
                        {
                          title: "Rapid Integration",
                          description:
                            "Seamless implementation into your existing production processes with minimal disruption.",
                        },
                        {
                          title: "Quality Assurance",
                          description:
                            "Rigorous testing and validation throughout the enhancement process.",
                        },
                        {
                          title: "Scalable Solutions",
                          description:
                            "Flexible capacity to match your production needs, from small batches to full-scale manufacturing.",
                        },
                        {
                          title: "Ongoing Support",
                          description:
                            "Continuous technical assistance and optimization services for your enhanced products.",
                        },
                      ].map((benefit) => (
                        <motion.div
                          key={benefit.title}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          className="bg-white/5 p-4 rounded-lg transition-colors duration-200 hover:bg-white/10"
                        >
                          <h4 className="font-semibold text-white">
                            {benefit.title}
                          </h4>
                          <p className="text-white/80">{benefit.description}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
