import { useState } from 'react'
import { motion } from 'framer-motion'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // Add authentication logic here
        console.log("Form submitted:", currState)
    }

    const handleBackgroundClick = (e) => {
        if (e.target.className === 'login-popup') {
            setShowLogin(false)
        }
    }

    return (
        <div className='login-popup' onClick={handleBackgroundClick}>
            <motion.form 
                className="login-popup-container"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
            >
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <div className="input-with-icon">
                            <FiUser size={16} />
                            <input type="text" placeholder='Your name' required />
                        </div>
                    )}
                    <div className="input-with-icon">
                        <FiMail size={16} />
                        <input type="email" placeholder='Your email' required />
                    </div>
                    <div className="input-with-icon">
                        <FiLock size={16} />
                        <input type="password" placeholder='Password' required />
                    </div>
                </div>
                
                <button type="submit">
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                
                <div className="login-popup-condition">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </label>
                </div>
                
                {currState === "Login" ? 
                    <p className="switch-form">Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                  : <p className="switch-form">Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </motion.form>        </div>
    )
}

export default LoginPopup
