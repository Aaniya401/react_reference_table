import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()


  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col gap-2 items-center justify-center min-w-screen "
    >
      <motion.h1
        className="lg:text-8xl text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
      >
        Primary Presentations
        <br />
        (3 - 6 Years)
      </motion.h1>
      <motion.button
        onClick={() => navigate('/presentations')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-xl text-white font-bold p-3 bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer"
      >
        Jump In
      </motion.button>
    </motion.div>
  )
}

export default Home