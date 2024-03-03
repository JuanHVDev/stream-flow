"use client"
import { motion } from "framer-motion"
const Template = ({ children }: { children: React.ReactNode }) =>
{
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1, }}
      exit={{ x: -20, opacity: 0, }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}

export default Template