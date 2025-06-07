import { useState } from 'react'
import { motion } from 'framer-motion'
import './Footer.css'
import { assets } from '../../assets/assets'
import { FiFacebook, FiTwitter, FiInstagram, FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const Footer = () => {
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setEmail('')
  }
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <footer className='footer' id='footer'>
      <div className="footer-top">
        <motion.div 
          className="footer-newsletter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Subscribe to our newsletter</h3>
          <p>Stay updated with our latest offers and promotions</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              Subscribe <FiSend />
            </button>
          </form>
        </motion.div>
      </div>
      
      <div className="footer-content">
        <motion.div 
          className="footer-content-left"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <img src={assets.logo} alt="Food Delivery Logo" className="footer-logo" />
          <p>Delivering delicious meals to your doorstep. Our mission is to satisfy your cravings and elevate your dining experience with the finest ingredients and culinary expertise.</p>
          <div className="footer-social-icons">
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <FiFacebook size={20} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <FiTwitter size={20} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <FiInstagram size={20} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-content-center"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Delivery Info</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="footer-content-right"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2>Contact Us</h2>
          <ul className="contact-info">
            <li>
              <FiMapPin />
              <span>123 Food Street, Culinary City</span>
            </li>
            <li>
              <FiPhone />
              <span>+234-09037092197</span>
            </li>
            <li>
              <FiMail />
              <span>support@fooddelivery.com</span>
            </li>
          </ul>
        </motion.div>
      </div>
      
      <hr />
      
      <div className="footer-bottom">
        <p className="footer-copyright">© {new Date().getFullYear()} Food Delivery. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>
    </footer>  )
}

export default Footer
