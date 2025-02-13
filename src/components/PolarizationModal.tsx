"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface PolarizationModalProps {
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

export default function PolarizationModal({
  isOpen,
  onClose,
}: PolarizationModalProps) {
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
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(66,168,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(66,168,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />

                  {/* Diagonal lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(66,168,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* Animated light beams */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <motion.div
                        key={`beam-${i}`}
                        className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          y: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 7 + i * 2,
                          repeat: Infinity,
                          delay: i * 1.5,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </div>

                  {/* Glowing orbs */}
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />
                </div>

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
                  className="relative z-10 space-y-8"
                >
                  <motion.div variants={itemVariants}>
                    <Dialog.Title className="text-3xl font-bold text-white mb-2">
                      Polarization Technology: A Quantum Leap in Molecular
                      Science
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
                      Polarization Technology enhances the potency and
                      bioavailability of molecules using a monopole
                      electromagnetic vibration system. This revolutionary
                      method fine-tunes molecular vibrations to optimize their
                      energy state, improving absorption, stability, and
                      effectiveness.
                    </p>

                    <motion.h3
                      variants={itemVariants}
                      className="text-xl font-semibold text-white mt-6"
                    >
                      How Polarization Technology Works
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
                              {num === 1 &&
                                "Monopole Electromagnetic Vibration:"}
                              {num === 2 && "Resonance Effect:"}
                              {num === 3 && "Quantum Energy Absorption:"}
                            </strong>{" "}
                            {num === 1 &&
                              "Generates specific frequencies that interact with molecules, increasing their energy levels."}
                            {num === 2 &&
                              "Alters the orbital motion of atoms, enhancing molecular activity and stability."}
                            {num === 3 &&
                              "Stimulates molecular vibrations, allowing molecules to absorb energy more efficiently."}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.h3
                      variants={itemVariants}
                      className="text-xl font-semibold text-white mt-6"
                    >
                      Key Benefits
                    </motion.h3>
                    <motion.div
                      variants={containerVariants}
                      className="grid md:grid-cols-2 gap-6 mt-4"
                    >
                      {[
                        {
                          title: "Enhanced Bioavailability",
                          description:
                            "Over 90% absorption rate compared to traditional delivery methods.",
                        },
                        {
                          title: "Faster Action",
                          description:
                            "Rapid onset through optimized molecular delivery systems.",
                        },
                        {
                          title: "Precise Dosing",
                          description:
                            "Consistent and controlled delivery with minimal side effects.",
                        },
                        {
                          title: "Improved Stability",
                          description:
                            "Enhanced molecular stability for longer-lasting effectiveness.",
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
