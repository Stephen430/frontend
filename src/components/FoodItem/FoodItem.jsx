import { useContext } from 'react'
import { motion } from 'framer-motion'
import './FoodItem.css'
import { StoreContext } from '../../context/storeContext'
import { assets } from '../../assets/assets'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FoodItem = ({id, name, price, description, image}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
        <motion.div 
            className='food-item'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -8 }}
        >
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                <div className="food-item-badge">Popular</div>
                
                {!cartItems[id] ? (
                    <motion.button 
                        className='add-btn'
                        onClick={() => addToCart(id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiPlus size={18} />
                    </motion.button>
                ) : (
                    <motion.div 
                        className='food-item-counter'
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                    >
                        <motion.button 
                            onClick={() => removeFromCart(id)}
                            whileTap={{ scale: 0.85 }}
                        >
                            <FiMinus size={16} />
                        </motion.button>
                        <p>{cartItems[id]}</p>
                        <motion.button 
                            onClick={() => addToCart(id)}
                            whileTap={{ scale: 0.85 }}
                        >
                            <FiPlus size={16} />
                        </motion.button>
                    </motion.div>
                )}
            </div>
            
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <h3>{name}</h3>
                    <div className="rating">
                        <img src={assets.rating_starts} alt="rating" />
                        <span>4.8</span>
                    </div>
                </div>
                <p className="food-item-desc">{description}</p>
                <div className="food-item-bottom">
                    <p className="food-item-price">${price}</p>
                    <span className="food-item-time">15-20 min</span>
                </div>
            </div>
        </motion.div>
    )
}

export default FoodItem
