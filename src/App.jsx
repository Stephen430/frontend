import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  // Initial page load animation
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 0.8 
            }}
            className="text-primary text-3xl font-bold"
          >
            Food Delivery
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          variants={pageVariants}
          className="min-h-screen flex flex-col relative"
        >
          <AnimatePresence>
            {showLogin && 
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LoginPopup setShowLogin={setShowLogin} />
              </motion.div>
            }
          </AnimatePresence>
          <div className='app flex-1'>
            <Navbar setShowLogin={setShowLogin} />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/order' element={<PlaceOrder />} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App

