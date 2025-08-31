import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'

export default function App() {
  const [step, setStep] = useState(0)
  const [size, setSize] = useState({ width: 1024, height: 768 })

  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const next = () => setStep((s) => s + 1)

  const card = {
    initial: { opacity: 0, y: 12, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -12, scale: 0.98 },
    transition: { duration: 0.35 }
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-center p-6">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="s0" {...card} className="max-w-md w-full bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 space-y-6">
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHlyenIxNGs2cXdmeTVmMmc0aGVnNGozZXE5ZWJ0MzhwbGNnNXhjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QY8tzLK9mWNVWM3Xj5/giphy.gif"
              alt="first gif"
              className="mx-auto rounded-2xl shadow-md"
            />
            <h1 className="text-2xl font-semibold text-pink-700">guess who hasn’t smoked cigarettes for one month</h1>
            <div className="flex gap-3 justify-center">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} onClick={next} className="bg-pink-500 text-white px-4 py-2 rounded-2xl shadow">
                meeeeeee
              </motion.button>
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} onClick={next} className="bg-pink-500 text-white px-4 py-2 rounded-2xl shadow">
                wowow i wonder who
              </motion.button>
            </div>
            <p className="text-pink-800">im so proud of you sayang!! keep going &lt;3</p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="s1" {...card} className="max-w-md w-full bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 space-y-6">
            <img
              src="https://share.google/images/2987hBknVvR9uWj8E"
              alt="second gif"
              className="mx-auto rounded-2xl shadow-md"
            />
            <h1 className="text-2xl font-semibold text-purple-700">how do u feel babe</h1>
            <div className="flex gap-3 justify-center">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} onClick={next} className="bg-purple-500 text-white px-4 py-2 rounded-2xl shadow">
                happy because my wife is happy hehe
              </motion.button>
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} onClick={next} className="bg-purple-500 text-white px-4 py-2 rounded-2xl shadow">
                greattt
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="s2" {...card} className="max-w-md w-full bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 space-y-6">
            <h1 className="text-2xl font-semibold text-rose-700">nak virtual hug and kiss?</h1>
            <div className="flex gap-3 justify-center">
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} onClick={next} className="bg-rose-500 text-white px-4 py-2 rounded-2xl shadow">
                nakkkkkk
              </motion.button>
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} onClick={next} className="bg-rose-500 text-white px-4 py-2 rounded-2xl shadow">
                yes please
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="s3" {...card} className="max-w-md w-full bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 space-y-6 relative overflow-hidden">
            <Confetti width={size.width} height={size.height} recycle={false} numberOfPieces={240} />
            <img
              src="https://share.google/images/goLD7TQ3sIp0butg4"
              alt="hug gif"
              className="mx-auto rounded-2xl shadow-md"
            />
            <img
              src="https://share.google/images/VydBcaXsY4u5SX2NX"
              alt="kiss gif"
              className="mx-auto rounded-2xl shadow-md"
            />
            <h1 className="text-2xl font-semibold text-pink-700">heres ur virtual hug and kiss love youuuu</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
