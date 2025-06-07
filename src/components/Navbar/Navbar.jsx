import { useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'
import { FiMenu, FiX, FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("menu")
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
      const { getTotalCartItems } = useContext(StoreContext)
    
    // Handle scrolling effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const navbarClass = `navbar ${isScrolled ? 'navbar-scrolled' : ''}`
    
    return (
        <motion.div 
            className={navbarClass}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link to='/'>
                <motion.img 
                    src={assets.logo} 
                    alt="Food Delivery" 
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                />
            </Link>
            
            {/* Desktop Menu */}
            <ul className="navbar-menu desktop-menu">
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact Us</a>
                </motion.li>
            </ul>
            
            {/* Mobile menu toggle */}
            <div className="mobile-menu-toggle">
                <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.button>
            </div>
            
            {/* Desktop right navigation */}
            <div className="navbar-right">
                <motion.div className="icon-container" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <FiSearch size={20} />
                </motion.div>                <motion.div 
                    className="navbar-search-icon"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link to='/cart'>
                        <FiShoppingBag size={20} />
                        {getTotalCartItems() > 0 && (
                            <motion.div 
                                className="cart-count"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                {getTotalCartItems()}
                            </motion.div>
                        )}
                    </Link>
                </motion.div>
                <motion.button 
                    onClick={()=>setShowLogin(true)}
                    whileHover={{ scale: 1.05, backgroundColor: '#f54748', color: '#fff' }}
                    whileTap={{ scale: 0.95 }}
                    className="signin-btn"
                >
                    <FiUser size={16} className="user-icon" />
                    <span>Sign In</span>
                </motion.button>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="mobile-menu-links">
                            <li>
                                <Link to='/' onClick={()=>{setMenu("home"); setMobileMenuOpen(false)}} className={menu==="home"?"active":""}>Home</Link>
                            </li>
                            <li>
                                <a href='#explore-menu' onClick={()=>{setMenu("menu"); setMobileMenuOpen(false)}} className={menu==="menu"?"active":""}>Menu</a>
                            </li>
                            <li>
                                <a href='#app-download' onClick={()=>{setMenu("mobile-app"); setMobileMenuOpen(false)}} className={menu==="mobile-app"?"active":""}>Mobile App</a>
                            </li>
                            <li>
                                <a href='#footer' onClick={()=>{setMenu("contact us"); setMobileMenuOpen(false)}} className={menu==="contact us"?"active":""}>Contact Us</a>
                            </li>
                            <li>
                                <Link to='/cart' onClick={() => setMobileMenuOpen(false)}>Cart</Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Navbar
